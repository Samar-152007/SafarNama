import { Router } from 'express';
import {
  reportIncident,
  ingestDashcamAlert,
  getPresignedMediaUrl,
  listIncidents,
} from '../controllers/incidentController.js';
import { authenticateToken, authorizeRoles } from '../middleware/auth.js';
import { validate } from '../middleware/validator.js';
import { incidentReportSchema, dashcamAlertSchema } from '../validators/schemas.js';
import { uploadDashcamClip } from '../middleware/upload.js';
import { telemetryLimiter } from '../middleware/rateLimiter.js';

const router = Router();

// Public / Authenticated incident list
router.get('/', listIncidents);

// Manual or Sensor Hazard Reporting
router.post(
  '/',
  authenticateToken,
  authorizeRoles('Admin', 'FleetManager', 'Driver'),
  validate(incidentReportSchema),
  reportIncident
);

// Edge Dashcam Alert Ingestion (Accepts multipart video clip or JSON payload)
router.post(
  '/dashcam-alert',
  telemetryLimiter,
  uploadDashcamClip.single('clip'),
  validate(dashcamAlertSchema),
  ingestDashcamAlert
);

// Presigned URL generation for non-blocking direct video clip upload
router.get('/presigned-media-url', authenticateToken, getPresignedMediaUrl);

export default router;
