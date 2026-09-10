import React, { useState, useEffect } from 'react';
import { fetchAllNERHubsWeather } from '../services/weatherService';
import { CloudRain, Wind, Droplets, Thermometer, RefreshCw, AlertTriangle, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function LiveWeatherWidget() {
  const [hubsWeather, setHubsWeather] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);

  const loadWeather = async () => {
    setLoading(true);
    const data = await fetchAllNERHubsWeather();
    setHubsWeather(data);
    setLastUpdated(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    setLoading(false);
  };

  useEffect(() => {
    loadWeather();
  }, []);

  const getRiskBadge = (risk) => {
    switch (risk) {
      case 'CRITICAL':
        return <span className="badge badge-critical">Critical Hazard</span>;
      case 'HIGH':
        return <span className="badge badge-high">High Moisture</span>;
      case 'MODERATE':
        return <span className="badge badge-moderate">Moderate Rain</span>;
      default:
        return <span className="badge badge-safe">Favorable</span>;
    }
  };

  return (
    <div className="weather-widget-card card">
      <div className="weather-widget-header">
        <div className="header-left">
          <div className="weather-icon-badge">
            <CloudRain size={18} />
          </div>
          <div>
            <h3 className="widget-title">NER Live Monsoon & Weather Telemetry</h3>
            <p className="widget-sub">Direct Open-Meteo Satellite & Precipitation Index across regional gateways</p>
          </div>
        </div>

        <div className="header-right">
          {lastUpdated && (
            <span className="updated-timestamp">
              Updated: {lastUpdated}
            </span>
          )}
          <button
            className={`btn-refresh ${loading ? 'spinning' : ''}`}
            onClick={loadWeather}
            title="Refresh Live Weather"
            disabled={loading}
          >
            <RefreshCw size={15} />
          </button>
        </div>
      </div>

      {loading && hubsWeather.length === 0 ? (
        <div className="weather-skeleton">
          <div className="spinner"></div>
          <span>Synchronizing with Open-Meteo satellites...</span>
        </div>
      ) : (
        <div className="weather-cards-scroll">
          {hubsWeather.map((hub) => {
            const w = hub.weather || {};
            return (
              <div key={hub.id} className="city-weather-pill">
                <div className="pill-head">
                  <div>
                    <span className="city-name">{hub.name}</span>
                    <span className="city-state">{hub.state}</span>
                  </div>
                  {getRiskBadge(w.riskLevel)}
                </div>

                <div className="temp-row">
                  <span className="temp-val font-serif">{w.temp}°C</span>
                  <span className="condition-text">{w.condition}</span>
                </div>

                <div className="weather-meta">
                  <div className="meta-item" title="Relative Humidity">
                    <Droplets size={12} />
                    <span>{w.humidity}%</span>
                  </div>
                  <div className="meta-item" title="Precipitation">
                    <CloudRain size={12} />
                    <span>{w.precipitation} mm</span>
                  </div>
                  <div className="meta-item" title="Wind Velocity">
                    <Wind size={12} />
                    <span>{w.windSpeed} km/h</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="weather-widget-footer">
        <span className="source-tag">Source: Open-Meteo High-Resolution Numerical Weather Models</span>
        <span className="disclaimer-tag">Real-time API integration</span>
      </div>

      <style>{`
        .weather-widget-card {
          padding: 1.5rem;
          background: var(--color-white);
          border-radius: var(--radius-xl);
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .weather-widget-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .weather-icon-badge {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: var(--status-safe-soft);
          color: var(--color-teal);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .widget-title {
          font-size: 1.15rem;
          color: var(--color-teal);
          margin-bottom: 2px;
        }

        .widget-sub {
          font-size: 0.82rem;
          color: var(--color-charcoal-muted);
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .updated-timestamp {
          font-size: 0.78rem;
          color: var(--color-charcoal-light);
          font-weight: 600;
        }

        .btn-refresh {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--color-ivory);
          color: var(--color-teal);
          border: 1px solid var(--color-border);
          transition: all 0.2s ease;
        }

        .btn-refresh:hover {
          background: var(--color-teal);
          color: var(--color-white);
        }

        .spinning {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .weather-skeleton {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 2.5rem;
          color: var(--color-charcoal-light);
          font-size: 0.9rem;
        }

        .weather-cards-scroll {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }

        @media (max-width: 1100px) {
          .weather-cards-scroll {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .weather-cards-scroll {
            grid-template-columns: 1fr;
          }
        }

        .city-weather-pill {
          background: var(--color-ivory-light);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          transition: all 0.2s ease;
        }

        .city-weather-pill:hover {
          background: var(--color-white);
          box-shadow: var(--shadow-sm);
          border-color: var(--color-teal);
        }

        .pill-head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 0.5rem;
        }

        .city-name {
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--color-charcoal);
          display: block;
        }

        .city-state {
          font-size: 0.72rem;
          color: var(--color-charcoal-light);
        }

        .temp-row {
          display: flex;
          align-items: baseline;
          gap: 0.6rem;
        }

        .temp-val {
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--color-teal);
        }

        .condition-text {
          font-size: 0.8rem;
          color: var(--color-charcoal-muted);
          font-weight: 500;
        }

        .weather-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.5rem;
          border-top: 1px dashed rgba(24, 37, 37, 0.1);
          font-size: 0.74rem;
          color: var(--color-charcoal-muted);
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .weather-widget-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.75rem;
          border-top: 1px solid var(--color-border-subtle);
          font-size: 0.72rem;
          color: var(--color-charcoal-light);
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .disclaimer-tag {
          font-weight: 600;
          color: var(--color-sage);
        }
      `}</style>
    </div>
  );
}
