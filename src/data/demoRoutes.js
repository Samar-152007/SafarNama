export const routeHubs = [
  { id: 'guwahati', name: 'Guwahati', state: 'Assam', lat: 26.1445, lng: 91.7362 },
  { id: 'tawang', name: 'Tawang', state: 'Arunachal Pradesh', lat: 27.5861, lng: 91.8594 },
  { id: 'shillong', name: 'Shillong', state: 'Meghalaya', lat: 25.5788, lng: 91.8933 },
  { id: 'silchar', name: 'Silchar', state: 'Assam', lat: 24.8333, lng: 92.7789 },
  { id: 'imphal', name: 'Imphal', state: 'Manipur', lat: 24.8170, lng: 93.9368 },
  { id: 'kohima', name: 'Kohima', state: 'Nagaland', lat: 25.6751, lng: 94.1086 },
  { id: 'gangtok', name: 'Gangtok', state: 'Sikkim', lat: 27.3389, lng: 88.6065 },
  { id: 'siliguri', name: 'Siliguri', state: 'West Bengal / Gateway', lat: 26.7271, lng: 88.3953 }
];

export const demoRoutesData = {
  'guwahati-tawang': {
    from: 'Guwahati',
    to: 'Tawang',
    originCoord: [26.1445, 91.7362],
    destCoord: [27.5861, 91.8594],
    mapCenter: [26.85, 92.15],
    mapZoom: 8,
    primaryRoute: {
      name: 'BCT Arterial (Balipara-Charduar-Tawang)',
      via: 'Via NH-13 & High Bepa Ridge Pass',
      riskScore: 82,
      distance: '465 km',
      eta: '14h 20m',
      terrainRisk: 'HIGH',
      weatherRisk: 'HIGH',
      roadRisk: 'HIGH',
      status: 'HIGH RISK',
      color: '#DC2626', // Deep Red
      hazardSummary: 'Active mudslide at Sela Pass lower approach; 42mm torrential rainfall ongoing; unstable road shoulder with single lane squeeze.',
      // High-resolution realistic polyline coordinates from Guwahati -> Mangaldai -> Tezpur/Balipara -> Bhalukpong -> Bomdila -> Dirang -> Sela Pass -> Tawang
      coordinates: [
        [26.1445, 91.7362], // Guwahati
        [26.2410, 91.8520],
        [26.4350, 92.0310], // Mangaldai
        [26.6500, 92.5100],
        [26.7120, 92.7980], // Tezpur
        [26.8200, 92.7800], // Balipara
        [27.0100, 92.6500], // Bhalukpong (entry to Arunachal)
        [27.1800, 92.5200], // Tenga Valley
        [27.2640, 92.4200], // Bomdila (High hazard point 1)
        [27.3550, 92.2400], // Dirang
        [27.5020, 92.1000], // Sela Pass 13,700 ft (Critical blockage)
        [27.5450, 91.9800], // Jang
        [27.5861, 91.8594]  // Tawang
      ],
      hazardPoints: [
        { lat: 27.5020, lng: 92.1000, label: 'CRITICAL: Landslide & Submerged Culvert', type: 'Landslide' },
        { lat: 27.2640, lng: 92.4200, label: 'SEVERE: Dense Fog & Rockfall Risk', type: 'Weather' }
      ]
    },
    recommendedRoute: {
      name: 'AI Optimized Kalaktang-Rupa Valley Bypass',
      via: 'Via Orang - Kalaktang - Shergaon Highway',
      riskScore: 34,
      distance: '492 km',
      eta: '15h 05m',
      terrainRisk: 'MODERATE',
      weatherRisk: 'LOW',
      roadRisk: 'LOW',
      status: 'RECOMMENDED',
      color: '#0F4C4C', // Deep Teal / Sage Green
      hazardSummary: 'Stabilized southern valley corridor with newly reinforced retaining walls, lower gradient climbs, and clear radar visibility.',
      // Alternate route polyline via Orang, Rowta, Kalaktang, Shergaon, Rupa, connecting above the slide zone
      coordinates: [
        [26.1445, 91.7362], // Guwahati
        [26.3100, 91.9200],
        [26.5400, 92.1400], // Rowta
        [26.7100, 92.1700], // Orang corridor
        [26.9600, 92.1100], // Kalaktang Valley (newly fortified)
        [27.1200, 92.2600], // Shergaon
        [27.2000, 92.3900], // Rupa
        [27.3600, 92.2500], // Dirang junction bypass
        [27.5100, 92.0500], // Stabilized mountain gallery pass
        [27.5600, 91.9400], // Jang valley bypass
        [27.5861, 91.8594]  // Tawang
      ],
      advantages: [
        'Avoids 2 active landslide zones at Sela lower cut',
        'Lower average precipitation by 58% over next 18 hours',
        '2-lane newly surfaced military highway with high axle clearance',
        'Reduces breakdown risk by 62%'
      ]
    }
  },
  'silchar-imphal': {
    from: 'Silchar',
    to: 'Imphal',
    originCoord: [24.8333, 92.7789],
    destCoord: [24.8170, 93.9368],
    mapCenter: [24.82, 93.35],
    mapZoom: 9,
    primaryRoute: {
      name: 'NH-37 Jiribam-Imphal Highway',
      via: 'Via Noney & Makru River Canyons',
      riskScore: 78,
      distance: '242 km',
      eta: '9h 30m',
      terrainRisk: 'HIGH',
      weatherRisk: 'MODERATE',
      roadRisk: 'HIGH',
      status: 'HIGH RISK',
      color: '#DC2626',
      hazardSummary: 'Heavy mud slurries along Noney construction zones; slow convoy clearance.',
      coordinates: [
        [24.8333, 92.7789],
        [24.8020, 93.1200], // Jiribam
        [24.7800, 93.4200], // Nungba
        [24.8100, 93.6800], // Noney
        [24.8170, 93.9368]  // Imphal
      ],
      hazardPoints: [
        { lat: 24.8100, lng: 93.6800, label: 'HIGH: Slope slump near Noney railway cut', type: 'Landslide' }
      ]
    },
    recommendedRoute: {
      name: 'AI Recommended Old Cachar Valley Loop',
      via: 'Via Khongsang - Rengpang Bypass',
      riskScore: 41,
      distance: '260 km',
      eta: '8h 55m',
      terrainRisk: 'MODERATE',
      weatherRisk: 'LOW',
      roadRisk: 'MODERATE',
      status: 'RECOMMENDED',
      color: '#0F4C4C',
      hazardSummary: 'Stabilized roadbed with dedicated recovery vehicles posted every 15 km.',
      coordinates: [
        [24.8333, 92.7789],
        [24.8020, 93.1200],
        [24.8900, 93.3800],
        [24.8700, 93.7200],
        [24.8170, 93.9368]
      ],
      advantages: [
        'Bypasses active Noney sliding bank',
        'Better cell network continuity for GPS telemetry',
        'Saves 35 minutes overall due to smoother vehicle flow'
      ]
    }
  }
};
