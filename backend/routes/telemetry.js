import { Router } from 'express';
import { syncOfflineTelemetryBatch } from '../controllers/telemetryController.js';
import { validate } from '../middleware/validator.js';
import { batchTelemetrySchema } from '../validators/schemas.js';
import { telemetryLimiter } from '../middleware/rateLimiter.js';

const router = Router();

// Dead-Zone Buffered Ingestion endpoint (Idempotent)
router.post(
  '/batch',
  telemetryLimiter,
  validate(batchTelemetrySchema),
  syncOfflineTelemetryBatch
);

export default router;
