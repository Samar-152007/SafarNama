import express from 'express';
import http from 'http';
import path from 'path';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';

import { initSocketServer } from './services/socketService.js';
import { startBackgroundAlertWorker } from './services/queueService.js';
import { globalLimiter } from './middleware/rateLimiter.js';
import { getOptimizedRoute } from './services/acoRouter.js';
import { getLiveWeatherAndSoil, getLiveElevation } from './services/environmentalService.js';
import { HISTORICAL_HAZARD_ZONES } from './services/hazardService.js';

// Route Imports
import authRouter from './routes/auth.js';
import vehicleRouter from './routes/vehicle.js';
import deliveryRouter from './routes/delivery.js';
import incidentRouter from './routes/incident.js';
import telemetryRouter from './routes/telemetry.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security Middlewares
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: 'cross-origin' }, // Allow dashcam video clip streaming
  })
);

app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);

app.use(express.json({ limit: '15mb' }));
app.use(express.urlencoded({ extended: true, limit: '15mb' }));

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

// Global API Rate Limiter
app.use('/api/', globalLimiter);

// Serve Dashcam video uploads statically
const uploadsDir = path.resolve(process.cwd(), 'uploads');
app.use('/uploads', express.static(uploadsDir));

// API Route Registration
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/vehicles', vehicleRouter);
app.use('/api/v1/deliveries', deliveryRouter);
app.use('/api/v1/incidents', incidentRouter);
app.use('/api/v1/telemetry', telemetryRouter);

// Standalone ACO Routing Endpoint
app.post('/api/v1/routes/aco-optimize', async (req, res) => {
  try {
    const { origin = 'GUWAHATI', destination = 'SILCHAR', options = {}, travelDate } = req.body;
    const route = await getOptimizedRoute(origin, destination, { ...options, travelDate });
    return res.json({ success: true, route });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

// Seasonal Historical Hazards Catalog Endpoint
app.get('/api/v1/environmental/hazards', (req, res) => {
  const month = parseInt(req.query.month) || (new Date().getMonth() + 1);
  const zonesWithSeasonality = HISTORICAL_HAZARD_ZONES.map((zone) => ({
    ...zone,
    isPeakInQueriedMonth: zone.peakMonths.includes(month),
  }));
  return res.json({
    success: true,
    queriedMonth: month,
    totalZones: zonesWithSeasonality.length,
    activeSeasonZones: zonesWithSeasonality.filter((z) => z.isPeakInQueriedMonth).length,
    zones: zonesWithSeasonality,
  });
});

// Environmental & Terrain Live Telemetry Endpoints
app.get('/api/v1/environmental/corridor-weather', async (req, res) => {
  try {
    const lat = parseFloat(req.query.lat) || 26.1445;
    const lng = parseFloat(req.query.lng) || 91.7362;
    const weatherData = await getLiveWeatherAndSoil(lat, lng);
    return res.json({ success: true, lat, lng, data: weatherData });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

app.get('/api/v1/environmental/elevation', async (req, res) => {
  try {
    const lat = parseFloat(req.query.lat) || 26.1445;
    const lng = parseFloat(req.query.lng) || 91.7362;
    const elevation = await getLiveElevation(lat, lng);
    return res.json({ success: true, lat, lng, elevationM: elevation });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

// System Health & Diagnostics
app.get('/health', (req, res) => {
  res.json({
    status: 'HEALTHY',
    service: 'SafarNama AI Logistics Intelligence Platform (NER)',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    capabilities: [
      'PostGIS Spatial Proximity & 25km Geofencing',
      'Ant Colony Optimization (ACO) Terrain Routing',
      'Asynchronous Dashcam Video Alert Queuing',
      'Idempotent Dead-Zone Telemetry Synchronization',
      'Real-Time Redis/Socket.io Streaming',
    ],
  });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'NOT_FOUND',
    message: `API endpoint '${req.method} ${req.url}' was not found on this server.`,
  });
});

// Central Error Handler
app.use((err, req, res, next) => {
  console.error('💥 [Server Unhandled Exception]', err);
  res.status(err.status || 500).json({
    success: false,
    error: err.name || 'INTERNAL_SERVER_ERROR',
    message: err.message || 'An unexpected internal server error occurred.',
  });
});

// Bootstrap HTTP & Socket.io Server
const httpServer = http.createServer(app);
initSocketServer(httpServer);

// Start background decoupled queue processor
startBackgroundAlertWorker();

if (!process.env.VERCEL) {
  httpServer.listen(PORT, () => {
    console.log(`
  =============================================================================
  🏔️ SAFARNAMA NER LOGISTICS & ACCESSIBILITY INTELLIGENCE ENGINE ONLINE
  =============================================================================
  🚀 REST API Server  : http://localhost:${PORT}
  🔌 WebSocket Server : ws://localhost:${PORT}
  📁 Media Storage    : ${uploadsDir}
  🛣️ Terrain Model    : North Eastern Region (Ghat, Monsoon, Landslide-Tuned)
  =============================================================================
  `);
  });
}

export { app, httpServer };
export default app;
