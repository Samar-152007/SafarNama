import L from 'leaflet';

/**
 * Creates custom HTML Leaflet icon for incident markers
 */
export function createCustomIncidentIcon(severityLevel, type) {
  let color = '#0F4C4C'; // safe (deep teal)
  let glowColor = 'rgba(15, 76, 76, 0.35)';

  const level = (severityLevel || '').toLowerCase();
  if (level === 'critical') {
    color = '#DC2626'; // red
    glowColor = 'rgba(220, 38, 38, 0.4)';
  } else if (level === 'high') {
    color = '#C6A15B'; // muted gold
    glowColor = 'rgba(198, 161, 91, 0.4)';
  } else if (level === 'moderate') {
    color = '#6F8F72'; // sage
    glowColor = 'rgba(111, 143, 114, 0.4)';
  }

  const html = `
    <div class="custom-leaflet-marker" style="position: relative; width: 34px; height: 34px; display: flex; align-items: center; justify-content: center;">
      <div class="marker-pulse" style="position: absolute; width: 100%; height: 100%; border-radius: 50%; background: ${glowColor}; animation: marker-ring-pulse 2s infinite ease-out;"></div>
      <div class="marker-pin" style="position: relative; width: 22px; height: 22px; border-radius: 50%; background: ${color}; border: 2.5px solid #FFFFFF; box-shadow: 0 4px 10px rgba(0,0,0,0.25); display: flex; align-items: center; justify-content: center; color: #FFFFFF; font-size: 10px; font-weight: bold;">
        ${type === 'Flood' ? '🌊' : type === 'Landslide' ? '⛰️' : type === 'Road Blockage' ? '🚧' : '⚠️'}
      </div>
    </div>
  `;

  return L.divIcon({
    html: html,
    className: 'custom-incident-marker-container',
    iconSize: [34, 34],
    iconAnchor: [17, 17],
    popupAnchor: [0, -18]
  });
}
