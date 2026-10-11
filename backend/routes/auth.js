import { Router } from 'express';
import { login, register, refreshToken, getCurrentUser } from '../controllers/authController.js';
import { authenticateToken } from '../middleware/auth.js';
import { validate } from '../middleware/validator.js';
import { authLoginSchema, authRegisterSchema } from '../validators/schemas.js';
import { authLimiter } from '../middleware/rateLimiter.js';

const router = Router();

router.post('/login', authLimiter, validate(authLoginSchema), login);
router.post('/register', authLimiter, validate(authRegisterSchema), register);
router.post('/refresh', refreshToken);
router.get('/me', authenticateToken, getCurrentUser);

export default router;
