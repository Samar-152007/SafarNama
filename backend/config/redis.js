import Redis from 'ioredis';
import { EventEmitter } from 'events';
import dotenv from 'dotenv';

dotenv.config();

const redisUrl = process.env.REDIS_URL || 'redis://localhost:6379';

let isRedisConnected = false;
let redisClient = null;
let redisSub = null;
let redisPub = null;

// Fallback in-memory event bus & key-value cache
class MockRedis extends EventEmitter {
  constructor() {
    super();
    this.store = new Map();
  }
  async get(key) {
    return this.store.get(key) || null;
  }
  async set(key, value, mode, ttl) {
    this.store.set(key, value);
    if (mode === 'EX' && ttl) {
      setTimeout(() => this.store.delete(key), ttl * 1000);
    }
    return 'OK';
  }
  async setex(key, ttl, value) {
    return this.set(key, value, 'EX', ttl);
  }
  async del(key) {
    return this.store.delete(key) ? 1 : 0;
  }
  async publish(channel, message) {
    this.emit(channel, message);
    return 1;
  }
  async subscribe(channel, callback) {
    this.on(channel, (msg) => {
      if (callback) callback(channel, msg);
    });
    return 1;
  }
  async lpush(key, ...values) {
    let list = this.store.get(key) || [];
    list.unshift(...values);
    this.store.set(key, list);
    return list.length;
  }
  async rpop(key) {
    let list = this.store.get(key) || [];
    const val = list.pop();
    this.store.set(key, list);
    return val || null;
  }
}

const mockRedisInstance = new MockRedis();

try {
  redisClient = new Redis(redisUrl, {
    maxRetriesPerRequest: 1,
    retryStrategy: (times) => {
      if (times > 2) return null; // stop reconnecting if no Redis daemon
      return Math.min(times * 200, 1000);
    },
    connectTimeout: 2000,
  });

  redisClient.on('connect', () => {
    isRedisConnected = true;
    console.log('✅ [Redis] Connected successfully for Caching & Pub/Sub.');
  });

  redisClient.on('error', (err) => {
    if (!isRedisConnected) {
      console.warn('⚠️ [Redis] Unable to connect to local Redis server. Gracefully falling back to in-memory event cache.');
    }
  });

  redisSub = redisClient.duplicate();
  redisPub = redisClient.duplicate();

  redisSub.on('error', () => {});
  redisPub.on('error', () => {});
} catch (error) {
  console.warn('⚠️ [Redis] Initializing in fallback in-memory mode.');
  redisClient = mockRedisInstance;
  redisSub = mockRedisInstance;
  redisPub = mockRedisInstance;
}

export function getRedisClient() {
  return isRedisConnected ? redisClient : mockRedisInstance;
}

export function getRedisPub() {
  return isRedisConnected ? redisPub : mockRedisInstance;
}

export function getRedisSub() {
  return isRedisConnected ? redisSub : mockRedisInstance;
}

export function isConnected() {
  return isRedisConnected;
}

export default {
  getRedisClient,
  getRedisPub,
  getRedisSub,
  isConnected,
};
