import { query, getDbStatus } from '../config/db.js';
import { getRedisPub } from '../config/redis.js';
import { broadcastToRoom } from './socketService.js';

/**
 * Haversine formula for in-memory fallback proximity calculation
 */
function haversineDistanceMeters(lat1, lon1, lat2, lon2) {
  const R = 6371000; // Earth's radius in meters
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/**
 * Finds all vehicles within a 25km spatial geofence of an incident
 * @param {number} lng
 * @param {number} lat
 * @param {number} radiusMeters (default: 25,000 meters = 25 km)
 */
export async function findVehiclesWithinRadius(lng, lat, radiusMeters = 25000) {
  if (getDbStatus()) {
    const sql = `
      SELECT 
        v.id, 
        v.registration_number, 
        v.model_name,
        v.status, 
        v.driver_id,
        u.full_name as driver_name,
        u.phone_number as driver_phone,
        ST_X(v.last_location::geometry) as lng,
        ST_Y(v.last_location::geometry) as lat,
        ROUND(ST_Distance(v.last_location::geography, ST_SetSRID(ST_MakePoint($1, $2), 4326)::geography)::numeric, 1) as distance_meters
      FROM vehicles v
      LEFT JOIN users u ON v.driver_id = u.id
      WHERE v.last_location IS NOT NULL
        AND ST_DWithin(
          v.last_location::geography, 
          ST_SetSRID(ST_MakePoint($1, $2), 4326)::geography, 
          $3
        )
      ORDER BY distance_meters ASC;
    `;
    const res = await query(sql, [lng, lat, radiusMeters]);
    return res.rows;
  }

  // Fallback in-memory demo fleet
  const mockVehicles = [
    { id: '11111111-1111-1111-1111-111111111111', registration_number: 'AS-01-GC-4921', driver_name: 'Hemen Kalita', lat: 25.20, lng: 92.30 },
    { id: '22222222-2222-2222-2222-222222222222', registration_number: 'ML-05-D-8812', driver_name: 'Lalrintluanga Mizo', lat: 25.57, lng: 91.89 },
  ];

  return mockVehicles
    .map((v) => {
      const dist = haversineDistanceMeters(lat, lng, v.lat, v.lng);
      return { ...v, distance_meters: Math.round(dist) };
    })
    .filter((v) => v.distance_meters <= radiusMeters);
}

/**
 * Triggers spatial geofence broadcast to alert vehicles within 25km radius
 */
export async function triggerGeofenceAlert(incident) {
  const { lng, lat, title, severityRating, incidentType, highwayCode } = incident;
  const radius = incident.affectedRadiusM || 25000;

  const affectedVehicles = await findVehiclesWithinRadius(lng, lat, radius);

  const payload = {
    incidentId: incident.id,
    title,
    severity: severityRating || 'P1',
    incidentType,
    highway: highwayCode,
    coordinates: { lat, lng },
    radiusKm: Math.round(radius / 1000),
    affectedVehicleCount: affectedVehicles.length,
    vehiclesAlerted: affectedVehicles.map((v) => ({
      id: v.id,
      reg: v.registration_number,
      distanceKm: +(v.distance_meters / 1000).toFixed(1),
    })),
    timestamp: new Date().toISOString(),
    recommendation: severityRating === 'P1'
      ? 'IMMEDIATE HALT / DIVERSION: Highway fully impassable due to major debris/flooding.'
      : 'CAUTION: Heavy reduction in speed. Road gradient & traction compromised.',
  };

  // Publish via Redis Pub/Sub for distributed socket clusters
  try {
    const pub = getRedisPub();
    await pub.publish('geofence:alerts', JSON.stringify(payload));
  } catch (err) {
    // Non-fatal
  }

  // Direct socket broadcast
  broadcastToRoom('fleet', 'geofence:alert', payload);

  return payload;
}

export default {
  findVehiclesWithinRadius,
  triggerGeofenceAlert,
};
