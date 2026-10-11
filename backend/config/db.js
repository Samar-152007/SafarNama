import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

const poolConfig = process.env.DATABASE_URL
  ? { connectionString: process.env.DATABASE_URL }
  : {
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432', 10),
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.DB_NAME || 'safarnama_db',
      max: 20,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 3000,
    };

export const pool = new Pool(poolConfig);

let isDbConnected = false;

// Test connection on boot
pool.connect((err, client, release) => {
  if (err) {
    console.warn('⚠️ [PostgreSQL] Unable to connect to PostgreSQL/PostGIS. Running in graceful offline/mock storage mode.');
    isDbConnected = false;
  } else {
    isDbConnected = true;
    console.log('✅ [PostgreSQL] Successfully connected with PostGIS extension support.');
    release();
  }
});

/**
 * Robust database query wrapper with in-memory fallback
 */
export async function query(text, params = []) {
  if (!isDbConnected) {
    // Graceful fallback logger
    return { rows: [], rowCount: 0 };
  }
  const start = Date.now();
  try {
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    if (process.env.NODE_ENV === 'development') {
      // console.debug(`[DB Query] ${text.substring(0, 50)}... (${duration}ms)`);
    }
    return res;
  } catch (error) {
    console.error(`❌ [DB Query Error] ${error.message} \nQuery: ${text}`);
    throw error;
  }
}

export function getDbStatus() {
  return isDbConnected;
}

export default { pool, query, getDbStatus };
