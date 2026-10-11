import rateLimit from 'express-rate-limit';
import { RedisStore } from 'rate-limit-redis';
import { getRedisClient, isConnected } from '../config/redis.js';

/**
 * Creates a rate limiter instance
 * @param {Object} options
 */
export function createRateLimiter({
  windowMs = 15 * 60 * 1000, // 15 minutes default
  max = 100,                 // Limit each IP to 100 requests per windowMs
  message = 'Too many requests from this client. Please retry after some time.',
} = {}) {
  const options = {
    windowMs,
    max,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
      success: false,
      error: 'RATE_LIMIT_EXCEEDED',
      message,
    },
  };

  // If Redis is active, attach RedisStore for shared distributed counters
  if (isConnected()) {
    try {
      options.store = new RedisStore({
        sendCommand: (...args) => getRedisClient().call(...args),
        prefix: 'safarnama:rl:',
      });
    } catch (e) {
      // Fallback silently to memory store
    }
  }

  return rateLimit(options);
}

// Pre-configured rate limiters
export const globalLimiter = createRateLimiter({
  windowMs: 60 * 1000,
  max: 120, // 120 requests per minute
  message: 'Global API rate limit exceeded.',
});

export const telemetryLimiter = createRateLimiter({
  windowMs: 60 * 1000,
  max: 300, // Edge devices ping frequently
  message: 'Telemetry ingestion threshold exceeded.',
});

export const authLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 15, // 15 login attempts per 15 mins
  message: 'Too many authentication attempts. Please try again later.',
});

export default {
  createRateLimiter,
  globalLimiter,
  telemetryLimiter,
  authLimiter,
};
