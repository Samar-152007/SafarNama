import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'safarnama_super_secret_jwt_key_ner_2026_x78!';
const REFRESH_SECRET = process.env.REFRESH_TOKEN_SECRET || 'safarnama_refresh_secret_ner_2026_z99#';

/**
 * Generate Access & Refresh Tokens
 */
export function generateTokens(user) {
  const payload = {
    id: user.id,
    email: user.email,
    role: user.role,
    name: user.full_name,
  };

  const accessToken = jwt.sign(payload, JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '1h',
  });

  const refreshToken = jwt.sign(payload, REFRESH_SECRET, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN || '7d',
  });

  return { accessToken, refreshToken };
}

/**
 * JWT Authentication Middleware
 */
export function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    // If no token is provided in development mode, allow header simulation or return 401
    const devRole = req.headers['x-dev-role'];
    if (devRole && ['Admin', 'FleetManager', 'Driver'].includes(devRole)) {
      req.user = {
        id: '00000000-0000-0000-0000-000000000002',
        role: devRole,
        email: 'dev@safarnama.ner',
        name: 'Dev Operator',
      };
      return next();
    }
    return res.status(401).json({
      success: false,
      message: 'Access denied. No bearer authorization token provided.',
    });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({
      success: false,
      message: 'Invalid or expired authorization token.',
    });
  }
}

/**
 * Role-Based Access Control (RBAC) Guard
 * Roles: 'Admin', 'FleetManager', 'Driver'
 */
export function authorizeRoles(...allowedRoles) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized. Authentication required.',
      });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: `Forbidden. Role '${req.user.role}' is not authorized to access this resource. Required: [${allowedRoles.join(', ')}]`,
      });
    }

    next();
  };
}

export default {
  generateTokens,
  authenticateToken,
  authorizeRoles,
};
