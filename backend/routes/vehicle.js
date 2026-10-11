import { Router } from 'express';
import {
  registerVehicle,
  ingestTelemetryPing,
  getVehiclesInProximity,
  getVehicleDiagnostics,
  listVehicles,
} from '../controllers/vehicleController.js';
import { authenticateToken, authorizeRoles } from '../middleware/auth.js';
import { validate } from '../middleware/validator.js';
import { vehicleSchema, telemetryPingSchema } from '../validators/schemas.js';
import { telemetryLimiter } from '../middleware/rateLimiter.js';

const router = Router();

// Public / Authenticated vehicle routes
router.get('/', authenticateToken, listVehicles);
router.get('/proximity', authenticateToken, getVehiclesInProximity);
router.get('/:id/diagnostics', authenticateToken, getVehicleDiagnostics);

// Onboarding: restricted to Admin and FleetManager
router.post(
  '/',
  authenticateToken,
  authorizeRoles('Admin', 'FleetManager'),
  validate(vehicleSchema),
  registerVehicle
);

// High frequency telemetry ingestion
router.post(
  '/:id/telemetry',
  telemetryLimiter,
  validate(telemetryPingSchema),
  ingestTelemetryPing
);

export default router;
