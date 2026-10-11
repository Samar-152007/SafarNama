import { v4 as uuidv4 } from 'uuid';
import { query, getDbStatus } from '../config/db.js';
import { triggerGeofenceAlert } from '../services/geofenceService.js';
import { pushDashcamAlertToQueue } from '../services/queueService.js';
import { generatePresignedUploadUrl } from '../middleware/upload.js';
import { globalAcoRouter } from '../services/acoRouter.js';
import { broadcastAll } from '../services/socketService.js';

// In-memory demo incidents
let memoryIncidents = [
  {
    id: '44444444-4444-4444-4444-444444444441',
    title: 'Major Landslide & Rockfall at Sonapur Tunnel',
    incidentType: 'landslide',
    severityRating: 'P1',
    lat: 25.1378,
    lng: 92.3551,
    highwayCode: 'NH06',
    stateCode: 'ML',
    description: 'Heavy monsoon downpour triggered 200m debris flow blocking both lanes between Jowai and Silchar.',
    affectedRadiusM: 25000,
    isActive: true,
    estimatedClearanceAt: new Date(Date.now() + 14 * 3600 * 1000).toISOString(),
    mediaUrl: '/uploads/dashcam/sample_landslide_sonapur.mp4',
    confidenceScore: 0.965,
    reportedAt: new Date().toISOString(),
  },
  {
    id: '44444444-4444-4444-4444-444444444442',
    title: 'Kaziranga Southern Bypass Flash Flooding',
    incidentType: 'flash_flood',
    severityRating: 'P2',
    lat: 26.5872,
    lng: 93.4112,
    highwayCode: 'NH27',
    stateCode: 'AS',
    description: 'Brahmaputra overflow submerged 3.2km highway stretch near Bagori; heavy vehicle diversion active.',
    affectedRadiusM: 15000,
    isActive: true,
    estimatedClearanceAt: new Date(Date.now() + 6 * 3600 * 1000).toISOString(),
    mediaUrl: null,
    confidenceScore: 0.890,
    reportedAt: new Date().toISOString(),
  },
];

/**
 * Automatically compute severity rating (P1 to P4) based on terrain metrics
 */
export function computeIncidentSeverity({ incidentType, isRoadBlocked, affectedRadiusM }) {
  if (isRoadBlocked || ['landslide', 'bridge_damage'].includes(incidentType)) {
    return 'P1'; // Critical: completely impassable
  }
  if (['flash_flood', 'road_subsidence'].includes(incidentType)) {
    return 'P2'; // High: severe hazard with active detour
  }
  if (['fallen_tree', 'rockfall'].includes(incidentType) || affectedRadiusM > 10000) {
    return 'P3'; // Moderate: partial blockage / single lane crawl
  }
  return 'P4'; // Low: heavy fog / advisory
}

/**
 * Report a road incident or hazard
 */
export async function reportIncident(req, res) {
  try {
    const {
      title,
      incidentType,
      severityRating,
      lat,
      lng,
      highwayCode,
      stateCode,
      description,
      affectedRadiusM = 5000,
      isRoadBlocked = false,
      estimatedClearanceMins = 360,
    } = req.body;

    const id = uuidv4();
    const computedSeverity = severityRating || computeIncidentSeverity({ incidentType, isRoadBlocked, affectedRadiusM });
    const clearanceTime = new Date(Date.now() + estimatedClearanceMins * 60 * 1000).toISOString();

    const incidentData = {
      id,
      title,
      incidentType,
      severityRating: computedSeverity,
      lat,
      lng,
      highwayCode,
      stateCode,
      description,
      affectedRadiusM,
      isActive: true,
      estimatedClearanceAt: clearanceTime,
      reportedAt: new Date().toISOString(),
    };

    if (getDbStatus()) {
      const sql = `
        INSERT INTO incidents (
          id, title, incident_type, severity_rating, location,
          highway_code, state_code, description, affected_radius_m,
          is_active, estimated_clearance_at, reported_by
        ) VALUES (
          $1, $2, $3, $4, ST_SetSRID(ST_MakePoint($5, $6), 4326),
          $7, $8, $9, $10,
          TRUE, $11, $12
        ) RETURNING *;
      `;
      await query(sql, [
        id,
        title,
        incidentType,
        computedSeverity,
        lng,
        lat,
        highwayCode,
        stateCode,
        description,
        affectedRadiusM,
        clearanceTime,
        req.user?.id || null,
      ]);
    } else {
      memoryIncidents.unshift(incidentData);
    }

    // Trigger PostGIS 25km geofence query and emergency push notification
    const geofenceResult = await triggerGeofenceAlert(incidentData);

    // If P1 or P2 blockage, update ACO route weights
    if (computedSeverity === 'P1' && isRoadBlocked) {
      if (highwayCode.toUpperCase().includes('NH06')) {
        globalAcoRouter.updateEdgeBlockage('SHILLONG', 'SILCHAR', true);
      }
    }

    broadcastAll('incident:new', {
      ...incidentData,
      alertedVehicles: geofenceResult.vehiclesAlerted,
    });

    return res.status(201).json({
      success: true,
      message: `Incident registered with computed severity ${computedSeverity}. 25km geofence alert dispatched.`,
      incident: incidentData,
      geofenceAlert: geofenceResult,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to report incident: ' + error.message,
    });
  }
}

/**
 * Edge Dashcam Alert Ingestion Endpoint
 * POST /api/v1/incidents/dashcam-alert
 * Supports lightweight JSON alert or multipart upload containing 5-second video clip
 */
export async function ingestDashcamAlert(req, res) {
  try {
    const { vehicleId, eventType, confidenceScore, lat, lng, speed, timestamp } = req.body;

    const alertId = uuidv4();
    let mediaUrl = req.body.mediaUrl || null;

    // If short 5-second video clip was uploaded in multipart
    if (req.file) {
      mediaUrl = `/uploads/dashcam/${req.file.filename}`;
    }

    const payload = {
      id: alertId,
      vehicleId: vehicleId || 'EDGE_CAMERA_UNIT',
      eventType,
      confidenceScore: parseFloat(confidenceScore),
      lat: parseFloat(lat),
      lng: parseFloat(lng),
      speed: parseFloat(speed) || 0,
      mediaUrl,
      timestamp: timestamp || new Date().toISOString(),
      highwayCode: req.body.highwayCode || 'NH Corridors',
    };

    let dbAlertId = null;
    if (getDbStatus()) {
      const sql = `
        INSERT INTO dashcam_alerts (
          id, vehicle_id, event_type, confidence_score, location,
          speed_at_capture_kmh, media_url, processed_status, captured_at
        ) VALUES (
          $1, $2, $3, $4, ST_SetSRID(ST_MakePoint($5, $6), 4326),
          $7, $8, 'PENDING', $9
        ) RETURNING id;
      `;
      const r = await query(sql, [
        alertId,
        vehicleId && vehicleId.length === 36 ? vehicleId : null,
        eventType,
        payload.confidenceScore,
        payload.lng,
        payload.lat,
        payload.speed,
        mediaUrl,
        payload.timestamp,
      ]);
      dbAlertId = r.rows[0]?.id;
    }

    // Decouple processing: push into Redis background queue so Node event loop remains free
    await pushDashcamAlertToQueue({
      ...payload,
      dbAlertId,
    });

    // Fast 202 Accepted response to edge device
    return res.status(202).json({
      success: true,
      status: 'QUEUED_FOR_PROCESSING',
      message: 'Dashcam alert received and pushed to asynchronous processing queue.',
      alertId,
      mediaUrl,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error ingesting dashcam alert: ' + error.message,
    });
  }
}

/**
 * Generate secure pre-signed upload URL for direct video upload
 * GET /api/v1/incidents/presigned-media-url
 */
export async function getPresignedMediaUrl(req, res) {
  try {
    const { vehicleId, eventType = 'dashcam' } = req.query;
    const result = generatePresignedUploadUrl(vehicleId, eventType);
    return res.json({ success: true, ...result });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to generate presigned upload URL: ' + error.message,
    });
  }
}

/**
 * List active road hazard incidents
 */
export async function listIncidents(req, res) {
  try {
    if (getDbStatus()) {
      const sql = `
        SELECT 
          id, title, incident_type, severity_rating, highway_code, state_code,
          description, affected_radius_m, is_active, estimated_clearance_at,
          ST_X(location::geometry) as lng,
          ST_Y(location::geometry) as lat,
          created_at as reported_at
        FROM incidents
        WHERE is_active = TRUE
        ORDER BY severity_rating ASC, created_at DESC;
      `;
      const result = await query(sql);
      return res.json({ success: true, count: result.rows.length, incidents: result.rows });
    }

    return res.json({ success: true, count: memoryIncidents.length, incidents: memoryIncidents });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to list incidents: ' + error.message,
    });
  }
}

export default {
  computeIncidentSeverity,
  reportIncident,
  ingestDashcamAlert,
  getPresignedMediaUrl,
  listIncidents,
};
