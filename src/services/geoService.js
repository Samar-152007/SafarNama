/**
 * SafarNama Geospatial Intelligence Service
 * Powered by OpenStreetMap Nominatim API
 * Provides live geocoding, reverse-geocoding, and checkpoint resolution across India & NER
 */

// Fallback high-priority NER hubs and strategic mountain passes
export const PREDEFINED_NER_HUBS = [
  { id: 'guwahati', name: 'Guwahati', state: 'Assam', lat: 26.1445, lng: 91.7362, elevation: 55 },
  { id: 'shillong', name: 'Shillong', state: 'Meghalaya', lat: 25.5788, lng: 91.8933, elevation: 1525 },
  { id: 'tawang', name: 'Tawang', state: 'Arunachal Pradesh', lat: 27.5861, lng: 91.8594, elevation: 3048 },
  { id: 'bomdila', name: 'Bomdila', state: 'Arunachal Pradesh', lat: 27.2644, lng: 92.4207, elevation: 2415 },
  { id: 'sela-pass', name: 'Sela Pass', state: 'Arunachal Pradesh', lat: 27.5030, lng: 92.1030, elevation: 4170 },
  { id: 'silchar', name: 'Silchar', state: 'Assam', lat: 24.8333, lng: 92.7789, elevation: 25 },
  { id: 'imphal', name: 'Imphal', state: 'Manipur', lat: 24.8170, lng: 93.9368, elevation: 786 },
  { id: 'kohima', name: 'Kohima', state: 'Nagaland', lat: 25.6751, lng: 94.1086, elevation: 1444 },
  { id: 'gangtok', name: 'Gangtok', state: 'Sikkim', lat: 27.3389, lng: 88.6065, elevation: 1650 },
  { id: 'agartala', name: 'Agartala', state: 'Tripura', lat: 23.8315, lng: 91.2868, elevation: 32 },
  { id: 'aizawl', name: 'Aizawl', state: 'Mizoram', lat: 23.7271, lng: 92.7176, elevation: 1132 },
  { id: 'tezpur', name: 'Tezpur', state: 'Assam', lat: 26.6528, lng: 92.7926, elevation: 75 },
  { id: 'jorhat', name: 'Jorhat', state: 'Assam', lat: 26.7509, lng: 94.2037, elevation: 87 },
  { id: 'dibrugarh', name: 'Dibrugarh', state: 'Assam', lat: 27.4728, lng: 94.9120, elevation: 108 },
  { id: 'siliguri', name: 'Siliguri', state: 'West Bengal / Gateway', lat: 26.7271, lng: 88.3953, elevation: 122 }
];

const cache = new Map();

/**
 * Search locations using OpenStreetMap Nominatim API with fallback
 */
export async function searchLocation(query) {
  if (!query || query.trim().length < 2) return [];

  const cleanQuery = query.trim();
  const cacheKey = `geo:${cleanQuery.toLowerCase()}`;
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }

  try {
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(cleanQuery)}&format=json&countrycodes=in&limit=5`;
    const res = await fetch(url, {
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!res.ok) throw new Error(`Geocoding HTTP ${res.status}`);
    const data = await res.json();

    if (Array.isArray(data) && data.length > 0) {
      const formatted = data.map((item) => ({
        id: `osm-${item.place_id}`,
        name: item.name || item.display_name.split(',')[0],
        displayName: item.display_name,
        lat: parseFloat(item.lat),
        lng: parseFloat(item.lon),
        type: item.type,
        source: 'OpenStreetMap Nominatim'
      }));

      cache.set(cacheKey, formatted);
      return formatted;
    }
  } catch (err) {
    console.warn('Live Nominatim geocoding failed or offline, checking local registry:', err);
  }

  // Fallback to local known NER hubs
  const localMatches = PREDEFINED_NER_HUBS.filter((hub) =>
    hub.name.toLowerCase().includes(cleanQuery.toLowerCase()) ||
    hub.state.toLowerCase().includes(cleanQuery.toLowerCase())
  ).map((hub) => ({
    id: hub.id,
    name: hub.name,
    displayName: `${hub.name}, ${hub.state}, India`,
    lat: hub.lat,
    lng: hub.lng,
    source: 'SafarNama NER Registry'
  }));

  return localMatches;
}

/**
 * Reverse geocode latitude and longitude to human-readable address
 */
export async function reverseGeocode(lat, lng) {
  const cacheKey = `rev:${lat.toFixed(4)},${lng.toFixed(4)}`;
  if (cache.has(cacheKey)) return cache.get(cacheKey);

  try {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Reverse geocode HTTP ${res.status}`);
    const data = await res.json();

    const result = {
      displayName: data.display_name,
      road: data.address?.road || data.address?.highway || 'Highway Sector',
      suburb: data.address?.suburb || data.address?.town || data.address?.city,
      state: data.address?.state || 'NER'
    };
    cache.set(cacheKey, result);
    return result;
  } catch (err) {
    return {
      displayName: `${lat.toFixed(4)}°N, ${lng.toFixed(4)}°E`,
      road: 'Highway Transit Sector',
      suburb: 'North Eastern Region',
      state: 'NER'
    };
  }
}
