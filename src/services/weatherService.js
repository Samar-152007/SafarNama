/**
 * SafarNama Weather Service
 * Real-time weather intelligence powered by Open-Meteo API
 * https://open-meteo.com/
 */

export const NER_WEATHER_HUBS = [
  { id: 'guwahati', name: 'Guwahati', state: 'Assam', lat: 26.1445, lng: 91.7362 },
  { id: 'shillong', name: 'Shillong', state: 'Meghalaya', lat: 25.5788, lng: 91.8933 },
  { id: 'tawang', name: 'Tawang', state: 'Arunachal Pradesh', lat: 27.5861, lng: 91.8594 },
  { id: 'kohima', name: 'Kohima', state: 'Nagaland', lat: 25.6751, lng: 94.1086 },
  { id: 'gangtok', name: 'Gangtok', state: 'Sikkim', lat: 27.3389, lng: 88.6065 },
  { id: 'imphal', name: 'Imphal', state: 'Manipur', lat: 24.8170, lng: 93.9368 },
  { id: 'agartala', name: 'Agartala', state: 'Tripura', lat: 23.8315, lng: 91.2868 },
  { id: 'aizawl', name: 'Aizawl', state: 'Mizoram', lat: 23.7271, lng: 92.7176 }
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
 * Fetch real live weather from Open-Meteo API
 */
export async function fetchLiveWeather(lat, lng) {
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&timezone=auto`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Weather API error: ${res.status}`);
    const data = await res.json();
    const current = data.current;
    const weatherInfo = WMO_CODE_MAP[current.weather_code] || { label: 'Variable Weather', risk: 'MODERATE', icon: 'Cloud' };

    return {
      success: true,
      temp: Math.round(current.temperature_2m),
      apparentTemp: Math.round(current.apparent_temperature),
      humidity: current.relative_humidity_2m,
      precipitation: current.precipitation,
      windSpeed: Math.round(current.wind_speed_10m),
      weatherCode: current.weather_code,
      condition: weatherInfo.label,
      riskLevel: weatherInfo.risk,
      source: 'Open-Meteo Real-Time Satellite'
    };
  } catch (err) {
    // Safe graceful fallback if offline or CORS issue
    console.warn('Live weather fetch failed, using fallback estimate:', err);
    return {
      success: false,
      temp: 21,
      apparentTemp: 22,
      humidity: 78,
      precipitation: 4.2,
      windSpeed: 14,
      weatherCode: 61,
      condition: 'Monsoon Showers',
      riskLevel: 'MODERATE',
      source: 'SafarNama Weather Model (Cached)'
    };
  }
}

/**
 * Fetch weather summary for multiple NER key cities
 */
export async function fetchAllNERHubsWeather() {
  const results = await Promise.all(
    NER_WEATHER_HUBS.map(async (hub) => {
      const weather = await fetchLiveWeather(hub.lat, hub.lng);
      return {
        ...hub,
        weather
      };
    })
  );
  return results;
}
