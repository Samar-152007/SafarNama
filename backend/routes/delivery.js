import { Router } from 'express';
import {
  createDelivery,
  updateDeliveryStatus,
  recalculateDeliveryRoute,
  listDeliveries,
} from '../controllers/deliveryController.js';
import { authenticateToken, authorizeRoles } from '../middleware/auth.js';
import { validate } from '../middleware/validator.js';
import { deliveryCreateSchema, deliveryStatusUpdateSchema } from '../validators/schemas.js';

const router = Router();

router.get('/', authenticateToken, listDeliveries);

router.post(
  '/',
  authenticateToken,
  authorizeRoles('Admin', 'FleetManager'),
  validate(deliveryCreateSchema),
  createDelivery
);

router.patch(
  '/:id/status',
  authenticateToken,
  authorizeRoles('Admin', 'FleetManager', 'Driver'),
  validate(deliveryStatusUpdateSchema),
  updateDeliveryStatus
);

router.post(
  '/:id/recalculate-route',
  authenticateToken,
  authorizeRoles('Admin', 'FleetManager'),
  recalculateDeliveryRoute
);

export default router;
