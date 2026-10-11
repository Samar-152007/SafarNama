import { v4 as uuidv4 } from 'uuid';
import { query, getDbStatus } from '../config/db.js';
import { broadcastAll, broadcastToRoom } from '../services/socketService.js';
import { getRedisClient } from '../config/redis.js';

// In-memory store for fallback/dev demo
let memoryVehicles = [
  {
    id: '11111111-1111-1111-1111-111111111111',
    registrationNumber: 'AS-01-GC-4921',
    modelName: 'Tata Prima 4x4 Heavy Hauler',
    vehicleType: 'Heavy Heavy Cargo',
    maxPayloadKg: 14000,
    status: 'EN_ROUTE',
    driverName: 'Hemen Kalita',
    driverPhone: '+919862000003',
    lat: 26.1445,
    lng: 91.7362,
    altitude: 65,
    speed: 52.4,
    heading: 82,
    fuelPct: 76.5,
    batteryHealthPct: 96,
    engineTemp: 88,
    tirePressurePsi: 34.5,
    activeConsignment: 'SN-NER-2026-904',
    lastPingAt: new Date().toISOString(),
  },
  {
    id: '22222222-2222-2222-2222-222222222222',
    registrationNumber: 'ML-05-D-8812',
    modelName: 'Ashok Leyland Mountain Rhino',
    vehicleType: 'Medium Freight',
    maxPayloadKg: 9000,
    status: 'EN_ROUTE',
    driverName: 'Lalrintluanga Mizo',
    driverPhone: '+919862000004',
    lat: 25.5788,
    lng: 91.8933,
    altitude: 1520,
    speed: 38.0,
    heading: 135,
    fuelPct: 64.0,
    batteryHealthPct: 94,
    engineTemp: 91.5,
    tirePressurePsi: 35.0,
    activeConsignment: 'SN-NER-2026-907',
    lastPingAt: new Date().toISOString(),
  },
  {
    id: '33333333-3333-3333-3333-333333333333',
    registrationNumber: 'TR-01-T-3304',
    modelName: 'Mahindra Furio 11 Express',
    vehicleType: 'Express Cold-Chain',
    maxPayloadKg: 6500,
    status: 'AVAILABLE',
    driverName: 'Unassigned',
    driverPhone: '',
    lat: 23.8315,
    lng: 91.2868,
    altitude: 40,
    speed: 0.0,
    heading: 0,
    fuelPct: 89.0,
    batteryHealthPct: 99,
    engineTemp: 72,
    tirePressurePsi: 36.0,
    activeConsignment: null,
    lastPingAt: new Date().toISOString(),
  },
];

/**
 * Register / Onboard a new vehicle
 */
export async function registerVehicle(req, res) {
  try {
    const { registrationNumber, modelName, vehicleType, maxPayloadKg, driverId, initialLocation } = req.body;
    const vehicleId = uuidv4();
    const lat = initialLocation?.lat || 26.1445;
    const lng = initialLocation?.lng || 91.7362;

    if (getDbStatus()) {
      const sql = `
        INSERT INTO vehicles (id, registration_number, model_name, vehicle_type, max_payload_kg, driver_id, last_location)
        VALUES ($1, $2, $3, $4, $5, $6, ST_SetSRID(ST_MakePoint($7, $8), 4326))
        RETURNING id, registration_number, model_name, vehicle_type, max_payload_kg, status, created_at;
      `;
      const result = await query(sql, [vehicleId, registrationNumber, modelName, vehicleType, maxPayloadKg, driverId || null, lng, lat]);
      return res.status(201).json({
        success: true,
        message: 'Vehicle successfully onboarded into fleet registry.',
        vehicle: result.rows[0],
      });
    }

    const newVehicle = {
      id: vehicleId,
      registrationNumber,
      modelName,
      vehicleType,
      maxPayloadKg,
      status: 'AVAILABLE',
      driverId: driverId || null,
      driverName: 'Assigned Driver',
      lat,
      lng,
      altitude: 100,
      speed: 0,
      heading: 0,
      fuelPct: 100,
      batteryHealthPct: 100,
      engineTemp: 85,
      tirePressurePsi: 35,
      lastPingAt: new Date().toISOString(),
    };
    memoryVehicles.push(newVehicle);

    return res.status(201).json({
      success: true,
      message: 'Vehicle successfully onboarded into fleet registry.',
      vehicle: newVehicle,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error onboarding vehicle: ' + error.message,
    });
  }
}

/**
 * Ingest live GPS telemetry ping
 */
export async function ingestTelemetryPing(req, res) {
  try {
    const { id } = req.params;
    const { lat, lng, altitude, speed, heading, fuelPct, engineTemp, batteryPct, recordedAt } = req.body;

    const pingTime = recordedAt || new Date().toISOString();

    if (getDbStatus()) {
      // 1. Update vehicle state
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
        [lng, lat, altitude, speed, heading, fuelPct, engineTemp, batteryPct, pingTime, id]
      );

      // 2. Insert telemetry record
      await query(
        `INSERT INTO telemetry_logs (vehicle_id, client_tx_id, location, altitude_m, speed_kmh, heading_deg, fuel_pct, engine_temp_c, battery_pct, recorded_at)
         VALUES ($1, $2, ST_SetSRID(ST_MakePoint($3, $4), 4326), $5, $6, $7, $8, $9, $10, $11)
         ON CONFLICT (client_tx_id) DO NOTHING`,
        [id, `ping_${id}_${Date.now()}`, lng, lat, altitude, speed, heading, fuelPct, engineTemp, batteryPct, pingTime]
      );
    } else {
      // Update memory vehicle
      const v = memoryVehicles.find((x) => x.id === id);
      if (v) {
        v.lat = lat;
        v.lng = lng;
        v.altitude = altitude;
        v.speed = speed;
        v.heading = heading;
        v.fuelPct = fuelPct;
        v.engineTemp = engineTemp;
        v.batteryHealthPct = batteryPct;
        v.lastPingAt = pingTime;
      }
    }

    const telemetryPayload = {
      vehicleId: id,
      lat,
      lng,
      altitude,
      speed,
      heading,
      fuelPct,
      engineTemp,
      batteryPct,
      recordedAt: pingTime,
    };

    // Cache latest vehicle state in Redis
    try {
      const redis = getRedisClient();
      await redis.set(`vehicle:latest:${id}`, JSON.stringify(telemetryPayload), 'EX', 3600);
    } catch (e) {}

    // Broadcast live telemetry to connected React dashboard
    broadcastAll('telemetry:update', telemetryPayload);
    broadcastToRoom(`vehicle:${id}`, 'telemetry:vehicle_ping', telemetryPayload);

    return res.status(200).json({
      success: true,
      message: 'Telemetry ping accepted and broadcasted.',
      data: telemetryPayload,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to process telemetry ping: ' + error.message,
    });
  }
}

/**
 * Spatial Proximity Query using PostGIS ST_DWithin
 * GET /api/v1/vehicles/proximity?lat=26.14&lng=91.73&radius=50000
 */
export async function getVehiclesInProximity(req, res) {
  try {
    const lat = parseFloat(req.query.lat);
    const lng = parseFloat(req.query.lng);
    const radiusMeters = parseFloat(req.query.radius) || 25000;

    if (isNaN(lat) || isNaN(lng)) {
      return res.status(400).json({
        success: false,
        message: 'Valid lat and lng query parameters are required.',
      });
    }

    if (getDbStatus()) {
      const sql = `
        SELECT 
          v.id,
          v.registration_number,
          v.model_name,
          v.vehicle_type,
          v.status,
          v.speed_kmh,
          v.fuel_pct,
          ST_X(v.last_location::geometry) as lng,
          ST_Y(v.last_location::geometry) as lat,
          ROUND(ST_Distance(v.last_location::geography, ST_SetSRID(ST_MakePoint($1, $2), 4326)::geography)::numeric, 1) as distance_meters
        FROM vehicles v
        WHERE v.last_location IS NOT NULL
          AND ST_DWithin(
            v.last_location::geography,
            ST_SetSRID(ST_MakePoint($1, $2), 4326)::geography,
            $3
          )
        ORDER BY distance_meters ASC;
      `;
      const result = await query(sql, [lng, lat, radiusMeters]);
      return res.json({
        success: true,
        query: { lat, lng, radiusMeters },
        count: result.rows.length,
        vehicles: result.rows,
      });
    }

    // In-memory fallback
    const matches = memoryVehicles.map((v) => {
      // Approximate Haversine
      const dLat = ((v.lat - lat) * Math.PI) / 180;
      const dLon = ((v.lng - lng) * Math.PI) / 180;
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos((lat * Math.PI) / 180) * Math.cos((v.lat * Math.PI) / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const dist = 6371000 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return { ...v, distance_meters: Math.round(dist) };
    }).filter((v) => v.distance_meters <= radiusMeters);

    return res.json({
      success: true,
      query: { lat, lng, radiusMeters },
      count: matches.length,
      vehicles: matches,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Spatial proximity query failed: ' + error.message,
    });
  }
}

/**
 * Get Vehicle Health Diagnostics
 */
export async function getVehicleDiagnostics(req, res) {
  try {
    const { id } = req.params;

    if (getDbStatus()) {
      const sql = `
        SELECT 
          id, registration_number, model_name, status,
          fuel_pct, battery_health_pct, engine_temp_c, tire_pressure_psi,
          speed_kmh, altitude_m, last_ping_at
        FROM vehicles
        WHERE id = $1;
      `;
      const result = await query(sql, [id]);
      if (result.rows.length === 0) {
        return res.status(404).json({ success: false, message: 'Vehicle not found.' });
      }
      return res.json({ success: true, diagnostics: result.rows[0] });
    }

    const v = memoryVehicles.find((x) => x.id === id);
    if (!v) {
      return res.status(404).json({ success: false, message: 'Vehicle not found.' });
    }

    return res.json({
      success: true,
      diagnostics: {
        id: v.id,
        registrationNumber: v.registrationNumber,
        modelName: v.modelName,
        status: v.status,
        fuelPct: v.fuelPct,
        batteryHealthPct: v.batteryHealthPct,
        engineTemp: v.engineTemp,
        tirePressurePsi: v.tirePressurePsi,
        speed: v.speed,
        altitude: v.altitude,
        lastPingAt: v.lastPingAt,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error fetching diagnostics: ' + error.message,
    });
  }
}

/**
 * List all fleet vehicles
 */
export async function listVehicles(req, res) {
  try {
    if (getDbStatus()) {
      const sql = `
        SELECT 
          v.id, v.registration_number, v.model_name, v.vehicle_type, v.max_payload_kg,
          v.status, v.speed_kmh, v.fuel_pct, v.battery_health_pct, v.engine_temp_c,
          v.altitude_m, v.last_ping_at,
          ST_X(v.last_location::geometry) as lng,
          ST_Y(v.last_location::geometry) as lat,
          u.full_name as driver_name,
          u.phone_number as driver_phone
        FROM vehicles v
        LEFT JOIN users u ON v.driver_id = u.id
        ORDER BY v.registration_number ASC;
      `;
      const result = await query(sql);
      return res.json({ success: true, count: result.rows.length, vehicles: result.rows });
    }

    return res.json({ success: true, count: memoryVehicles.length, vehicles: memoryVehicles });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve vehicles: ' + error.message,
    });
  }
}

export default {
  registerVehicle,
  ingestTelemetryPing,
  getVehiclesInProximity,
  getVehicleDiagnostics,
  listVehicles,
};
