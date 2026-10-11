/**
 * Client service to query the standalone Python ML predictive service (FastAPI)
 */

const ML_SERVICE_URL = process.env.ML_SERVICE_URL || 'http://localhost:8000';

/**
 * Predict ETA and route risk score for a delivery trip
 * @param {Object} tripFeatures
 * @param {number} tripFeatures.distanceKm
 * @param {number} tripFeatures.elevationGainM
 * @param {number} tripFeatures.avgGradientPct
 * @param {number} tripFeatures.monsoonPrecipMmHr
 * @param {number} tripFeatures.checkpointDelayMins
 * @param {number} tripFeatures.cargoPayloadTons
 * @param {boolean} tripFeatures.isNightTransit
 */
export async function predictEtaAndRisk(tripFeatures) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);

    const response = await fetch(`${ML_SERVICE_URL}/predict-eta`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tripFeatures),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    // Microservice offline or not yet booted, fall back to terrain gradient formula
  }

  // Resilient fallback predictive heuristic based on NER terrain physics
  return calculateHeuristicEtaAndRisk(tripFeatures);
}

/**
 * High-accuracy fallback physics formula tailored for NER ghat and monsoon roads
 */
export function calculateHeuristicEtaAndRisk({
  distanceKm = 100,
  avgGradientPct = 4.0,
  monsoonPrecipMmHr = 15.0,
  checkpointDelayMins = 30,
  cargoPayloadTons = 8.5,
  isNightTransit = false,
}) {
  // Base heavy commercial vehicle speed on plain roads: 55 km/h
  let effectiveSpeedKmh = 55;

  // Steep gradients slow down heavy cargo trucks dramatically:
  // e.g. 10% gradient reduces speed by up to 45%
  const gradientPenalty = Math.min(avgGradientPct * 3.2, 35);
  effectiveSpeedKmh -= gradientPenalty;

  // Rain / Monsoon visibility and slick mud penalty
  const rainPenalty = Math.min((monsoonPrecipMmHr / 50) * 18, 20);
  effectiveSpeedKmh -= rainPenalty;

  // Payload weight factor (heavy loads climb hills slower)
  const weightPenalty = Math.min(cargoPayloadTons * 0.8, 10);
  effectiveSpeedKmh -= weightPenalty;

  // Night curfew / low visibility penalty
  if (isNightTransit) {
    effectiveSpeedKmh *= 0.85;
  }

  // Minimum safe crawling speed in high ghats is 15 km/h
  effectiveSpeedKmh = Math.max(effectiveSpeedKmh, 15);

  const driveHours = distanceKm / effectiveSpeedKmh;
  const transitMins = Math.round(driveHours * 60) + (checkpointDelayMins || 0);

  // Composite 0-100 Terrain Risk Score
  let riskScore = 10;
  riskScore += Math.min(avgGradientPct * 4, 30);
  riskScore += Math.min(monsoonPrecipMmHr * 1.2, 35);
  riskScore += Math.min(cargoPayloadTons * 1.5, 15);
  if (isNightTransit) riskScore += 15;
  riskScore = Math.min(Math.round(riskScore), 99);

  return {
    source: 'NER_HEURISTIC_PREDICTOR',
    predictedDurationMins: transitMins,
    predictedEtaHours: +(transitMins / 60).toFixed(1),
    effectiveAvgSpeedKmh: +effectiveSpeedKmh.toFixed(1),
    terrainRiskScore: riskScore,
    riskCategory: riskScore > 70 ? 'HIGH_RISK' : riskScore > 40 ? 'MODERATE' : 'LOW',
    advisories: [
      monsoonPrecipMmHr > 25 ? 'High landslide warning along ghat stretches.' : null,
      avgGradientPct > 8 ? 'Steep hair-pin ascent; low gear crawl mandatory.' : null,
      checkpointDelayMins > 45 ? 'Inter-state permit bottleneck expected.' : null,
    ].filter(Boolean),
  };
}

export default {
  predictEtaAndRisk,
  calculateHeuristicEtaAndRisk,
};
