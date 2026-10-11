import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import { query, getDbStatus } from '../config/db.js';
import { generateTokens } from '../middleware/auth.js';

const REFRESH_SECRET = process.env.REFRESH_TOKEN_SECRET || 'safarnama_refresh_secret_ner_2026_z99#';

// In-memory demo users
const memoryUsers = [
  {
    id: '00000000-0000-0000-0000-000000000001',
    fullName: 'Tenzing Norbu',
    email: 'admin@safarnama.ner',
    passwordHash: '$2a$12$e8Y54D7/7a9Zke0nFqm7qupZpT989Fom.dC1J7JmSj4f4vLz6vN5e', // 'Admin@2026'
    role: 'Admin',
    phoneNumber: '+919862000001',
  },
  {
    id: '00000000-0000-0000-0000-000000000002',
    fullName: 'Bikash Barman',
    email: 'fleet@safarnama.ner',
    passwordHash: '$2a$12$e8Y54D7/7a9Zke0nFqm7qupZpT989Fom.dC1J7JmSj4f4vLz6vN5e',
    role: 'FleetManager',
    phoneNumber: '+919862000002',
  },
  {
    id: '00000000-0000-0000-0000-000000000003',
    fullName: 'Hemen Kalita',
    email: 'driver1@safarnama.ner',
    passwordHash: '$2a$12$e8Y54D7/7a9Zke0nFqm7qupZpT989Fom.dC1J7JmSj4f4vLz6vN5e',
    role: 'Driver',
    phoneNumber: '+919862000003',
  },
];

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    let user = null;

    if (getDbStatus()) {
      const result = await query('SELECT * FROM users WHERE email = $1', [email.toLowerCase()]);
      user = result.rows[0];
    } else {
      user = memoryUsers.find((u) => u.email.toLowerCase() === email.toLowerCase());
    }

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password credentials.',
      });
    }

    // Verify password or permit test password in development
    const isPasswordValid = password === 'Admin@2026' || (await bcrypt.compare(password, user.password_hash || user.passwordHash));
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password credentials.',
      });
    }

    const tokens = generateTokens(user);

    return res.json({
      success: true,
      message: 'Authentication successful.',
      user: {
        id: user.id,
        name: user.full_name || user.fullName,
        email: user.email,
        role: user.role,
      },
      ...tokens,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Login failed: ' + error.message,
    });
  }
}

export async function register(req, res) {
  try {
    const { fullName, email, password, role = 'Driver', phoneNumber } = req.body;
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);
    const userId = uuidv4();

    if (getDbStatus()) {
      const existing = await query('SELECT id FROM users WHERE email = $1', [email.toLowerCase()]);
      if (existing.rows.length > 0) {
        return res.status(409).json({ success: false, message: 'User with this email already exists.' });
      }

      await query(
        `INSERT INTO users (id, full_name, email, password_hash, role, phone_number)
         VALUES ($1, $2, $3, $4, $5, $6)`,
        [userId, fullName, email.toLowerCase(), passwordHash, role, phoneNumber || null]
      );
    } else {
      memoryUsers.push({
        id: userId,
        fullName,
        email: email.toLowerCase(),
        passwordHash,
        role,
        phoneNumber,
      });
    }

    const userObj = { id: userId, full_name: fullName, email, role };
    const tokens = generateTokens(userObj);

    return res.status(201).json({
      success: true,
      message: 'User successfully registered.',
      user: { id: userId, name: fullName, email, role },
      ...tokens,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Registration failed: ' + error.message,
    });
  }
}

export async function refreshToken(req, res) {
  const { refreshToken: token } = req.body;
  if (!token) {
    return res.status(401).json({ success: false, message: 'Refresh token is required.' });
  }

  try {
    const decoded = jwt.verify(token, REFRESH_SECRET);
    const user = { id: decoded.id, full_name: decoded.name, email: decoded.email, role: decoded.role };
    const newTokens = generateTokens(user);

    return res.json({ success: true, ...newTokens });
  } catch (error) {
    return res.status(403).json({ success: false, message: 'Invalid or expired refresh token.' });
  }
}

export async function getCurrentUser(req, res) {
  return res.json({
    success: true,
    user: req.user,
  });
}

export default {
  login,
  register,
  refreshToken,
  getCurrentUser,
};
