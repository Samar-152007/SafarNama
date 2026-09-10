import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StatCard from '../components/StatCard';
import MapView from '../components/MapView';
import LiveWeatherWidget from '../components/LiveWeatherWidget';
import { getStoredIncidents } from '../services/incidentService';
import {
  Navigation,
  AlertTriangle,
  CheckCircle,
  Activity,
  PlusCircle,
  Clock,
  MapPin,
  Sparkles,
  Shield,
  Layers,
  Search,
  ExternalLink
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const [incidents, setIncidents] = useState([]);
  const [selectedIncident, setSelectedIncident] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Load stored incidents (which includes default + any user reported)
    const data = getStoredIncidents();
    setIncidents(data);
  }, []);

  // Filtered for the sidebar list
  const displayIncidents = incidents.filter(
    (inc) =>
      inc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inc.highway.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inc.state.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="page-dashboard">
      <div className="container">
        {/* Dashboard Header */}
        <div className="dashboard-header">
          <div className="dashboard-header-text">
            <span className="section-tag">Logistics Control Tower</span>
            <h1 className="section-title">SafarNama Intelligence Dashboard</h1>
            <p className="section-subtitle">
              Real-time logistics visibility and disruption intelligence for the North Eastern Region.
            </p>
          </div>

          <div className="dashboard-header-actions">
            <Link to="/report" className="btn btn-gold">
              <PlusCircle size={16} />
              <span>Report Disruption</span>
            </Link>
            <Link to="/route-ai" className="btn btn-primary">
              <Navigation size={16} />
              <span>Analyze Route</span>
            </Link>
          </div>
        </div>

        {/* Four Premium Statistic Cards */}
        <div className="stats-grid grid-4">
          <StatCard
            label="Active Routes"
            value="24"
            subtext="Monitored commercial corridors"
            trend="+3 new corridors"
            icon={Navigation}
            color="teal"
            delay={0.1}
          />
          <StatCard
            label="Active Disruptions"
            value={incidents.length < 10 ? `0${incidents.length}` : `${incidents.length}`}
            subtext="Landslides, floods & blocks"
            trend="Live telemetry"
            icon={AlertTriangle}
            color="gold"
            delay={0.2}
          />
          <StatCard
            label="Routes Optimized"
            value="138"
            subtext="Bypasses generated this week"
            trend="96.2% safe transit"
            icon={CheckCircle}
            color="sage"
            delay={0.3}
          />
          <StatCard
            label="Regional Risk"
            value="64 / 100"
            subtext="Multi-factor vulnerability score"
            trend="Monsoon elevated"
            icon={Activity}
            color="red"
            delay={0.4}
          />
        </div>

        {/* Main Map & Incident Feed Layout */}
        <div className="dashboard-main-grid">
          {/* Left / Center: Interactive Leaflet Map */}
          <div className="map-column">
            <MapView
              incidents={incidents}
              selectedIncidentId={selectedIncident?.id}
              onSelectIncident={(inc) => setSelectedIncident(inc)}
            />
          </div>

          {/* Right: Live Disruption Feed */}
          <div className="feed-column">
            <div className="feed-card card">
              <div className="feed-header">
                <div className="feed-title-block">
                  <h3 className="feed-title font-serif">Active Disruption Feed</h3>
                  <span className="feed-counter">{displayIncidents.length} Events</span>
                </div>
                <div className="feed-search-wrap">
                  <Search size={14} className="feed-search-icon" />
                  <input
                    type="text"
                    placeholder="Filter highway, state..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="feed-search-input"
                  />
                </div>
              </div>

              <div className="feed-list-scroll">
                {displayIncidents.map((incident) => {
                  const isSelected = selectedIncident?.id === incident.id;
                  return (
                    <motion.div
                      key={incident.id}
                      onClick={() => setSelectedIncident(incident)}
                      className={`feed-item ${isSelected ? 'selected' : ''}`}
                      whileHover={{ scale: 1.01 }}
                    >
                      <div className="feed-item-top">
                        <span className={`badge badge-${incident.severityLevel || 'high'}`}>
                          {incident.severity}
                        </span>
                        <span className="feed-time">
                          <Clock size={11} />
                          {incident.reportedAt}
                        </span>
                      </div>

                      <h4 className="feed-item-title">{incident.title}</h4>

                      <div className="feed-item-meta">
                        <MapPin size={12} className="meta-pin" />
                        <span><strong>{incident.highway}</strong>, {incident.state}</span>
                      </div>

                      <p className="feed-item-rec">
                        <Sparkles size={11} className="text-gold" />
                        <span>{incident.recommendation}</span>
                      </p>

                      <div className="feed-item-footer">
                        <span className="feed-risk">Risk: <strong>{incident.riskScore}/100</strong></span>
                        <span className="feed-clearance">Est. {incident.clearanceTime}</span>
                      </div>
                    </motion.div>
                  );
                })}

                {displayIncidents.length === 0 && (
                  <div className="empty-feed">
                    <p>No incidents match your filter criteria.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Weather Widget Strip */}
        <div className="dashboard-weather-section">
          <LiveWeatherWidget />
        </div>
      </div>

      <style>{`
        .page-dashboard {
          padding: 2.5rem 0 4rem 0;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .dashboard-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
          margin-bottom: 1rem;
        }

        .dashboard-header-text {
          max-width: 680px;
        }

        .dashboard-header-actions {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          flex-wrap: wrap;
        }

        .stats-grid {
          margin-bottom: 0.5rem;
        }

        .dashboard-main-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 1.5rem;
          align-items: start;
        }

        @media (max-width: 1100px) {
          .dashboard-main-grid {
            grid-template-columns: 1fr;
          }
        }

        .map-column {
          width: 100%;
        }

        .feed-column {
          width: 100%;
        }

        .feed-card {
          padding: 1.25rem;
          background: var(--color-white);
          border-radius: var(--radius-xl);
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-height: 660px;
        }

        .feed-header {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--color-border-subtle);
        }

        .feed-title-block {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .feed-title {
          font-size: 1.15rem;
          color: var(--color-teal);
        }

        .feed-counter {
          font-size: 0.75rem;
          font-weight: 700;
          background: var(--color-ivory);
          color: var(--color-teal);
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--color-border);
        }

        .feed-search-wrap {
          position: relative;
          display: flex;
          align-items: center;
        }

        .feed-search-icon {
          position: absolute;
          left: 0.75rem;
          color: var(--color-charcoal-light);
          pointer-events: none;
        }

        .feed-search-input {
          width: 100%;
          padding: 0.45rem 0.75rem 0.45rem 2.2rem;
          background: var(--color-ivory);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-full);
          font-size: 0.82rem;
          outline: none;
        }

        .feed-search-input:focus {
          border-color: var(--color-teal);
          background: var(--color-white);
        }

        .feed-list-scroll {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          overflow-y: auto;
          max-height: 520px;
          padding-right: 4px;
        }

        .feed-item {
          background: var(--color-ivory-light);
          border: 1px solid var(--color-border-subtle);
          border-radius: var(--radius-md);
          padding: 0.85rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .feed-item:hover {
          background: var(--color-white);
          border-color: var(--color-teal);
          box-shadow: var(--shadow-sm);
        }

        .feed-item.selected {
          background: var(--status-safe-soft);
          border-color: var(--color-teal);
        }

        .feed-item-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .feed-time {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.72rem;
          color: var(--color-charcoal-light);
        }

        .feed-item-title {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--color-charcoal);
          line-height: 1.3;
        }

        .feed-item-meta {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.78rem;
          color: var(--color-charcoal-muted);
        }

        .meta-pin {
          color: var(--color-sage);
          flex-shrink: 0;
        }

        .feed-item-rec {
          display: flex;
          align-items: flex-start;
          gap: 0.35rem;
          font-size: 0.76rem;
          color: var(--color-teal);
          background: rgba(15, 76, 76, 0.05);
          padding: 0.35rem 0.5rem;
          border-radius: 4px;
          line-height: 1.3;
        }

        .feed-item-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.35rem;
          border-top: 1px dashed rgba(24, 37, 37, 0.08);
          font-size: 0.74rem;
          color: var(--color-charcoal-light);
        }

        .empty-feed {
          text-align: center;
          padding: 2rem 1rem;
          font-size: 0.85rem;
          color: var(--color-charcoal-muted);
        }

        .dashboard-weather-section {
          margin-top: 1.5rem;
        }
      `}</style>
    </div>
  );
}
