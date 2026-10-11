import { getRedisClient, isConnected } from '../config/redis.js';
import { triggerGeofenceAlert } from './geofenceService.js';
import { globalAcoRouter } from './acoRouter.js';
import { broadcastAll } from './socketService.js';
import { query, getDbStatus } from '../config/db.js';

const QUEUE_KEY = 'safarnama:queue:dashcam_alerts';
let isWorkerRunning = false;

/**
 * Pushes a dashcam incident alert payload into Redis Queue
 * @param {Object} alertPayload
 */
export async function pushDashcamAlertToQueue(alertPayload) {
  const redis = getRedisClient();
  const serialized = JSON.stringify(alertPayload);

  // Push to queue
  await redis.lpush(QUEUE_KEY, serialized);

  // Trigger non-blocking worker tick
  if (!isWorkerRunning) {
    startBackgroundAlertWorker();
  }

  return { queued: true, alertId: alertPayload.id };
}

/**
 * Background worker processing queued edge alerts
 */
export async function startBackgroundAlertWorker() {
  if (isWorkerRunning) return;
  isWorkerRunning = true;
  // console.log('⚙️ [Queue Worker] Dashcam Alert Background Worker started.');

  const redis = getRedisClient();

  const processNextJob = async () => {
    try {
      const item = await redis.rpop(QUEUE_KEY);
      if (item) {
        const alert = JSON.parse(item);
        await processSingleDashcamAlert(alert);
      }
    } catch (err) {
      console.error('❌ [Queue Worker Error]', err.message);
    } finally {
      // Schedule next polling tick
      setTimeout(processNextJob, 500);
    }
  };

  processNextJob();
}

/**
 * Worker processor for single dashcam alert
 */
async function processSingleDashcamAlert(alert) {
  const { eventType, confidenceScore, lat, lng, vehicleId, mediaUrl, id } = alert;

  // 1. Auto-compute severity rating
  let severity = 'P3';
  if (['landslide', 'road_subsidence', 'bridge_damage'].includes(eventType)) {
    severity = confidenceScore > 0.85 ? 'P1' : 'P2';
  } else if (['flash_flood', 'rockfall'].includes(eventType)) {
    severity = confidenceScore > 0.80 ? 'P2' : 'P3';
  } else {
    severity = 'P4';
  }

  // 2. Format incident record
  const incidentData = {
    id: id || `inc-${Date.now()}`,
    title: `Dashcam Detected: ${eventType.replace('_', ' ').toUpperCase()} (${Math.round(confidenceScore * 100)}% Confidence)`,
    incidentType: eventType,
    severityRating: severity,
    lat,
    lng,
    highwayCode: alert.highwayCode || 'NH Corridors',
    affectedRadiusM: severity === 'P1' ? 25000 : 15000,
    vehicleId,
    mediaUrl,
  };

  // 3. Trigger 25km geofence spatial check and notification fan-out
  await triggerGeofenceAlert(incidentData);

  // 4. If high severity blockage, notify ACO router
  if (severity === 'P1' || severity === 'P2') {
    // Flag affected highway corridor in ACO graph
    // e.g. If near Sonapur, penalize Shillong-Silchar
    if (lat > 25.0 && lat < 25.5 && lng > 92.0 && lng < 92.6) {
      globalAcoRouter.updateEdgeBlockage('SHILLONG', 'SILCHAR', true);
      broadcastAll('route:reroute_notice', {
        corridor: 'SHILLONG <-> SILCHAR (NH06)',
        reason: 'Severe Landslide detected by Dashcam telemetry. Diversion recommended via Nagaon-Haflong.',
        affectedNodeA: 'SHILLONG',
        affectedNodeB: 'SILCHAR',
      });
    }
  }

  // 5. Update database status if DB connected
  if (getDbStatus() && alert.dbAlertId) {
    await query(
      `UPDATE dashcam_alerts SET processed_status = 'VERIFIED' WHERE id = $1`,
      [alert.dbAlertId]
    );
  }

  // 6. Broadcast processed event to Dashboard
  broadcastAll('dashcam:alert_processed', {
    ...incidentData,
    processedAt: new Date().toISOString(),
  });
}

export default {
  pushDashcamAlertToQueue,
  startBackgroundAlertWorker,
};
