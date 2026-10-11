import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapContainer, TileLayer, Polyline, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import {
  Cpu,
  AlertTriangle,
  CheckCircle2,
  ShieldCheck,
  TrendingDown,
  Clock,
  Navigation,
  MapPin,
  ArrowRight,
  Sparkles,
  Layers,
  CloudRain,
  Mountain,
  Calendar,
  ShieldAlert,
  History
} from 'lucide-react';
import { AI_ANALYSIS_STEPS } from '../services/routeService';

// Custom icons for origin, destination, and hazard
const originIcon = L.divIcon({
  html: `<div style="background:#0F4C4C; color:white; width:28px; height:28px; border-radius:50%; display:flex; align-items:center; justify-content:center; border:2px solid white; box-shadow:0 3px 8px rgba(0,0,0,0.3); font-size:12px; font-weight:bold;">A</div>`,
  className: 'route-marker-origin',
  iconSize: [28, 28],
  iconAnchor: [14, 14]
});

const destIcon = L.divIcon({
  html: `<div style="background:#C6A15B; color:white; width:28px; height:28px; border-radius:50%; display:flex; align-items:center; justify-content:center; border:2px solid white; box-shadow:0 3px 8px rgba(0,0,0,0.3); font-size:12px; font-weight:bold;">B</div>`,
  className: 'route-marker-dest',
  iconSize: [28, 28],
  iconAnchor: [14, 14]
});

const hazardIcon = L.divIcon({
  html: `<div style="background:#DC2626; color:white; width:24px; height:24px; border-radius:50%; display:flex; align-items:center; justify-content:center; border:2px solid white; box-shadow:0 0 10px rgba(220,38,38,0.7); font-size:11px;">⚠️</div>`,
  className: 'route-marker-hazard',
  iconSize: [24, 24],
  iconAnchor: [12, 12]
});

function RouteMapController({ bounds }) {
  const map = useMap();
  useEffect(() => {
    if (bounds && bounds.length > 0) {
      map.fitBounds(bounds, { padding: [40, 40] });
    }
  }, [bounds, map]);
  return null;
}

export default function RouteAnalysis({
  routeData,
  isAnalyzing,
  analysisStep,
  analysisComplete
}) {
  const { primaryRoute, recommendedRoute, originCoord, destCoord, from, to } = routeData;

  // Compute map bounds covering both routes
  const allCoords = [
    ...(primaryRoute?.coordinates || []),
    ...(recommendedRoute?.coordinates || [])
  ];

  return (
    <div className="route-analysis-wrapper">
      {/* 1. Animated AI Analysis Sequence */}
      <AnimatePresence>
        {isAnalyzing && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="ai-scanner-card card"
          >
            <div className="scanner-header">
              <div className="scanner-badge">
                <Cpu size={18} className="animate-spin-slow" />
                <span>SAFARNAMA AI INFERENCE ENGINE</span>
              </div>
              <span className="scanner-phase-count">Stage {analysisStep + 1} of 5</span>
            </div>

            <div className="steps-progress-track">
              <div
                className="steps-progress-bar"
                style={{ width: `${((analysisStep + 1) / 5) * 100}%` }}
              />
            </div>

            <div className="analysis-steps-list">
              {AI_ANALYSIS_STEPS.map((step, idx) => {
                const isCurrent = idx === analysisStep;
                const isDone = idx < analysisStep;

                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0.3 }}
                    animate={{
                      opacity: isCurrent ? 1 : isDone ? 0.8 : 0.25,
                      x: isCurrent ? 8 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className={`step-item ${isCurrent ? 'current' : ''} ${isDone ? 'completed' : ''}`}
                  >
                    <div className="step-bullet">
                      {isDone ? (
                        <CheckCircle2 size={16} className="bullet-done" />
                      ) : isCurrent ? (
                        <div className="bullet-active-spinner" />
                      ) : (
                        <div className="bullet-idle" />
                      )}
                    </div>
                    <div className="step-text-wrap">
                      <span className="step-name">{step.text}</span>
                      {isCurrent && (
                        <span className="step-detail-active">{step.detail}</span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Results & Comparison Section */}
      {analysisComplete && !isAnalyzing && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="analysis-results-section"
        >
          {/* Live Telemetry & API Verification Strip */}
          {routeData.telemetry && (
            <div className="live-telemetry-banner">
              <div className="telemetry-pill">
                <span className="live-pulse-dot"></span>
                <span className="telemetry-lbl">Routing:</span>
                <span className="telemetry-val">{routeData.telemetry.source}</span>
              </div>
              {primaryRoute.elevationProfile && (
                <div className="telemetry-pill">
                  <Mountain size={14} className="text-teal" />
                  <span className="telemetry-lbl">SRTM Peak Elevation:</span>
                  <span className="telemetry-val">{primaryRoute.elevationProfile.maxElevationM} m ({primaryRoute.elevationProfile.avgGradientPct}% slope)</span>
                </div>
              )}
              {routeData.telemetry.weather && (
                <div className="telemetry-pill">
                  <CloudRain size={14} className="text-gold" />
                  <span className="telemetry-lbl">Live Sat. Soil Saturation:</span>
                  <span className="telemetry-val">{routeData.telemetry.weather.soilMoisturePct}% ({routeData.telemetry.weather.condition})</span>
                </div>
              )}
            </div>
          )}

          {/* Seasonal Historical Hazard Early Warning Section */}
          {routeData.seasonalHazards?.interceptedHazards?.length > 0 && (
            <div className="seasonal-hazard-card card">
              <div className="seasonal-hazard-header">
                <div className="seasonal-header-left">
                  <ShieldAlert size={20} className="text-critical animate-pulse" />
                  <div>
                    <h4 className="seasonal-title">SEASONAL HISTORICAL HAZARD EARLY WARNING & RECURRENCE</h4>
                    <p className="seasonal-subtitle">
                      Cross-referencing active corridor against chronic disaster hot spots for <strong>{routeData.seasonalHazards.plannedMonthName} travel</strong>
                    </p>
                  </div>
                </div>
                <div className="seasonal-header-badge-group">
                  <span className={`season-status-pill ${routeData.seasonalHazards.criticalBreachCount > 0 ? 'critical' : 'watch'}`}>
                    {routeData.seasonalHazards.criticalBreachCount > 0
                      ? `⚠️ ${routeData.seasonalHazards.criticalBreachCount} CRITICAL BREACHES`
                      : `👁️ ${routeData.seasonalHazards.activeSeasonCount} SEASONAL WATCHES`}
                  </span>
                </div>
              </div>

              <div className="seasonal-hazards-list">
                {routeData.seasonalHazards.interceptedHazards.map((hazard) => (
                  <div key={hazard.id} className={`seasonal-item-card ${hazard.alertLevel.toLowerCase()}`}>
                    <div className="seasonal-item-top">
                      <div className="seasonal-item-title-block">
                        <span className="hazard-type-badge">{hazard.type.replace('_', ' ')}</span>
                        <strong className="hazard-zone-name">{hazard.name}</strong>
                        <span className="hazard-highway">{hazard.highway}</span>
                      </div>
                      <div className="seasonal-item-recurrence">
                        <span className="recurrence-tag">{hazard.recurrenceFrequency} RECURRENCE</span>
                        <span className="historical-count">({hazard.historicalIncidentsCount} logged events)</span>
                      </div>
                    </div>

                    <div className="trigger-thresholds-grid">
                      <div className={`trigger-cell ${hazard.triggersStatus.rainBreached ? 'breached' : 'normal'}`}>
                        <span className="cell-label">24h Rain Trigger</span>
                        <span className="cell-val">{hazard.currentTelemetry.rainfallMm} mm / {hazard.triggers.minRainfall24hMm} mm</span>
                        <span className="cell-status">{hazard.triggersStatus.rainBreached ? '⚠️ BREACHED' : '✓ Normal'}</span>
                      </div>
                      <div className={`trigger-cell ${hazard.triggersStatus.soilBreached ? 'breached' : 'normal'}`}>
                        <span className="cell-label">Soil Saturation Trigger</span>
                        <span className="cell-val">{hazard.currentTelemetry.soilMoisturePct}% / {hazard.triggers.minSoilMoisture}%</span>
                        <span className="cell-status">{hazard.triggersStatus.soilBreached ? '⚠️ SATURATED' : '✓ Normal'}</span>
                      </div>
                      <div className={`trigger-cell ${hazard.triggersStatus.dischargeBreached ? 'breached' : 'normal'}`}>
                        <span className="cell-label">River Discharge Trigger</span>
                        <span className="cell-val">{hazard.currentTelemetry.dischargeM3s} m³/s / {hazard.triggers.riverDischargeThreshold} m³/s</span>
                        <span className="cell-status">{hazard.triggersStatus.dischargeBreached ? '⚠️ HIGH STAGE' : '✓ Normal'}</span>
                      </div>
                    </div>

                    <div className="seasonal-advisory-box">
                      <strong>DRIVER ADVISORY:</strong> {hazard.advisory}
                    </div>

                    <div className="historical-precedent">
                      <em>Historical Record:</em> {hazard.lastMajorEvent}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Comparison Cards Grid */}
          <div className="comparison-grid">
            {/* Primary Route Card */}
            <div className="route-card primary-route-card card">
              <div className="route-card-banner banner-danger">
                <div className="banner-left">
                  <AlertTriangle size={16} />
                  <span>PRIMARY ROUTE</span>
                </div>
                <span className="status-badge badge-critical">{primaryRoute.status}</span>
              </div>

              <div className="route-card-body">
                <h3 className="route-card-title">{primaryRoute.name}</h3>
                <p className="route-via">{primaryRoute.via}</p>

                {/* Main Telemetry Stats */}
                <div className="route-stat-triplet">
                  <div className="triplet-item">
                    <span className="triplet-lbl">Risk Score</span>
                    <span className="triplet-val text-critical font-serif">{primaryRoute.riskScore}/100</span>
                  </div>
                  <div className="triplet-item">
                    <span className="triplet-lbl">Distance</span>
                    <span className="triplet-val font-serif">{primaryRoute.distance}</span>
                  </div>
                  <div className="triplet-item">
                    <span className="triplet-lbl">ETA</span>
                    <span className="triplet-val font-serif">{primaryRoute.eta}</span>
                  </div>
                </div>

                {/* Risk Sub-factors */}
                <div className="risk-factors-list">
                  <div className="factor-row">
                    <span className="factor-name">Terrain Risk</span>
                    <span className="badge badge-critical">{primaryRoute.terrainRisk}</span>
                  </div>
                  <div className="factor-row">
                    <span className="factor-name">Weather Risk</span>
                    <span className="badge badge-critical">{primaryRoute.weatherRisk}</span>
                  </div>
                  <div className="factor-row">
                    <span className="factor-name">Road Risk</span>
                    <span className="badge badge-critical">{primaryRoute.roadRisk}</span>
                  </div>
                </div>

                <div className="hazard-warning-box">
                  <AlertTriangle size={15} className="text-critical" />
                  <p>{primaryRoute.hazardSummary}</p>
                </div>
              </div>
            </div>

            {/* AI Recommended Route Card */}
            <div className="route-card recommended-route-card card">
              <div className="route-card-banner banner-success">
                <div className="banner-left">
                  <Sparkles size={16} className="text-gold" />
                  <span>AI RECOMMENDED ROUTE</span>
                </div>
                <span className="status-badge badge-safe">{recommendedRoute.status}</span>
              </div>

              <div className="route-card-body">
                <h3 className="route-card-title">{recommendedRoute.name}</h3>
                <p className="route-via">{recommendedRoute.via}</p>

                {/* Main Telemetry Stats */}
                <div className="route-stat-triplet">
                  <div className="triplet-item">
                    <span className="triplet-lbl">Risk Score</span>
                    <span className="triplet-val text-teal font-serif">{recommendedRoute.riskScore}/100</span>
                  </div>
                  <div className="triplet-item">
                    <span className="triplet-lbl">Distance</span>
                    <span className="triplet-val font-serif">{recommendedRoute.distance}</span>
                  </div>
                  <div className="triplet-item">
                    <span className="triplet-lbl">ETA</span>
                    <span className="triplet-val font-serif">{recommendedRoute.eta}</span>
                  </div>
                </div>

                {/* Risk Sub-factors */}
                <div className="risk-factors-list">
                  <div className="factor-row">
                    <span className="factor-name">Terrain Risk</span>
                    <span className="badge badge-moderate">{recommendedRoute.terrainRisk}</span>
                  </div>
                  <div className="factor-row">
                    <span className="factor-name">Weather Risk</span>
                    <span className="badge badge-safe">{recommendedRoute.weatherRisk}</span>
                  </div>
                  <div className="factor-row">
                    <span className="factor-name">Road Risk</span>
                    <span className="badge badge-safe">{recommendedRoute.roadRisk}</span>
                  </div>
                </div>

                {/* AI Advantages */}
                <div className="advantages-box">
                  <span className="advantages-title">SafarNama AI Optimizations:</span>
                  <ul className="advantages-list">
                    {recommendedRoute.advantages?.map((adv, i) => (
                      <li key={i}>
                        <CheckCircle2 size={13} className="adv-check" />
                        <span>{adv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Dual-Route Leaflet Map */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="route-map-card card"
          >
            <div className="route-map-header">
              <div className="map-title-block">
                <Navigation size={18} className="text-teal" />
                <h4 className="map-title">Corridor Vector Visualizer</h4>
                <span className="map-corridor-tag">
                  {from} <ArrowRight size={12} /> {to}
                </span>
              </div>
              <div className="route-map-legend">
                <div className="legend-entry">
                  <span className="line-sample line-primary"></span>
                  <span>Primary (High Risk: {primaryRoute.riskScore})</span>
                </div>
                <div className="legend-entry">
                  <span className="line-sample line-recommended"></span>
                  <span>AI Recommended ({recommendedRoute.riskScore})</span>
                </div>
              </div>
            </div>

            <div className="leaflet-route-map-frame">
              <MapContainer
                key={`${from}-${to}`}
                bounds={allCoords}
                scrollWheelZoom={false}
                zoomControl={true}
                style={{ width: '100%', height: '100%' }}
              >
                <RouteMapController bounds={allCoords} />

                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* Primary Route Polyline (Deep Red) */}
                <Polyline
                  positions={primaryRoute.coordinates}
                  pathOptions={{
                    color: '#DC2626',
                    weight: 5,
                    opacity: 0.85,
                    dashArray: '8, 6'
                  }}
                >
                  <Popup>
                    <div className="route-popup-info">
                      <strong>{primaryRoute.name}</strong>
                      <p>Status: HIGH RISK (Risk: {primaryRoute.riskScore}/100)</p>
                    </div>
                  </Popup>
                </Polyline>

                {/* AI Recommended Route Polyline (Deep Teal) */}
                <Polyline
                  positions={recommendedRoute.coordinates}
                  pathOptions={{
                    color: '#0F4C4C',
                    weight: 6,
                    opacity: 0.95
                  }}
                >
                  <Popup>
                    <div className="route-popup-info">
                      <strong>{recommendedRoute.name}</strong>
                      <p>Status: RECOMMENDED (Risk: {recommendedRoute.riskScore}/100)</p>
                    </div>
                  </Popup>
                </Polyline>

                {/* Origin Marker */}
                <Marker position={originCoord} icon={originIcon}>
                  <Popup>
                    <strong>Origin: {from}</strong>
                  </Popup>
                </Marker>

                {/* Destination Marker */}
                <Marker position={destCoord} icon={destIcon}>
                  <Popup>
                    <strong>Destination: {to}</strong>
                  </Popup>
                </Marker>

                {/* Hazard Markers on Primary Route */}
                {primaryRoute.hazardPoints?.map((h, i) => (
                  <Marker key={i} position={[h.lat, h.lng]} icon={hazardIcon}>
                    <Popup>
                      <div className="hazard-popup">
                        <strong>HAZARD INTERCEPT</strong>
                        <p>{h.label}</p>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </motion.div>
        </motion.div>
      )}

      <style>{`
        .route-analysis-wrapper {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          width: 100%;
        }

        /* AI Scanner Sequence */
        .ai-scanner-card {
          background: var(--color-white);
          border: 1px solid var(--color-border);
          border-left: 4px solid var(--color-teal);
          padding: 2rem;
          border-radius: var(--radius-xl);
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          box-shadow: var(--shadow-lg);
        }

        .scanner-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .scanner-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-teal);
          font-weight: 700;
          font-size: 0.88rem;
          letter-spacing: 0.06em;
        }

        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }

        .scanner-phase-count {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--color-gold);
          background: var(--color-gold-soft);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-full);
        }

        .steps-progress-track {
          width: 100%;
          height: 6px;
          background: var(--color-ivory);
          border-radius: var(--radius-full);
          overflow: hidden;
        }

        .steps-progress-bar {
          height: 100%;
          background: linear-gradient(90deg, var(--color-sage) 0%, var(--color-teal) 100%);
          border-radius: var(--radius-full);
          transition: width 0.4s ease;
        }

        .analysis-steps-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .step-item {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.6rem 0.9rem;
          border-radius: var(--radius-md);
          background: var(--color-ivory-light);
          border: 1px solid transparent;
        }

        .step-item.current {
          background: var(--status-safe-soft);
          border-color: rgba(15, 76, 76, 0.2);
        }

        .step-item.completed {
          background: var(--color-white);
        }

        .bullet-done {
          color: var(--color-sage);
        }

        .bullet-active-spinner {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 2px solid var(--color-teal);
          border-top-color: transparent;
          animation: spin 0.8s linear infinite;
        }

        .bullet-idle {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #D1D5DB;
        }

        .step-text-wrap {
          display: flex;
          flex-direction: column;
        }

        .step-name {
          font-size: 0.86rem;
          font-weight: 700;
          color: var(--color-charcoal);
          letter-spacing: 0.04em;
        }

        .step-detail-active {
          font-size: 0.78rem;
          color: var(--color-teal);
          margin-top: 2px;
          font-weight: 500;
        }

        /* Results & Comparison */
        .analysis-results-section {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .comparison-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        @media (max-width: 900px) {
          .comparison-grid {
            grid-template-columns: 1fr;
          }
        }

        .route-card {
          padding: 0;
          overflow: hidden;
          border-radius: var(--radius-xl);
          display: flex;
          flex-direction: column;
        }

        .primary-route-card {
          border-top: 4px solid var(--status-critical);
        }

        .recommended-route-card {
          border-top: 4px solid var(--color-teal);
        }

        .route-card-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.85rem 1.5rem;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .banner-danger {
          background: var(--status-critical-soft);
          color: var(--status-critical);
        }

        .banner-success {
          background: var(--status-safe-soft);
          color: var(--color-teal);
        }

        .banner-left {
          display: flex;
          align-items: center;
          gap: 0.45rem;
        }

        .route-card-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          flex: 1;
        }

        .route-card-title {
          font-size: 1.25rem;
          color: var(--color-charcoal);
          line-height: 1.25;
        }

        .route-via {
          font-size: 0.84rem;
          color: var(--color-charcoal-light);
          margin-top: -0.5rem;
        }

        .route-stat-triplet {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
          padding: 0.85rem;
          background: var(--color-ivory);
          border-radius: var(--radius-md);
        }

        .triplet-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .triplet-lbl {
          font-size: 0.72rem;
          font-weight: 600;
          text-transform: uppercase;
          color: var(--color-charcoal-light);
        }

        .triplet-val {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--color-charcoal);
        }

        .text-critical {
          color: var(--status-critical) !important;
        }

        .text-teal {
          color: var(--color-teal) !important;
        }

        .text-gold {
          color: var(--color-gold) !important;
        }

        .risk-factors-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .factor-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.84rem;
          font-weight: 600;
          color: var(--color-charcoal-muted);
          padding-bottom: 0.35rem;
          border-bottom: 1px dashed rgba(24, 37, 37, 0.08);
        }

        .hazard-warning-box {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          background: var(--status-critical-soft);
          border: 1px solid rgba(220, 38, 38, 0.2);
          border-radius: var(--radius-sm);
          padding: 0.75rem 0.9rem;
          font-size: 0.82rem;
          color: #991B1B;
          line-height: 1.4;
        }

        .advantages-box {
          background: var(--status-safe-soft);
          border: 1px solid rgba(15, 76, 76, 0.15);
          border-radius: var(--radius-sm);
          padding: 0.85rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .advantages-title {
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--color-teal);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .advantages-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .advantages-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.45rem;
          font-size: 0.82rem;
          color: var(--color-teal-dark);
          line-height: 1.35;
        }

        .adv-check {
          color: var(--color-sage);
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* Route Map Section */
        .route-map-card {
          padding: 1.5rem;
          border-radius: var(--radius-xl);
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .route-map-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .map-title-block {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .map-title {
          font-size: 1.15rem;
          color: var(--color-teal);
        }

        .map-corridor-tag {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--color-charcoal-muted);
          background: var(--color-ivory);
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--color-border);
        }

        .route-map-legend {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--color-charcoal-muted);
          flex-wrap: wrap;
        }

        .legend-entry {
          display: flex;
          align-items: center;
          gap: 0.45rem;
        }

        .line-sample {
          width: 24px;
          height: 4px;
          border-radius: 2px;
        }

        .line-primary {
          background: #DC2626;
        }

        .line-recommended {
          background: #0F4C4C;
        }

        .leaflet-route-map-frame {
          width: 100%;
          height: 460px;
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid var(--color-border);
        }

        .route-popup-info {
          padding: 0.25rem;
          font-size: 0.8rem;
        }

        .hazard-popup {
          padding: 0.25rem;
          color: #DC2626;
          font-size: 0.8rem;
        }

        .live-telemetry-banner {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          padding: 0.85rem 1.25rem;
          background: #F0FDF4;
          border: 1px solid #BBF7D0;
          border-radius: var(--radius-lg);
          margin-bottom: 1.25rem;
          align-items: center;
        }

        .telemetry-pill {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.8rem;
          color: #166534;
        }

        .telemetry-lbl {
          font-weight: 500;
          color: #15803D;
        }

        .telemetry-val {
          font-weight: 700;
          color: #14532D;
        }

        .live-pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #16A34A;
          box-shadow: 0 0 0 0 rgba(22, 163, 74, 0.7);
          animation: pulseGreen 2s infinite;
        }

        @keyframes pulseGreen {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(22, 163, 74, 0.7);
          }
          70% {
            transform: scale(1);
            box-shadow: 0 0 0 6px rgba(22, 163, 74, 0);
          }
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(22, 163, 74, 0);
          }
        }

        /* Seasonal Historical Hazard Early Warning Box */
        .seasonal-hazard-card {
          margin-bottom: 1.5rem;
          padding: 1.25rem 1.5rem;
          background: #FEF2F2;
          border: 1px solid #FECACA;
          border-left: 5px solid #DC2626;
          border-radius: var(--radius-lg);
        }

        .seasonal-hazard-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 1rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid #FEE2E2;
        }

        .seasonal-header-left {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .seasonal-title {
          font-size: 0.92rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          color: #991B1B;
          margin: 0;
        }

        .seasonal-subtitle {
          font-size: 0.78rem;
          color: #B91C1C;
          margin: 0.2rem 0 0 0;
        }

        .season-status-pill {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.3rem 0.75rem;
          border-radius: var(--radius-full);
          letter-spacing: 0.05em;
        }

        .season-status-pill.critical {
          background: #F87171;
          color: #FFFFFF;
        }

        .season-status-pill.watch {
          background: #FDE68A;
          color: #92400E;
        }

        .seasonal-hazards-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .seasonal-item-card {
          background: #FFFFFF;
          border: 1px solid #FCA5A5;
          border-radius: var(--radius-md);
          padding: 0.9rem 1.1rem;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .seasonal-item-card.critical {
          border-left: 4px solid #DC2626;
        }

        .seasonal-item-card.high {
          border-left: 4px solid #F59E0B;
        }

        .seasonal-item-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .seasonal-item-title-block {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .hazard-type-badge {
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          background: #FEE2E2;
          color: #991B1B;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
        }

        .hazard-zone-name {
          font-size: 0.88rem;
          color: #1F2937;
        }

        .hazard-highway {
          font-size: 0.75rem;
          color: #6B7280;
        }

        .seasonal-item-recurrence {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.75rem;
        }

        .recurrence-tag {
          font-weight: 700;
          color: #B91C1C;
        }

        .historical-count {
          color: #6B7280;
        }

        .trigger-thresholds-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 0.5rem;
        }

        .trigger-cell {
          padding: 0.5rem 0.75rem;
          border-radius: 6px;
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
          font-size: 0.74rem;
        }

        .trigger-cell.breached {
          background: #FEF2F2;
          border: 1px solid #FECACA;
          color: #991B1B;
        }

        .trigger-cell.normal {
          background: #F9FAFB;
          border: 1px solid #E5E7EB;
          color: #374151;
        }

        .cell-label {
          font-size: 0.68rem;
          text-transform: uppercase;
          font-weight: 600;
          color: #6B7280;
        }

        .cell-val {
          font-weight: 700;
        }

        .cell-status {
          font-size: 0.68rem;
          font-weight: 700;
        }

        .seasonal-advisory-box {
          font-size: 0.78rem;
          color: #991B1B;
          background: #FEF2F2;
          padding: 0.5rem 0.75rem;
          border-radius: 6px;
          line-height: 1.4;
        }

        .historical-precedent {
          font-size: 0.72rem;
          color: #6B7280;
          line-height: 1.35;
        }
      `}</style>
    </div>
  );
}
