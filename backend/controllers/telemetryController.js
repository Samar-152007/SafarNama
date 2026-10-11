import { query, getDbStatus } from '../config/db.js';
import { getRedisClient } from '../config/redis.js';
import { broadcastAll } from '../services/socketService.js';

// In-memory set of transaction IDs for idempotency deduplication
const seenClientTxIds = new Set();

/**
 * Idempotent Dead-Zone Offline Telemetry Sync
 * POST /api/v1/telemetry/batch
 */
export async function syncOfflineTelemetryBatch(req, res) {
  try {
    const { vehicleId, clientBatchTxId, logs } = req.body;
    const redis = getRedisClient();

    // 1. Idempotency check on batch level
    const batchKey = `safarnama:batch_idempotency:${clientBatchTxId}`;
    try {
      const cachedResponse = await redis.get(batchKey);
      if (cachedResponse) {
        return res.status(200).json(JSON.parse(cachedResponse));
      }
    } catch (e) {}

    let processedCount = 0;
    let duplicateCount = 0;
    let latestLog = null;

    // Sort logs chronologically to preserve vehicle path history
    const sortedLogs = [...logs].sort(
      (a, b) => new Date(a.recordedAt).getTime() - new Date(b.recordedAt).getTime()
    );

    if (getDbStatus()) {
      for (const log of sortedLogs) {
        const {
          clientTxId,
          lat,
          lng,
          altitude = 120,
          speed,
          heading = 0,
          fuelPct,
          engineTemp = 85,
          batteryPct = 95,
          cellularRssi = -110,
          recordedAt,
        } = log;

        try {
          const sql = `
            INSERT INTO telemetry_logs (
              vehicle_id, client_tx_id, location, altitude_m, speed_kmh,
              heading_deg, fuel_pct, engine_temp_c, battery_pct, cellular_rssi_dbm,
              was_offline_buffered, recorded_at
            ) VALUES (
              $1, $2, ST_SetSRID(ST_MakePoint($3, $4), 4326), $5, $6,
              $7, $8, $9, $10, $11,
              TRUE, $12
            ) ON CONFLICT (client_tx_id) DO NOTHING
            RETURNING id;
          `;
          const insertResult = await query(sql, [
            vehicleId,
            clientTxId,
            lng,
            lat,
            altitude,
            speed,
            heading,
            fuelPct,
            engineTemp,
            batteryPct,
            cellularRssi,
            recordedAt,
          ]);

          if (insertResult.rowCount > 0) {
            processedCount++;
            latestLog = log;
          } else {
            duplicateCount++;
          }
        } catch (err) {
          duplicateCount++;
        }
      }

      // Update vehicle's last known state with the most recent ping
      if (latestLog) {
        await query(
          `UPDATE vehicles
           SET last_location = ST_SetSRID(ST_MakePoint($1, $2), 4326),
               altitude_m = $3,
               speed_kmh = $4,
               heading_deg = $5,
               fuel_pct = $6,
               engine_temp_c = $7,
               battery_health_pct = $8,
               last_ping_at = $9
           WHERE id = $10`,
          [
            latestLog.lng,
            latestLog.lat,
            latestLog.altitude || 120,
            latestLog.speed,
            latestLog.heading || 0,
            latestLog.fuelPct,
            latestLog.engineTemp || 85,
            latestLog.batteryPct || 95,
            latestLog.recordedAt,
            vehicleId,
          ]
        );
      }
    } else {
      // In-memory deduplication
      for (const log of sortedLogs) {
        if (seenClientTxIds.has(log.clientTxId)) {
          duplicateCount++;
        } else {
          seenClientTxIds.add(log.clientTxId);
          processedCount++;
          latestLog = log;
        }
      }
    }

    const responsePayload = {
      success: true,
      message: `Dead-zone synchronization completed. Processed: ${processedCount}, Duplicates ignored: ${duplicateCount}.`,
      vehicleId,
      clientBatchTxId,
      syncedCount: processedCount,
      skippedDuplicateCount: duplicateCount,
      lastRecordedAt: latestLog?.recordedAt || null,
      cellularResumed: true,
    };

    // Cache batch response for 24 hours to guarantee idempotency across network retries
    try {
      await redis.set(batchKey, JSON.stringify(responsePayload), 'EX', 86400);
    } catch (e) {}

    // Broadcast synchronization event to live dashboard
    broadcastAll('telemetry:deadzone_synced', {
      vehicleId,
      batchTxId: clientBatchTxId,
      recordsSynced: processedCount,
      latestLocation: latestLog ? { lat: latestLog.lat, lng: latestLog.lng } : null,
      resumedAt: new Date().toISOString(),
    });

    return res.status(200).json(responsePayload);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to synchronize offline telemetry batch: ' + error.message,
    });
  }
}

export default {
  syncOfflineTelemetryBatch,
};
