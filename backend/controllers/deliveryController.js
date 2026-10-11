import { v4 as uuidv4 } from 'uuid';
import { query, getDbStatus } from '../config/db.js';
import { predictEtaAndRisk } from '../services/mlClient.js';
import { getOptimizedRoute } from '../services/acoRouter.js';
import { broadcastAll } from '../services/socketService.js';

// Allowed State Transitions
const VALID_TRANSITIONS = {
  PENDING: ['IN_TRANSIT', 'FAILED'],
  IN_TRANSIT: ['REROUTED', 'DELIVERED', 'FAILED'],
  REROUTED: ['IN_TRANSIT', 'DELIVERED', 'FAILED'],
  DELIVERED: [], // Terminal
  FAILED: ['PENDING'], // Allowed only on retry
};

// In-memory demo consignments
let memoryDeliveries = [
  {
    id: '55555555-5555-5555-5555-555555555555',
    trackingCode: 'SN-NER-2026-904',
    vehicleId: '11111111-1111-1111-1111-111111111111',
    assignedDriverId: '00000000-0000-0000-0000-000000000003',
    status: 'IN_TRANSIT',
    originName: 'Guwahati Logistics Hub (Amingaon)',
    destinationName: 'Silchar FMCG Distribution Depot',
    originCoords: { lat: 26.1445, lng: 91.7362 },
    destinationCoords: { lat: 24.8333, lng: 92.7926 },
    cargoWeightKg: 7850,
    cargoDescription: 'Essential Medical Supplies & Cold-Chain Vaccines',
    priority: 'CRITICAL_MEDICINE',
    etaTimestamp: new Date(Date.now() + 7 * 3600 * 1000 + 45 * 60 * 1000).toISOString(),
    predictedDurationMins: 465,
    riskScore: 78.5,
    stops: [
      { stopOrder: 1, waypointName: 'Shillong Meghalaya Depot', coords: { lat: 25.5788, lng: 91.8933 }, status: 'REACHED' },
      { stopOrder: 2, waypointName: 'Jowai Bypass Checkpoint', coords: { lat: 25.4500, lng: 92.2000 }, status: 'PENDING' },
      { stopOrder: 3, waypointName: 'Silchar FMCG Distribution Depot', coords: { lat: 24.8333, lng: 92.7926 }, status: 'PENDING' },
    ],
    rerouteReason: null,
    createdAt: new Date().toISOString(),
  },
  {
    id: '55555555-5555-5555-5555-555555555556',
    trackingCode: 'SN-NER-2026-907',
    vehicleId: '22222222-2222-2222-2222-222222222222',
    assignedDriverId: '00000000-0000-0000-0000-000000000004',
    status: 'IN_TRANSIT',
    originName: 'Shillong Meghalaya Depot',
    destinationName: 'Aizawl Mizoram Hub',
    originCoords: { lat: 25.5788, lng: 91.8933 },
    destinationCoords: { lat: 23.7271, lng: 92.7176 },
    cargoWeightKg: 5200,
    cargoDescription: 'High-Altitude Emergency Communications Equipment',
    priority: 'RELIEF',
    etaTimestamp: new Date(Date.now() + 11 * 3600 * 1000).toISOString(),
    predictedDurationMins: 660,
    riskScore: 84.0,
    stops: [],
    rerouteReason: null,
    createdAt: new Date().toISOString(),
  },
];

/**
 * Create Consignment / Delivery with Multi-Stop Waypoints
 */
export async function createDelivery(req, res) {
  try {
    const {
      trackingCode = `SN-NER-${Math.floor(1000 + Math.random() * 9000)}`,
      vehicleId,
      assignedDriverId,
      originName,
      destinationName,
      originCoords,
      destinationCoords,
      cargoWeightKg,
      cargoDescription,
      priority,
      stops = [],
    } = req.body;

    const deliveryId = uuidv4();

    // Query predictive ETA & Risk
    const mlResult = await predictEtaAndRisk({
      distanceKm: 280,
      avgGradientPct: 6.5,
      monsoonPrecipMmHr: 22.0,
      checkpointDelayMins: 45,
      cargoPayloadTons: cargoWeightKg / 1000,
      isNightTransit: false,
    });

    const predictedMins = mlResult.predictedDurationMins || 360;
    const etaTimestamp = new Date(Date.now() + predictedMins * 60 * 1000).toISOString();
    const riskScore = mlResult.terrainRiskScore || 50.0;

    if (getDbStatus()) {
      const sql = `
        INSERT INTO deliveries (
          id, tracking_code, vehicle_id, assigned_driver_id, status,
          origin_name, destination_name, origin_geom, destination_geom,
          cargo_weight_kg, cargo_description, priority, eta_timestamp,
          predicted_duration_mins, risk_score
        ) VALUES (
          $1, $2, $3, $4, 'PENDING',
          $5, $6, ST_SetSRID(ST_MakePoint($7, $8), 4326), ST_SetSRID(ST_MakePoint($9, $10), 4326),
          $11, $12, $13, $14, $15, $16
        ) RETURNING *;
      `;
      const result = await query(sql, [
        deliveryId,
        trackingCode,
        vehicleId || null,
        assignedDriverId || null,
        originName,
        destinationName,
        originCoords.lng,
        originCoords.lat,
        destinationCoords.lng,
        destinationCoords.lat,
        cargoWeightKg,
        cargoDescription,
        priority,
        etaTimestamp,
        predictedMins,
        riskScore,
      ]);

      // Insert multi-stops if provided
      for (const stop of stops) {
        await query(
          `INSERT INTO delivery_stops (delivery_id, stop_order, waypoint_name, waypoint_geom, expected_arrival)
           VALUES ($1, $2, $3, ST_SetSRID(ST_MakePoint($4, $5), 4326), $6)`,
          [deliveryId, stop.stopOrder, stop.waypointName, stop.coords.lng, stop.coords.lat, stop.expectedArrival || null]
        );
      }

      broadcastAll('delivery:created', result.rows[0]);
      return res.status(201).json({ success: true, delivery: result.rows[0] });
    }

    const newDelivery = {
      id: deliveryId,
      trackingCode,
      vehicleId,
      assignedDriverId,
      status: 'PENDING',
      originName,
      destinationName,
      originCoords,
      destinationCoords,
      cargoWeightKg,
      cargoDescription,
      priority,
      etaTimestamp,
      predictedDurationMins: predictedMins,
      riskScore,
      stops: stops.map((s) => ({ ...s, status: 'PENDING' })),
      createdAt: new Date().toISOString(),
    };
    memoryDeliveries.unshift(newDelivery);

    broadcastAll('delivery:created', newDelivery);
    return res.status(201).json({ success: true, delivery: newDelivery });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to create consignment: ' + error.message,
    });
  }
}

/**
 * Update Delivery Lifecycle Status with Strict State Machine
 * PATCH /api/v1/deliveries/:id/status
 */
export async function updateDeliveryStatus(req, res) {
  try {
    const { id } = req.params;
    const { status: targetStatus, rerouteReason, delayMins } = req.body;

    let currentDelivery = null;

    if (getDbStatus()) {
      const resCheck = await query('SELECT * FROM deliveries WHERE id = $1', [id]);
      if (resCheck.rows.length === 0) {
        return res.status(404).json({ success: false, message: 'Delivery record not found.' });
      }
      currentDelivery = resCheck.rows[0];
    } else {
      currentDelivery = memoryDeliveries.find((d) => d.id === id);
      if (!currentDelivery) {
        return res.status(404).json({ success: false, message: 'Delivery record not found.' });
      }
    }

    const currentStatus = currentDelivery.status;

    // Validate Transition
    const allowed = VALID_TRANSITIONS[currentStatus] || [];
    if (!allowed.includes(targetStatus)) {
      return res.status(400).json({
        success: false,
        error: 'ILLEGAL_STATE_TRANSITION',
        message: `Cannot transition delivery from state '${currentStatus}' to '${targetStatus}'. Allowed transitions: [${allowed.join(', ')}]`,
      });
    }

    // Dynamic adjustment for REROUTED
    let updateSql = `UPDATE deliveries SET status = $1, updated_at = NOW()`;
    const params = [targetStatus];
    let pIdx = 2;

    if (targetStatus === 'REROUTED') {
      updateSql += `, reroute_reason = $${pIdx++}`;
      params.push(rerouteReason || 'Dynamic bypass computed due to active hazard blockage.');
    }

    if (delayMins && delayMins > 0) {
      updateSql += `, eta_timestamp = eta_timestamp + interval '${delayMins} minutes'`;
    }

    updateSql += ` WHERE id = $${pIdx} RETURNING *`;
    params.push(id);

    let updatedRecord = null;
    if (getDbStatus()) {
      const result = await query(updateSql, params);
      updatedRecord = result.rows[0];
    } else {
      currentDelivery.status = targetStatus;
      if (rerouteReason) currentDelivery.rerouteReason = rerouteReason;
      if (delayMins) {
        const oldEta = new Date(currentDelivery.etaTimestamp).getTime();
        currentDelivery.etaTimestamp = new Date(oldEta + delayMins * 60 * 1000).toISOString();
      }
      currentDelivery.updatedAt = new Date().toISOString();
      updatedRecord = currentDelivery;
    }

    // Real-time broadcast to all connected operators
    broadcastAll('delivery:status', {
      deliveryId: id,
      trackingCode: updatedRecord.tracking_code || updatedRecord.trackingCode,
      previousStatus: currentStatus,
      newStatus: targetStatus,
      rerouteReason: updatedRecord.reroute_reason || updatedRecord.rerouteReason,
      eta: updatedRecord.eta_timestamp || updatedRecord.etaTimestamp,
      timestamp: new Date().toISOString(),
    });

    return res.json({
      success: true,
      message: `Delivery successfully shifted to '${targetStatus}'.`,
      delivery: updatedRecord,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to update delivery status: ' + error.message,
    });
  }
}

/**
 * Dynamic Recalculate Route using ACO
 * POST /api/v1/deliveries/:id/recalculate-route
 */
export async function recalculateDeliveryRoute(req, res) {
  try {
    const { id } = req.params;
    const { startHub = 'GUWAHATI', endHub = 'SILCHAR' } = req.body;

    // Execute Ant Colony Optimizer with dynamic blockage penalties
    const routePlan = await getOptimizedRoute(startHub, endHub, { forceRecalculate: true });

    // Update delivery record to REROUTED if path changed
    if (getDbStatus()) {
      await query(
        `UPDATE deliveries 
         SET status = 'REROUTED', 
             reroute_reason = 'ACO Algorithm computed dynamic terrain-safe bypass.',
             active_route_geojson = $1
         WHERE id = $2`,
        [JSON.stringify(routePlan), id]
      );
    } else {
      const d = memoryDeliveries.find((x) => x.id === id);
      if (d) {
        d.status = 'REROUTED';
        d.rerouteReason = 'ACO Algorithm computed dynamic terrain-safe bypass.';
        d.activeRoute = routePlan;
      }
    }

    broadcastAll('delivery:rerouted', {
      deliveryId: id,
      routePlan,
      timestamp: new Date().toISOString(),
    });

    return res.json({
      success: true,
      message: 'Route dynamically recalculated using Ant Colony Optimization.',
      routePlan,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to recalculate route: ' + error.message,
    });
  }
}

/**
 * List active deliveries
 */
export async function listDeliveries(req, res) {
  try {
    if (getDbStatus()) {
      const sql = `
        SELECT 
          d.*,
          v.registration_number as vehicle_registration,
          v.speed_kmh as vehicle_speed,
          u.full_name as driver_name,
          u.phone_number as driver_phone
        FROM deliveries d
        LEFT JOIN vehicles v ON d.vehicle_id = v.id
        LEFT JOIN users u ON d.assigned_driver_id = u.id
        ORDER BY d.created_at DESC;
      `;
      const result = await query(sql);
      return res.json({ success: true, count: result.rows.length, deliveries: result.rows });
    }

    return res.json({ success: true, count: memoryDeliveries.length, deliveries: memoryDeliveries });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch deliveries: ' + error.message,
    });
  }
}

export default {
  createDelivery,
  updateDeliveryStatus,
  recalculateDeliveryRoute,
  listDeliveries,
};
