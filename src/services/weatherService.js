/**
 * SafarNama Weather & Hydrology Intelligence Service
 * Real-time weather & river flood telemetry powered by Open-Meteo & Copernicus GloFAS APIs
 * - Weather & Forecast: https://open-meteo.com/
 * - Copernicus River Flood GloFAS: https://flood-api.open-meteo.com/
 */

export const NER_WEATHER_HUBS = [
  { id: 'guwahati', name: 'Guwahati', state: 'Assam', lat: 26.1445, lng: 91.7362, basin: 'Brahmaputra Mainstream' },
  { id: 'shillong', name: 'Shillong', state: 'Meghalaya', lat: 25.5788, lng: 91.8933, basin: 'Umiam / Khasi Basin' },
  { id: 'tawang', name: 'Tawang', state: 'Arunachal Pradesh', lat: 27.5861, lng: 91.8594, basin: 'Tawang Chu / Manas' },
  { id: 'kohima', name: 'Kohima', state: 'Nagaland', lat: 25.6751, lng: 94.1086, basin: 'Dhansiri / Doyang' },
  { id: 'gangtok', name: 'Gangtok', state: 'Sikkim', lat: 27.3389, lng: 88.6065, basin: 'Teesta River' },
  { id: 'imphal', name: 'Imphal', state: 'Manipur', lat: 24.8170, lng: 93.9368, basin: 'Manipur River Basin' },
  { id: 'silchar', name: 'Silchar', state: 'Assam', lat: 24.8333, lng: 92.7789, basin: 'Barak Valley Basin' },
  { id: 'agartala', name: 'Agartala', state: 'Tripura', lat: 23.8315, lng: 91.2868, basin: 'Howrah River Basin' },
  { id: 'aizawl', name: 'Aizawl', state: 'Mizoram', lat: 23.7271, lng: 92.7176, basin: 'Tlawng River' }
];

// WMO Weather Interpretation code table
export const WMO_CODE_MAP = {
  0: { label: 'Clear Sky', icon: 'Sun', risk: 'LOW' },
  1: { label: 'Mainly Clear', icon: 'Sun', risk: 'LOW' },
  2: { label: 'Partly Cloudy', icon: 'CloudSun', risk: 'LOW' },
  3: { label: 'Overcast', icon: 'Cloud', risk: 'LOW' },
  45: { label: 'Foggy Mist', icon: 'CloudFog', risk: 'MODERATE' },
  48: { label: 'Depositing Rime Fog', icon: 'CloudFog', risk: 'HIGH' },
  51: { label: 'Light Drizzle', icon: 'CloudDrizzle', risk: 'LOW' },
  53: { label: 'Moderate Drizzle', icon: 'CloudDrizzle', risk: 'MODERATE' },
  55: { label: 'Dense Drizzle', icon: 'CloudRain', risk: 'HIGH' },
  61: { label: 'Slight Rain', icon: 'CloudRain', risk: 'MODERATE' },
  63: { label: 'Moderate Rain', icon: 'CloudRain', risk: 'HIGH' },
  65: { label: 'Heavy Torrential Rain', icon: 'CloudRainWind', risk: 'CRITICAL' },
  71: { label: 'Slight Snowfall', icon: 'Snowflake', risk: 'HIGH' },
  73: { label: 'Moderate Snowfall', icon: 'Snowflake', risk: 'CRITICAL' },
  75: { label: 'Heavy Snowfall', icon: 'Snowflake', risk: 'CRITICAL' },
  80: { label: 'Rain Showers', icon: 'CloudRain', risk: 'MODERATE' },
  81: { label: 'Violent Rain Showers', icon: 'CloudRainWind', risk: 'CRITICAL' },
  95: { label: 'Thunderstorm', icon: 'CloudLightning', risk: 'CRITICAL' },
  96: { label: 'Thunderstorm with Hail', icon: 'CloudLightning', risk: 'CRITICAL' }
};

/**
 * Fetch real live weather and soil saturation from Open-Meteo API
 */
export async function fetchLiveWeather(lat, lng) {
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,wind_gusts_10m&hourly=soil_moisture_0_to_1cm,precipitation_probability&forecast_days=1&timezone=auto`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Weather API error: ${res.status}`);
    const data = await res.json();
    const current = data.current;
    const weatherInfo = WMO_CODE_MAP[current.weather_code] || { label: 'Variable Weather', risk: 'MODERATE', icon: 'Cloud' };

    // Extract current soil moisture if available
    const soilMoisture = (data.hourly?.soil_moisture_0_to_1cm && data.hourly.soil_moisture_0_to_1cm[0]) 
      ? Number((data.hourly.soil_moisture_0_to_1cm[0] * 100).toFixed(1)) 
      : 38.5; // fallback volumetric %

    return {
      success: true,
      temp: Math.round(current.temperature_2m),
      apparentTemp: Math.round(current.apparent_temperature),
      humidity: current.relative_humidity_2m,
      precipitation: current.precipitation,
      windSpeed: Math.round(current.wind_speed_10m),
      windGusts: current.wind_gusts_10m ? Math.round(current.wind_gusts_10m) : Math.round(current.wind_speed_10m * 1.3),
      weatherCode: current.weather_code,
      condition: weatherInfo.label,
      riskLevel: weatherInfo.risk,
      soilMoisturePct: soilMoisture,
      source: 'Open-Meteo Real-Time Satellite'
    };
  } catch (err) {
    console.warn('Live weather fetch failed, using cached baseline:', err);
    return {
      success: false,
      temp: 22,
      apparentTemp: 23,
      humidity: 76,
      precipitation: 3.5,
      windSpeed: 14,
      windGusts: 22,
      weatherCode: 61,
      condition: 'Monsoon Showers',
      riskLevel: 'MODERATE',
      soilMoisturePct: 42.0,
      source: 'SafarNama Weather Model (Cached)'
    };
  }
}

/**
 * Fetch river discharge and flood warning metrics using Copernicus GloFAS via Open-Meteo
 */
export async function fetchRiverFloodDischarge(lat, lng) {
  try {
    const url = `https://flood-api.open-meteo.com/v1/flood?latitude=${lat}&longitude=${lng}&daily=river_discharge,river_discharge_mean,river_discharge_max&forecast_days=7`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Flood API error: ${res.status}`);
    const data = await res.json();

    const currentDischarge = data.daily?.river_discharge?.[0] ?? 0;
    const maxDischarge = data.daily?.river_discharge_max?.[0] ?? currentDischarge;
    const meanDischarge = data.daily?.river_discharge_mean?.[0] ?? currentDischarge;

    // Determine flood severity relative to baseline
    let floodRisk = 'NORMAL';
    let floodAlert = 'Safe river levels; no spillover risk.';

    const surgeRatio = meanDischarge > 0 ? maxDischarge / meanDischarge : 1.0;
    if (surgeRatio > 1.75 || currentDischarge > 12000) {
      floodRisk = 'CRITICAL';
      floodAlert = 'Dangerous hydrological discharge; potential culvert submergence & bank overtopping.';
    } else if (surgeRatio > 1.35 || currentDischarge > 6000) {
      floodRisk = 'MODERATE';
      floodAlert = 'Elevated river runoff; cautionary bypass routing advised for low-lying causeways.';
    }

    return {
      success: true,
      currentDischargeM3s: Math.round(currentDischarge),
      maxDischargeM3s: Math.round(maxDischarge),
      meanDischargeM3s: Math.round(meanDischarge),
      surgeRatio: Number(surgeRatio.toFixed(2)),
      floodRisk,
      floodAlert,
      forecastDates: data.daily?.time || [],
      dischargeTrend: data.daily?.river_discharge || [],
      source: 'Copernicus GloFAS Hydrological Model'
    };
  } catch (err) {
    console.warn('Live river flood fetch failed, using regional hydrological baseline:', err);
    return {
      success: false,
      currentDischargeM3s: 1850,
      maxDischargeM3s: 2100,
      meanDischargeM3s: 1650,
      surgeRatio: 1.15,
      floodRisk: 'LOW',
      floodAlert: 'Seasonal monsoon flow within standard embankments.',
      forecastDates: [],
      dischargeTrend: [],
      source: 'SafarNama Basin Baseline (Cached)'
    };
  }
}

/**
 * Compute multi-factor landslide hazard probability along mountainous highway sectors
 * Incorporates: Soil moisture saturation + hourly precipitation + slope gradient
 */
export function computeLandslideVulnerability({ soilMoisturePct = 40, precipitationMm = 0, slopeGradientPct = 10 }) {
  // Soil moisture factor (0-40 pts): saturation above 45% rapidly destabilizes Himalayan phyllites
  const moistureFactor = Math.min(40, Math.max(0, (soilMoisturePct - 25) * 1.6));
  
  // Rainfall intensity factor (0-35 pts): >15mm/hr triggers rapid debris flows
  const rainFactor = Math.min(35, precipitationMm * 3.5);
  
  // Slope gradient factor (0-25 pts): steep slopes (>8%) multiply sheer stress
  const slopeFactor = Math.min(25, slopeGradientPct * 2.2);

  const totalRiskScore = Math.min(100, Math.round(moistureFactor + rainFactor + slopeFactor));
  
  let riskLevel = 'LOW';
  let advice = 'Standard driving conditions; monitor roadside culverts.';

  if (totalRiskScore >= 75) {
    riskLevel = 'CRITICAL';
    advice = 'Extreme slope instability; high likelihood of rockfall or mudslide. Enforce convoy halt.';
  } else if (totalRiskScore >= 50) {
    riskLevel = 'HIGH';
    advice = 'Elevated pore pressure in mountain cuts. Exercise caution through single-lane tunnels.';
  } else if (totalRiskScore >= 30) {
    riskLevel = 'MODERATE';
    advice = 'Wet pavement with minor scree shedding. Speed restriction 30 km/h.';
  }

  return {
    totalRiskScore,
    riskLevel,
    advice,
    breakdown: {
      moistureContribution: Math.round(moistureFactor),
      rainfallContribution: Math.round(rainFactor),
      slopeContribution: Math.round(slopeFactor)
    }
  };
}

/**
 * Fetch weather and flood summary for all NER key logistics hubs
 */
export async function fetchAllNERHubsWeather() {
  const results = await Promise.all(
    NER_WEATHER_HUBS.map(async (hub) => {
      const [weather, flood] = await Promise.all([
        fetchLiveWeather(hub.lat, hub.lng),
        fetchRiverFloodDischarge(hub.lat, hub.lng)
      ]);
      return {
        ...hub,
        weather,
        flood
      };
    })
  );
  return results;
}
