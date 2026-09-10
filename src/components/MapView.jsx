import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl, useMap } from 'react-leaflet';
import { createCustomIncidentIcon } from './IncidentMarker';
import { AlertCircle, Clock, ShieldCheck, MapPin, Filter, Layers, Navigation, Sparkles } from 'lucide-react';

// Controller component to smoothly fly/pan map when user selects state
function MapController({ center, zoom }) {
  const map = useMap();
  React.useEffect(() => {
    if (center) {
      map.flyTo(center, zoom || 7.5, { duration: 1.2 });
    }
  }, [center, zoom, map]);
  return null;
}

export default function MapView({ incidents = [], selectedIncidentId, onSelectIncident }) {
  const [selectedState, setSelectedState] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [mapCenter, setMapCenter] = useState([26.15, 92.9]);
  const [mapZoom, setMapZoom] = useState(7.2);

  const states = ['All', 'Assam', 'Arunachal Pradesh', 'Meghalaya', 'Nagaland', 'Manipur', 'Mizoram', 'Tripura', 'Sikkim'];
  const types = ['All', 'Landslide', 'Flood', 'Road Blockage', 'Road Damage'];

  // State centers for quick navigation
  const stateCoordinates = {
    'Assam': [26.2006, 92.9376],
    'Arunachal Pradesh': [27.5861, 92.4173],
    'Meghalaya': [25.4670, 91.3662],
    'Nagaland': [25.7511, 94.1086],
    'Manipur': [24.6637, 93.9063],
    'Mizoram': [23.1645, 92.9376],
    'Tripura': [23.8315, 91.2868],
    'Sikkim': [27.5330, 88.5122]
  };

  const handleStateClick = (state) => {
    setSelectedState(state);
    if (state === 'All') {
      setMapCenter([26.15, 92.9]);
      setMapZoom(7.2);
    } else if (stateCoordinates[state]) {
      setMapCenter(stateCoordinates[state]);
      setMapZoom(8.5);
    }
  };

  // Filtered incidents
  const filteredIncidents = incidents.filter((inc) => {
    const matchesState = selectedState === 'All' || inc.state === selectedState;
    const matchesType = selectedType === 'All' || inc.type === selectedType;
    return matchesState && matchesType;
  });

  return (
    <div className="map-view-container card">
      {/* Top Filter and Controls Bar */}
      <div className="map-controls-header">
        <div className="filter-group">
          <div className="filter-label">
            <Filter size={14} />
            <span>State Filter:</span>
          </div>
          <div className="filter-pills-scroll">
            {states.map((state) => (
              <button
                key={state}
                className={`filter-pill ${selectedState === state ? 'active' : ''}`}
                onClick={() => handleStateClick(state)}
              >
                {state}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-group-types">
          <span className="type-label">Incident Type:</span>
          <select
            className="type-select"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            {types.map((t) => (
              <option key={t} value={t}>{t === 'All' ? 'All Incidents' : t}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Leaflet Map View */}
      <div className="leaflet-map-wrapper">
        <MapContainer
          center={mapCenter}
          zoom={mapZoom}
          scrollWheelZoom={false}
          zoomControl={false}
          style={{ width: '100%', height: '100%' }}
        >
          <ZoomControl position="bottomright" />
          <MapController center={mapCenter} zoom={mapZoom} />

          {/* Clean OpenStreetMap Carto Style Tiles */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            maxZoom={18}
          />

          {/* Incident Markers */}
          {filteredIncidents.map((incident) => {
            const icon = createCustomIncidentIcon(incident.severityLevel || incident.severity, incident.type);
            return (
              <Marker
                key={incident.id}
                position={[incident.lat, incident.lng]}
                icon={icon}
                eventHandlers={{
                  click: () => {
                    if (onSelectIncident) onSelectIncident(incident);
                  }
                }}
              >
                <Popup className="custom-incident-popup">
                  <div className="popup-card">
                    {/* Header with Severity Badge */}
                    <div className="popup-top">
                      <div className="popup-type-group">
                        <span className={`badge badge-${incident.severityLevel || 'high'}`}>
                          {incident.severity}
                        </span>
                        <span className="popup-demo-tag">SIMULATED / DEMO</span>
                      </div>
                      <div className="popup-risk-badge">
                        <span className="risk-num">{incident.riskScore}</span>
                        <span className="risk-denom">/100 RISK</span>
                      </div>
                    </div>

                    {/* Incident Title & Highway */}
                    <h3 className="popup-title font-serif">{incident.title}</h3>
                    <div className="popup-location-line">
                      <MapPin size={14} className="pin-icon" />
                      <span><strong>{incident.highway}</strong>, {incident.state}</span>
                    </div>

                    {/* Description */}
                    <p className="popup-desc">{incident.description}</p>

                    {/* Telemetry Metrics */}
                    <div className="popup-metrics-grid">
                      <div className="metric-box">
                        <div className="metric-lbl">
                          <Clock size={12} />
                          <span>Clearance Est.</span>
                        </div>
                        <div className="metric-val">{incident.clearanceTime}</div>
                      </div>
                      <div className="metric-box">
                        <div className="metric-lbl">
                          <AlertCircle size={12} />
                          <span>Reported</span>
                        </div>
                        <div className="metric-val">{incident.reportedAt}</div>
                      </div>
                    </div>

                    {/* AI Recommendation Box */}
                    <div className="popup-ai-recommendation">
                      <div className="ai-rec-header">
                        <Sparkles size={13} className="sparkle-icon" />
                        <span>AI RECOMMENDATION</span>
                      </div>
                      <p className="ai-rec-body">{incident.recommendation}</p>
                    </div>
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>

        {/* Floating Legend */}
        <div className="map-legend">
          <span className="legend-title">Vulnerability Index</span>
          <div className="legend-items">
            <div className="legend-item">
              <span className="legend-color-dot dot-critical"></span>
              <span>Critical (Red)</span>
            </div>
            <div className="legend-item">
              <span className="legend-color-dot dot-high"></span>
              <span>High (Gold)</span>
            </div>
            <div className="legend-item">
              <span className="legend-color-dot dot-moderate"></span>
              <span>Moderate (Sage)</span>
            </div>
            <div className="legend-item">
              <span className="legend-color-dot dot-safe"></span>
              <span>Safe (Teal)</span>
            </div>
          </div>
        </div>

        {/* Live Active Incidents Count Tag */}
        <div className="map-active-badge">
          <Navigation size={14} className="active-nav-icon" />
          <span>Showing {filteredIncidents.length} of {incidents.length} regional alerts</span>
        </div>
      </div>

      <style>{`
        .map-view-container {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          background: var(--color-white);
          border-radius: var(--radius-xl);
          overflow: hidden;
        }

        .map-controls-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--color-border-subtle);
        }

        .filter-group {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex: 1;
          min-width: 280px;
          overflow: hidden;
        }

        .filter-label {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--color-charcoal-muted);
          white-space: nowrap;
        }

        .filter-pills-scroll {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          overflow-x: auto;
          padding-bottom: 4px;
          scrollbar-width: thin;
        }

        .filter-pill {
          padding: 0.35rem 0.85rem;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--color-charcoal-muted);
          background: var(--color-ivory);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-full);
          white-space: nowrap;
          transition: all 0.2s ease;
        }

        .filter-pill:hover {
          background: var(--color-ivory-dark);
          color: var(--color-teal);
        }

        .filter-pill.active {
          background: var(--color-teal);
          color: var(--color-white);
          border-color: var(--color-teal);
        }

        .filter-group-types {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .type-label {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--color-charcoal-muted);
          white-space: nowrap;
        }

        .type-select {
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--color-border);
          background: var(--color-ivory);
          font-weight: 600;
          font-size: 0.82rem;
          color: var(--color-teal);
          outline: none;
        }

        .leaflet-map-wrapper {
          position: relative;
          width: 100%;
          height: 560px;
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid var(--color-border);
        }

        @media (max-width: 768px) {
          .leaflet-map-wrapper {
            height: 420px;
          }
        }

        .map-legend {
          position: absolute;
          bottom: 1.25rem;
          left: 1.25rem;
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid var(--color-border);
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-md);
          z-index: 1000;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        @media (max-width: 640px) {
          .map-legend {
            display: none;
          }
        }

        .legend-title {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--color-charcoal-light);
        }

        .legend-items {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--color-charcoal);
        }

        .legend-color-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .dot-critical { background: var(--status-critical); }
        .dot-high { background: var(--color-gold); }
        .dot-moderate { background: var(--color-sage); }
        .dot-safe { background: var(--color-teal); }

        .map-active-badge {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          background: rgba(15, 76, 76, 0.9);
          color: var(--color-white);
          backdrop-filter: blur(8px);
          padding: 0.45rem 0.9rem;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.45rem;
          z-index: 1000;
          box-shadow: var(--shadow-sm);
        }

        .active-nav-icon {
          color: var(--color-gold);
        }

        /* Popup Custom Styling */
        .popup-card {
          width: 290px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .popup-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .popup-type-group {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .popup-demo-tag {
          font-size: 0.62rem;
          font-weight: 700;
          color: var(--color-charcoal-light);
          background: var(--color-ivory);
          padding: 0.15rem 0.4rem;
          border-radius: 4px;
        }

        .popup-risk-badge {
          display: flex;
          align-items: baseline;
          gap: 2px;
          font-weight: 700;
        }

        .risk-num {
          font-size: 1.15rem;
          color: var(--color-teal);
          font-family: var(--font-serif);
        }

        .risk-denom {
          font-size: 0.65rem;
          color: var(--color-charcoal-light);
        }

        .popup-title {
          font-size: 1.05rem;
          line-height: 1.25;
          color: var(--color-teal);
        }

        .popup-location-line {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.82rem;
          color: var(--color-charcoal-muted);
        }

        .pin-icon {
          color: var(--color-sage);
          flex-shrink: 0;
        }

        .popup-desc {
          font-size: 0.82rem;
          color: var(--color-charcoal-muted);
          line-height: 1.4;
          background: var(--color-ivory);
          padding: 0.5rem 0.65rem;
          border-radius: var(--radius-sm);
          border-left: 2px solid var(--color-gold);
        }

        .popup-metrics-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem;
          margin-top: 0.2rem;
        }

        .metric-box {
          background: var(--color-ivory);
          padding: 0.4rem 0.6rem;
          border-radius: var(--radius-sm);
        }

        .metric-lbl {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.68rem;
          font-weight: 600;
          color: var(--color-charcoal-light);
        }

        .metric-val {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--color-charcoal);
          margin-top: 2px;
        }

        .popup-ai-recommendation {
          background: var(--status-safe-soft);
          border: 1px solid rgba(15, 76, 76, 0.2);
          padding: 0.6rem 0.75rem;
          border-radius: var(--radius-sm);
          margin-top: 0.25rem;
        }

        .ai-rec-header {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.68rem;
          font-weight: 700;
          color: var(--color-teal);
          letter-spacing: 0.05em;
          margin-bottom: 0.25rem;
        }

        .sparkle-icon {
          color: var(--color-gold);
        }

        .ai-rec-body {
          font-size: 0.78rem;
          color: var(--color-teal-dark);
          line-height: 1.35;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}
