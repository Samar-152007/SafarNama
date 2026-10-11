import Joi from 'joi';

// Latitude (-90 to 90) and Longitude (-180 to 180)
const latitude = Joi.number().min(-90).max(90).required();
const longitude = Joi.number().min(-180).max(180).required();

export const authLoginSchema = Joi.object({
  email: Joi.string().email().required().trim(),
  password: Joi.string().min(6).required(),
});

export const authRegisterSchema = Joi.object({
  fullName: Joi.string().min(2).max(120).required().trim(),
  email: Joi.string().email().required().trim(),
  password: Joi.string().min(6).required(),
  role: Joi.string().valid('Admin', 'FleetManager', 'Driver').default('Driver'),
  phoneNumber: Joi.string().pattern(/^\+?[0-9]{10,14}$/).optional(),
});

export const vehicleSchema = Joi.object({
  registrationNumber: Joi.string().uppercase().trim().min(5).max(30).required(),
  modelName: Joi.string().min(2).max(100).required().trim(),
  vehicleType: Joi.string().valid('4x4 Cargo Truck', 'Heavy Heavy Cargo', 'Medium Freight', 'Express Cold-Chain', 'Light Van').default('4x4 Cargo Truck'),
  maxPayloadKg: Joi.number().positive().max(50000).required(),
  driverId: Joi.string().uuid().optional().allow(null, ''),
  initialLocation: Joi.object({
    lat: latitude,
    lng: longitude,
  }).optional(),
});

export const telemetryPingSchema = Joi.object({
  lat: latitude,
  lng: longitude,
  altitude: Joi.number().min(-100).max(8000).default(100),
  speed: Joi.number().min(0).max(200).required(),
  heading: Joi.number().min(0).max(360).default(0),
  fuelPct: Joi.number().min(0).max(100).required(),
  engineTemp: Joi.number().min(-30).max(150).default(85),
  batteryPct: Joi.number().min(0).max(100).default(98),
  recordedAt: Joi.date().iso().default(() => new Date().toISOString()),
  clientTxId: Joi.string().max(128).optional(),
});

export const batchTelemetrySchema = Joi.object({
  vehicleId: Joi.string().uuid().required(),
  clientBatchTxId: Joi.string().max(128).required(),
  logs: Joi.array().items(
    Joi.object({
      clientTxId: Joi.string().max(128).required(),
      lat: latitude,
      lng: longitude,
      altitude: Joi.number().default(120),
      speed: Joi.number().min(0).max(200).required(),
      heading: Joi.number().default(0),
      fuelPct: Joi.number().min(0).max(100).required(),
      engineTemp: Joi.number().default(85),
      batteryPct: Joi.number().default(95),
      cellularRssi: Joi.number().min(-130).max(0).default(-110),
      recordedAt: Joi.date().iso().required(),
    })
  ).min(1).max(500).required(),
});

export const deliveryCreateSchema = Joi.object({
  trackingCode: Joi.string().trim().uppercase().min(4).max(50).optional(),
  vehicleId: Joi.string().uuid().optional().allow(null, ''),
  assignedDriverId: Joi.string().uuid().optional().allow(null, ''),
  originName: Joi.string().min(2).max(150).required().trim(),
  destinationName: Joi.string().min(2).max(150).required().trim(),
  originCoords: Joi.object({
    lat: latitude,
    lng: longitude,
  }).required(),
  destinationCoords: Joi.object({
    lat: latitude,
    lng: longitude,
  }).required(),
  cargoWeightKg: Joi.number().positive().max(50000).required(),
  cargoDescription: Joi.string().max(500).optional().allow(''),
  priority: Joi.string().valid('CRITICAL_MEDICINE', 'RELIEF', 'STANDARD', 'EXPRESS').default('STANDARD'),
  stops: Joi.array().items(
    Joi.object({
      stopOrder: Joi.number().integer().min(1).required(),
      waypointName: Joi.string().required().trim(),
      coords: Joi.object({
        lat: latitude,
        lng: longitude,
      }).required(),
      expectedArrival: Joi.date().iso().optional(),
    })
  ).optional().default([]),
});

export const deliveryStatusUpdateSchema = Joi.object({
  status: Joi.string().valid('PENDING', 'IN_TRANSIT', 'REROUTED', 'DELIVERED', 'FAILED').required(),
  rerouteReason: Joi.string().max(300).optional().allow(''),
  delayMins: Joi.number().integer().min(0).optional(),
});

export const incidentReportSchema = Joi.object({
  title: Joi.string().min(5).max(200).required().trim(),
  incidentType: Joi.string().valid(
    'landslide',
    'flash_flood',
    'road_subsidence',
    'fallen_tree',
    'heavy_fog',
    'rockfall',
    'bridge_damage',
    'checkpoint_congestion'
  ).required(),
  severityRating: Joi.string().valid('P1', 'P2', 'P3', 'P4').optional(),
  lat: latitude,
  lng: longitude,
  highwayCode: Joi.string().uppercase().min(2).max(20).required().trim(),
  stateCode: Joi.string().length(2).uppercase().required().trim(),
  description: Joi.string().max(1000).optional().allow(''),
  affectedRadiusM: Joi.number().min(500).max(50000).default(5000),
  isRoadBlocked: Joi.boolean().default(false),
  estimatedClearanceMins: Joi.number().integer().positive().optional(),
});

export const dashcamAlertSchema = Joi.object({
  vehicleId: Joi.string().uuid().optional().allow(null, ''),
  eventType: Joi.string().valid(
    'landslide',
    'flash_flood',
    'road_subsidence',
    'fallen_tree',
    'heavy_fog',
    'rockfall',
    'bridge_damage',
    'checkpoint_congestion'
  ).required(),
  confidenceScore: Joi.number().min(0.0).max(1.0).required(),
  lat: latitude,
  lng: longitude,
  speed: Joi.number().min(0).max(200).optional().default(0),
  timestamp: Joi.date().iso().default(() => new Date().toISOString()),
  mediaUrl: Joi.string().uri({ allowRelative: true }).optional().allow(''),
  rawMetadata: Joi.object().optional(),
});

export default {
  authLoginSchema,
  authRegisterSchema,
  vehicleSchema,
  telemetryPingSchema,
  batchTelemetrySchema,
  deliveryCreateSchema,
  deliveryStatusUpdateSchema,
  incidentReportSchema,
  dashcamAlertSchema,
};
