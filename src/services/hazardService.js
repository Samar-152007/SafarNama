/**
 * SafarNama Historical Hazard Prediction & Early Warning Service
 * Catalogs recurring disaster hotspots across North Eastern highway arteries
 * and correlates planned travel months with real-time environmental telemetry.
 */

export const HISTORICAL_HAZARD_ZONES = [
  {
    id: 'sonapur-tunnel-nh06',
    name: 'Sonapur Tunnel & Barail Escarpment',
    type: 'LANDSLIDE',
    highway: 'NH-06 (Shillong-Silchar Arterial)',
    state: 'Meghalaya / Assam Border',
    geometry: { lat: 25.1378, lng: 92.3551, radiusKm: 18 },
    peakMonths: [5, 6, 7, 8, 9, 10], // May to Oct monsoon
    recurrenceFrequency: 'CHRONIC',
    triggers: {
      minRainfall24hMm: 25.0,
      minSoilMoisture: 42.0,
      riverDischargeThreshold: 2200
    },
    advisory: 'Historically prone to major debris flows and rockfall at tunnel portal. Enforce daylight-only convoy transit when rainfall exceeds 25mm.',
    historicalIncidentsCount: 47,
    lastMajorEvent: 'Monsoon 2024: 120-hour vehicular gridlock & structural road collapse.'
  },
  {
    id: 'kaziranga-corridor-nh27',
    name: 'Kaziranga Southern Bypass & Bagori Causeway',
    type: 'FLASH_FLOOD',
    highway: 'NH-27 (Upper Assam Trunk)',
    state: 'Assam',
    geometry: { lat: 26.5872, lng: 93.4112, radiusKm: 25 },
    peakMonths: [6, 7, 8, 9], // June to Sept
    recurrenceFrequency: 'CHRONIC',
    triggers: {
      minRainfall24hMm: 35.0,
      minSoilMoisture: 48.0,
      riverDischargeThreshold: 6500
    },
    advisory: 'Brahmaputra high-stage surge overtops carriage way. Speed capped at 20 km/h due to wildlife crossing and submerged road shoulders.',
    historicalIncidentsCount: 38,
    lastMajorEvent: 'Floods 2024: 3.2km highway submerged under 0.8m rapid current.'
  },
  {
    id: 'sela-pass-nh13',
    name: 'Sela Pass Alpine Ridge Approach',
    type: 'LANDSLIDE',
    highway: 'NH-13 (BCT Highway)',
    state: 'Arunachal Pradesh',
    geometry: { lat: 27.5020, lng: 92.1000, radiusKm: 20 },
    peakMonths: [6, 7, 8, 9, 11, 12, 1, 2], // Monsoon scree slides & winter blizzard washouts
    recurrenceFrequency: 'HIGH',
    triggers: {
      minRainfall24hMm: 18.0,
      minSoilMoisture: 38.0,
      riverDischargeThreshold: 1500
    },
    advisory: 'High-altitude moraine instability and freeze-thaw cracking. Requires 4x4 heavy clearance; avoid night travel during active cloud cover.',
    historicalIncidentsCount: 31,
    lastMajorEvent: 'July 2024: Massive scree avalanche blocking Bhalukpong-Tawang corridor for 72 hours.'
  },
  {
    id: 'haflong-dima-hasao-nh27',
    name: 'Dima Hasao Hill Highway Sector',
    type: 'ROAD_WASHOUT',
    highway: 'NH-27 / NH-54 (Lumding-Haflong-Silchar Bypass)',
    state: 'Assam (Hill District)',
    geometry: { lat: 25.1833, lng: 93.0167, radiusKm: 22 },
    peakMonths: [5, 6, 7, 8], // Pre-monsoon and peak monsoon
    recurrenceFrequency: 'CHRONIC',
    triggers: {
      minRainfall24hMm: 30.0,
      minSoilMoisture: 45.0,
      riverDischargeThreshold: 3000
    },
    advisory: 'Deep subsurface shale expansion causes catastrophic road-bed subsidence. Verify BRO / NHIDCL pilot clearance before dispatch.',
    historicalIncidentsCount: 29,
    lastMajorEvent: 'May 2022: Total detachment of 500m hillside road carriage at New Haflong.'
  },
  {
    id: 'noney-makru-nh37',
    name: 'Noney - Makru River Canyon',
    type: 'LANDSLIDE',
    highway: 'NH-37 (Silchar-Jiribam-Imphal Highway)',
    state: 'Manipur',
    geometry: { lat: 24.8100, lng: 93.6800, radiusKm: 18 },
    peakMonths: [6, 7, 8, 9], // June to Sept
    recurrenceFrequency: 'HIGH',
    triggers: {
      minRainfall24hMm: 22.0,
      minSoilMoisture: 40.0,
      riverDischargeThreshold: 1800
    },
    advisory: 'Steep phyllite rock cuts prone to sudden mud slurries blocking single-lane bridges across Makru and Barak tributaries.',
    historicalIncidentsCount: 24,
    lastMajorEvent: 'June 2023: Heavy mudslide cut off Imphal freight supplies for 9 consecutive days.'
  },
  {
    id: 'kohima-pfutsero-nh29',
    name: 'Kohima Southern Bypass & Patkai Ridge',
    type: 'LANDSLIDE',
    highway: 'NH-29 (Dimapur-Kohima-Mao Arterial)',
    state: 'Nagaland',
    geometry: { lat: 25.6100, lng: 94.1500, radiusKm: 16 },
    peakMonths: [6, 7, 8, 9], // June to Sept
    recurrenceFrequency: 'HIGH',
    triggers: {
      minRainfall24hMm: 20.0,
      minSoilMoisture: 42.0,
      riverDischargeThreshold: 1600
    },
    advisory: 'Saturated red clay causes slope creeping and asphalt fissures. Heavy multi-axle freight over 18 tons advised to halt during continuous rain.',
    historicalIncidentsCount: 22,
    lastMajorEvent: 'August 2024: 80m sinking zone at Phesama halted cross-border freight.'
  },
  {
    id: 'umiam-gorge-nh06',
    name: 'Umiam Basin & Mawiong Canyon Cut',
    type: 'WATERLOGGING',
    highway: 'NH-06 (Guwahati-Shillong Expressway)',
    state: 'Meghalaya',
    geometry: { lat: 25.6500, lng: 91.9000, radiusKm: 12 },
    peakMonths: [5, 6, 7, 8], // May to Aug
    recurrenceFrequency: 'MODERATE',
    triggers: {
      minRainfall24hMm: 40.0,
      minSoilMoisture: 46.0,
      riverDischargeThreshold: 2500
    },
    advisory: 'Heavy cloudbursts cause rapid stormwater overflow and localized boulder detachment along steep rock cuts.',
    historicalIncidentsCount: 17,
    lastMajorEvent: 'June 2024: Submerged culverts created 6-hour logjam near Umiam lake viewpoint.'
  },
  {
    id: 'barak-lowland-nh37',
    name: 'Barak Floodplain & Silchar Ring Causeway',
    type: 'FLASH_FLOOD',
    highway: 'NH-37 / NH-06 Junction',
    state: 'Assam (Barak Valley)',
    geometry: { lat: 24.8333, lng: 92.7789, radiusKm: 15 },
    peakMonths: [6, 7, 8], // June to Aug
    recurrenceFrequency: 'HIGH',
    triggers: {
      minRainfall24hMm: 35.0,
      minSoilMoisture: 50.0,
      riverDischargeThreshold: 4500
    },
    advisory: 'River Barak water level exceeding danger mark inundates southern city causeways. High axle-clearance vehicles only.',
    historicalIncidentsCount: 26,
    lastMajorEvent: 'July 2024: Backflow submerged road connections to Mizoram (NH-54).'
  }
];

/**
 * Compute great-circle distance between two GPS coordinates using Haversine formula
 */
export function calculateHaversineDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/**
 * Evaluate seasonal historical hazards intercepted by a route polyline
 * @param {Array<[number, number]>} routeCoordinates - Array of [lat, lng] pairs
 * @param {Date|string} travelDate - Planned travel date
 * @param {Object} liveTelemetry - Current live environmental telemetry
 */
export function evaluateSeasonalRouteHazards(routeCoordinates = [], travelDate = new Date(), liveTelemetry = null) {
  if (!routeCoordinates || routeCoordinates.length === 0) {
    return {
      interceptedHazards: [],
      maxRiskBoost: 0,
      activeSeasonCount: 0,
      criticalBreachCount: 0,
      summaryAdvice: 'No route coordinates supplied for seasonal risk synthesis.'
    };
  }

  const dateObj = travelDate instanceof Date ? travelDate : new Date(travelDate);
  const plannedMonth = dateObj.getMonth() + 1; // 1-12
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const currentMonthName = monthNames[plannedMonth - 1] || 'Current Month';

  // Live environmental parameters (or safe fallbacks)
  const currentRain = liveTelemetry?.precipitation ?? 0;
  const currentSoilMoisture = liveTelemetry?.soilMoisturePct ?? 35;
  const currentDischarge = liveTelemetry?.flood?.currentDischargeM3s ?? 1200;

  const interceptedHazards = [];
  let maxRiskBoost = 0;
  let activeSeasonCount = 0;
  let criticalBreachCount = 0;

  for (const zone of HISTORICAL_HAZARD_ZONES) {
    // Find closest route point to hazard zone center
    let minDistanceKm = Infinity;
    let closestCoord = null;

    for (const [lat, lng] of routeCoordinates) {
      const dist = calculateHaversineDistanceKm(lat, lng, zone.geometry.lat, zone.geometry.lng);
      if (dist < minDistanceKm) {
        minDistanceKm = dist;
        closestCoord = [lat, lng];
      }
    }

    // Check if route enters hazard radius
    if (minDistanceKm <= zone.geometry.radiusKm) {
      const isPeakSeason = zone.peakMonths.includes(plannedMonth);
      
      // Determine trigger thresholds status
      const rainBreached = currentRain >= zone.triggers.minRainfall24hMm;
      const soilBreached = currentSoilMoisture >= zone.triggers.minSoilMoisture;
      const dischargeBreached = currentDischarge >= zone.triggers.riverDischargeThreshold;
      const anyTriggerBreached = rainBreached || soilBreached || dischargeBreached;

      let status = 'OFF_SEASON_BASELINE';
      let alertLevel = 'LOW';
      let riskBoost = 5;

      if (isPeakSeason) {
        activeSeasonCount++;
        if (anyTriggerBreached) {
          status = 'CRITICAL_ACTIVE_WARNING';
          alertLevel = 'CRITICAL';
          riskBoost = 35;
          criticalBreachCount++;
        } else {
          status = 'SEASONAL_ELEVATED_WATCH';
          alertLevel = 'HIGH';
          riskBoost = 20;
        }
      }

      if (riskBoost > maxRiskBoost) {
        maxRiskBoost = riskBoost;
      }

      interceptedHazards.push({
        id: zone.id,
        name: zone.name,
        type: zone.type,
        highway: zone.highway,
        state: zone.state,
        distanceFromRouteKm: Number(minDistanceKm.toFixed(1)),
        interceptCoord: closestCoord,
        isPeakSeason,
        plannedMonth: currentMonthName,
        peakMonthNames: zone.peakMonths.map((m) => monthNames[m - 1]).join(', '),
        recurrenceFrequency: zone.recurrenceFrequency,
        historicalIncidentsCount: zone.historicalIncidentsCount,
        lastMajorEvent: zone.lastMajorEvent,
        triggers: zone.triggers,
        currentTelemetry: {
          rainfallMm: currentRain,
          soilMoisturePct: currentSoilMoisture,
          dischargeM3s: currentDischarge
        },
        triggersStatus: {
          rainBreached,
          soilBreached,
          dischargeBreached,
          anyTriggerBreached
        },
        status,
        alertLevel,
        riskBoost,
        advisory: zone.advisory
      });
    }
  }

  // Generate actionable summary advice
  let summaryAdvice = 'No recurring historical disaster hot spots detected along this route corridor.';
  if (criticalBreachCount > 0) {
    summaryAdvice = `CRITICAL SEASONAL WARNING: Route intercepts ${criticalBreachCount} historical hotspot(s) during active ${currentMonthName} peak season with live environmental thresholds exceeded. Convoy rerouting strongly advised.`;
  } else if (activeSeasonCount > 0) {
    summaryAdvice = `SEASONAL ADVISORY: Route passes through ${activeSeasonCount} historical ${currentMonthName} vulnerability sector(s). Conditions currently within trigger limits, but heightened driver vigilance is advised.`;
  }

  return {
    interceptedHazards,
    maxRiskBoost,
    activeSeasonCount,
    criticalBreachCount,
    plannedMonthName: currentMonthName,
    summaryAdvice
  };
}

export default {
  HISTORICAL_HAZARD_ZONES,
  calculateHaversineDistanceKm,
  evaluateSeasonalRouteHazards
};
