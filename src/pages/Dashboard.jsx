import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { useSocket, useSocketStatus } from '../hooks/useSocket';
import { fetchLiveWeather, fetchRiverFloodDischarge } from '../services/weatherService';
import {
  Truck,
  Shield,
  AlertTriangle,
  Radio,
  Clock,
  Compass,
  Zap,
  CheckCircle2,
  XCircle,
  Video,
  RefreshCw,
  Sliders,
  MapPin,
  ChevronRight,
  TrendingUp,
  AlertOctagon,
  CloudRain,
  X
} from 'lucide-react';

// Sample Vehicles for initial display
const INITIAL_VEHICLES = [
  {
    id: '11111111-1111-1111-1111-111111111111',
    reg: 'AS-01-GC-4921',
    model: 'Tata Prima 4x4 Heavy Hauler',
    driver: 'Hemen Kalita',
    status: 'en_route',
    speed: 52.4,
    altitude: 65,
    fuel: 76.5,
    engineTemp: 88,
    battery: 96,
    activeConsignment: 'SN-NER-2026-904',
    lat: 26.1445,
    lng: 91.7362,
  },
  {
    id: '22222222-2222-2222-2222-222222222222',
    reg: 'ML-05-D-8812',
    model: 'Ashok Leyland Mountain Rhino',
    driver: 'Lalrintluanga Mizo',
    status: 'en_route',
    speed: 38.0,
    altitude: 1520,
    fuel: 64.0,
    engineTemp: 91.5,
    battery: 94,
    activeConsignment: 'SN-NER-2026-907',
    lat: 25.5788,
    lng: 91.8933,
  },
  {
    id: '33333333-3333-3333-3333-333333333333',
    reg: 'TR-01-T-3304',
    model: 'Mahindra Furio 11 Express',
    driver: 'Unassigned',
    status: 'available',
    speed: 0.0,
    altitude: 40,
    fuel: 89.0,
    engineTemp: 72,
    battery: 99,
    activeConsignment: null,
    lat: 23.8315,
    lng: 91.2868,
  },
];

// Sample Dashcam Warnings
const INITIAL_INCIDENTS = [
  {
    id: 'inc-01',
    title: 'Major Landslide & Rockfall at Sonapur Tunnel',
    type: 'landslide',
    severity: 'P1',
    highway: 'NH06 (Shillong-Silchar)',
    coords: '25.1378° N, 92.3551° E',
    confidence: 0.965,
    time: '4 mins ago',
    vehicleId: 'AS-01-GC-4921',
    clipUrl: '/uploads/dashcam/sample_landslide_sonapur.mp4',
    geofenceRadiusKm: 25,
    description: '200m rock and mud debris flow blocking both carriage lanes near tunnel portal.',
  },
  {
    id: 'inc-02',
    title: 'Flash Flood Inundation & Debris',
    type: 'flash_flood',
    severity: 'P2',
    highway: 'NH27 (Kaziranga Bypass)',
    coords: '26.5872° N, 93.4112° E',
    confidence: 0.892,
    time: '18 mins ago',
    vehicleId: 'ML-05-D-8812',
    clipUrl: null,
    geofenceRadiusKm: 15,
    description: 'Southern embankment overflow, water level 0.8m over road bed. Diversion active.',
  },
  {
    id: 'inc-03',
    title: 'Fallen Pine Tree & High-Tension Cable',
    type: 'fallen_tree',
    severity: 'P3',
    highway: 'NH10 (Gangtok-Siliguri Corridor)',
    coords: '27.1534° N, 88.5122° E',
    confidence: 0.941,
    time: '35 mins ago',
    vehicleId: 'WB-73-F-1109',
    clipUrl: null,
    geofenceRadiusKm: 10,
    description: 'Single-lane crawl operation managed by BRO highway clearance squad.',
  },
];

export default function Dashboard() {
  // Role-Based Access Control Simulation
  const [activeRole, setActiveRole] = useState('FleetManager'); // 'Admin' | 'FleetManager' | 'Driver'

  // Socket status
  const socketStatus = useSocketStatus();

  // Fleet & Vehicle State
  const [vehicles, setVehicles] = useState(INITIAL_VEHICLES);
  const [selectedVehicleId, setSelectedVehicleId] = useState(INITIAL_VEHICLES[0].id);

  // Incidents State
  const [incidents, setIncidents] = useState(INITIAL_INCIDENTS);
  const [previewClipIncident, setPreviewClipIncident] = useState(null);

  // Delivery Lifecycle State
  const [delivery, setDelivery] = useState({
    id: '55555555-5555-5555-5555-555555555555',
    code: 'SN-NER-2026-904',
    status: 'IN_TRANSIT', // PENDING, IN_TRANSIT, REROUTED, DELIVERED, FAILED
    origin: 'Guwahati Logistics Hub (Amingaon)',
    destination: 'Silchar FMCG Distribution Depot',
    cargo: 'Essential Medical Supplies & Vaccines (7,850 kg)',
    eta: '7h 45m (Via Dynamic ACO Bypass)',
    riskScore: 78.5,
    stops: [
      { order: 1, name: 'Guwahati Amingaon Hub', status: 'reached' },
      { order: 2, name: 'Shillong Meghalaya Depot', status: 'reached' },
      { order: 3, name: 'Sonapur Tunnel Checkpoint', status: 'blocked' },
      { order: 4, name: 'Haflong Eastern Bypass', status: 'pending' },
      { order: 5, name: 'Silchar Distribution Depot', status: 'pending' },
    ],
  });

  const [notificationBanner, setNotificationBanner] = useState(
    'CRITICAL GEOFENCE: 25 km hazard perimeter active around NH06 Sonapur Tunnel due to P1 landslide debris.'
  );

  const [syncStatusMsg, setSyncStatusMsg] = useState(null);
  const [acoLoading, setAcoLoading] = useState(false);
  const [envTelemetry, setEnvTelemetry] = useState({
    weather: null,
    flood: null,
    loading: false
  });

  // Real-time WebSocket subscriptions
  useSocket('telemetry:update', (telemetry) => {
    setVehicles((prev) =>
      prev.map((v) => {
        if (v.id === telemetry.vehicleId) {
          return {
            ...v,
            speed: telemetry.speed,
            altitude: telemetry.altitude,
            fuel: telemetry.fuelPct,
            engineTemp: telemetry.engineTemp,
            battery: telemetry.batteryPct,
            lat: telemetry.lat,
            lng: telemetry.lng,
          };
        }
        return v;
      })
    );
  });

  useSocket('geofence:alert', (alert) => {
    setNotificationBanner(`EMERGENCY: ${alert.title} | ${alert.radiusKm}km Geofence Dispatched.`);
  });

  useSocket('dashcam:alert_processed', (alert) => {
    setIncidents((prev) => [
      {
        id: alert.id,
        title: alert.title,
        type: alert.incidentType,
        severity: alert.severityRating,
        highway: alert.highwayCode,
        coords: `${alert.lat.toFixed(4)}° N, ${alert.lng.toFixed(4)}° E`,
        confidence: alert.confidenceScore || 0.95,
        time: 'Just now',
        vehicleId: alert.vehicleId,
        clipUrl: alert.mediaUrl,
        geofenceRadiusKm: alert.affectedRadiusM ? Math.round(alert.affectedRadiusM / 1000) : 25,
        description: 'Auto-verified by background edge queue worker.',
      },
      ...prev,
    ]);
  });

  useSocket('delivery:status', (data) => {
    setDelivery((prev) => ({
      ...prev,
      status: data.newStatus,
    }));
  });

  // Current selected vehicle
  const currentVehicle = vehicles.find((v) => v.id === selectedVehicleId) || vehicles[0];

  // Fetch real-time environmental radar for current vehicle coordinates
  useEffect(() => {
    let isMounted = true;
    if (currentVehicle?.lat && currentVehicle?.lng) {
      setEnvTelemetry((prev) => ({ ...prev, loading: true }));
      Promise.all([
        fetchLiveWeather(currentVehicle.lat, currentVehicle.lng),
        fetchRiverFloodDischarge(currentVehicle.lat, currentVehicle.lng)
      ])
        .then(([weather, flood]) => {
          if (isMounted) {
            setEnvTelemetry({ weather, flood, loading: false });
          }
        })
        .catch(() => {
          if (isMounted) setEnvTelemetry((prev) => ({ ...prev, loading: false }));
        });
    }
    return () => {
      isMounted = false;
    };
  }, [currentVehicle?.id, currentVehicle?.lat, currentVehicle?.lng]);

  // Lifecycle Status Switcher Handler
  const handleStatusTransition = (newStatus) => {
    // Role permissions check
    if (activeRole === 'Driver' && !['IN_TRANSIT', 'DELIVERED', 'FAILED'].includes(newStatus)) {
      alert("Role 'Driver' can only mark status as IN_TRANSIT or DELIVERED/FAILED.");
      return;
    }

    setDelivery((prev) => ({
      ...prev,
      status: newStatus,
    }));

    setNotificationBanner(`Consignment ${delivery.code} status shifted to ${newStatus}.`);
  };

  // Trigger dynamic Ant Colony Optimization bypass
  const handleAcoRecalculation = () => {
    setAcoLoading(true);
    setTimeout(() => {
      setAcoLoading(false);
      setDelivery((prev) => ({
        ...prev,
        status: 'REROUTED',
        eta: '8h 20m (Bypassing NH06 Sonapur via Nagaon-Haflong NH27)',
        riskScore: 38.0,
      }));
      setNotificationBanner('ACO ROUTING: Optimal bypass computed via Nagaon-Lumding-Haflong corridor.');
    }, 1200);
  };

  // Simulate Dead-Zone Offline Sync (Idempotency demonstration)
  const handleSimulateDeadZoneSync = () => {
    setSyncStatusMsg('Syncing buffered dead-zone telemetry (34 logs)...');
    setTimeout(() => {
      setSyncStatusMsg('✅ 34 logs ingested. Idempotency Key verified: 0 duplicates.');
      setTimeout(() => setSyncStatusMsg(null), 4000);
    }, 1400);
  };

  return (
    <div className="dashboard-root">
      {/* 1. TOP CONTROL BAR */}
      <header className="dashboard-topbar">
        <div className="topbar-brand">
          <div className="topbar-brand-icon">
            <Radio size={22} />
          </div>
          <div>
            <h1 className="topbar-title">SafarNama Intelligence Tower</h1>
            <p className="topbar-subtitle">North Eastern Region Logistics Control & Telemetry</p>
          </div>
        </div>

        <div className="topbar-controls">
          {/* Active Role Selector */}
          <div className="role-badge-group">
            <span style={{ fontSize: '0.72rem', color: '#64748b', marginRight: '4px', fontWeight: 700 }}>
              ROLE:
            </span>
            {['FleetManager', 'Admin', 'Driver'].map((role) => (
              <button
                key={role}
                className={`role-btn ${activeRole === role ? 'active' : ''}`}
                onClick={() => setActiveRole(role)}
              >
                {role}
              </button>
            ))}
          </div>

          {/* Connection Pill */}
          <div className={`connection-pill ${socketStatus.connected ? 'live' : 'simulated'}`}>
            <span className="status-dot"></span>
            <span>{socketStatus.connected ? 'STREAMING' : 'CONNECTING...'}</span>
          </div>
        </div>
      </header>

      {/* 2. REAL-TIME SYSTEM ALERTS TICKER */}
      <section className="alerts-ticker-strip">
        <div className="ticker-label">
          <AlertOctagon size={13} />
          <span>LIVE NER RADAR</span>
        </div>
        <div className="ticker-content">
          <span className="ticker-text">{notificationBanner}</span>
        </div>
      </section>

      {/* 3. KPI METRICS STRIP */}
      <section className="kpi-grid">
        <div className="kpi-card">
          <div className="kpi-info">
            <h4>Active Fleet Vehicles</h4>
            <div className="kpi-val">{vehicles.length} Units</div>
            <span className="kpi-meta">100% telemetry synced</span>
          </div>
          <div className="kpi-icon-wrap kpi-icon-teal">
            <Truck size={22} />
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-info">
            <h4>Active Disruptions</h4>
            <div className="kpi-val">{incidents.length} Hazards</div>
            <span className="kpi-meta">1 P1 Critical, 1 P2 Flooding</span>
          </div>
          <div className="kpi-icon-wrap kpi-icon-red">
            <AlertTriangle size={22} />
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-info">
            <h4>ACO Optimized Corridors</h4>
            <div className="kpi-val">12 Corridors</div>
            <span className="kpi-meta">NH27, NH06, NH29, NH08 active</span>
          </div>
          <div className="kpi-icon-wrap kpi-icon-gold">
            <Compass size={22} />
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-info">
            <h4>Consignment Safety</h4>
            <div className="kpi-val">98.4%</div>
            <span className="kpi-meta">Zero dead-zone loss</span>
          </div>
          <div className="kpi-icon-wrap kpi-icon-sage">
            <Shield size={22} />
          </div>
        </div>
      </section>

      {/* 4. MAIN 3-COLUMN OPERATIONAL GRID */}
      <main className="dashboard-grid-3">
        {/* ================================================================= */}
        {/* COLUMN 1: LIVE VEHICLE TELEMETRY PANEL                            */}
        {/* ================================================================= */}
        <div className="dash-panel">
          <div className="panel-header">
            <h3 className="panel-title">
              <Truck size={17} />
              <span>Live Vehicle Telemetry</span>
            </h3>
            <span className="panel-action-link">Telemetry Ping: 3s</span>
          </div>

          {/* Vehicle Selector Strip */}
          <div className="vehicle-selector-strip">
            {vehicles.map((v) => (
              <button
                key={v.id}
                className={`vehicle-tab ${v.id === selectedVehicleId ? 'active' : ''}`}
                onClick={() => setSelectedVehicleId(v.id)}
              >
                {v.reg}
              </button>
            ))}
          </div>

          {/* Vehicle Hero Card */}
          <div className="vehicle-hero-card">
            <div className="vehicle-hero-top">
              <div>
                <div className="v-reg">{currentVehicle.reg}</div>
                <div className="v-model">{currentVehicle.model}</div>
              </div>
              <span className={`v-status-badge ${currentVehicle.status}`}>
                {currentVehicle.status}
              </span>
            </div>

            <div className="v-driver-meta">
              <span>Driver: <strong>{currentVehicle.driver}</strong></span>
              <span>• GPS: {currentVehicle.lat.toFixed(3)}, {currentVehicle.lng.toFixed(3)}</span>
            </div>

            {/* Telemetry Dials & Metrics */}
            <div className="telemetry-metrics-grid">
              <div className="t-metric-box">
                <div className="t-metric-lbl">Speed</div>
                <div className="t-metric-val">{currentVehicle.speed} <span>km/h</span></div>
              </div>

              <div className="t-metric-box">
                <div className="t-metric-lbl">Ghat Altitude</div>
                <div className="t-metric-val">{currentVehicle.altitude} <span>meters</span></div>
              </div>

              <div className="t-metric-box">
                <div className="t-metric-lbl">Fuel Tank</div>
                <div className="t-metric-val">{currentVehicle.fuel}%</div>
                <div className="bar-track">
                  <div className="bar-fill fuel" style={{ width: `${currentVehicle.fuel}%` }}></div>
                </div>
              </div>

              <div className="t-metric-box">
                <div className="t-metric-lbl">Engine Temp</div>
                <div className="t-metric-val">{currentVehicle.engineTemp}° <span>C</span></div>
                <div className="bar-track">
                  <div className="bar-fill battery" style={{ width: `${Math.min(currentVehicle.engineTemp, 100)}%` }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Consignment Assigned */}
          <div style={{ background: '#f7f4ec', padding: '0.75rem', borderRadius: '8px', fontSize: '0.78rem' }}>
            <div style={{ color: '#64748b', marginBottom: '4px' }}>ACTIVE ASSIGNMENT:</div>
            <strong style={{ color: '#0f4c4c' }}>{currentVehicle.activeConsignment || 'No active trip assigned'}</strong>
          </div>

          {/* Real-time Environmental & Copernicus GloFAS River Radar */}
          {envTelemetry.weather && (
            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', padding: '0.75rem', borderRadius: '8px', fontSize: '0.78rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ color: '#15803d', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <CloudRain size={13} />
                  LIVE TERRAIN & RIVER RADAR
                </span>
                <span style={{ fontSize: '0.68rem', color: '#166534', background: '#dcfce7', padding: '2px 6px', borderRadius: '4px', fontWeight: 600 }}>
                  Open-Meteo & GloFAS
                </span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', color: '#14532d', lineHeight: '1.4' }}>
                <div>Weather: <strong>{envTelemetry.weather.temp}°C, {envTelemetry.weather.condition}</strong></div>
                <div>Precipitation: <strong>{envTelemetry.weather.precipitation} mm</strong></div>
                <div>Soil Moisture: <strong>{envTelemetry.weather.soilMoisturePct}%</strong></div>
                {envTelemetry.flood && (
                  <div>River Runoff: <strong>{envTelemetry.flood.currentDischargeM3s} m³/s</strong> ({envTelemetry.flood.floodRisk})</div>
                )}
              </div>
            </div>
          )}

          {/* Dead-Zone Sync Button */}
          <button className="btn-deadzone-sync" onClick={handleSimulateDeadZoneSync}>
            <RefreshCw size={14} />
            <span>Simulate Dead-Zone Batch Ingestion</span>
          </button>
          {syncStatusMsg && (
            <div style={{ fontSize: '0.75rem', color: '#15803d', fontWeight: 600, textAlign: 'center' }}>
              {syncStatusMsg}
            </div>
          )}
        </div>

        {/* ================================================================= */}
        {/* COLUMN 2: INTERACTIVE DASHCAM INCIDENT MONITOR                    */}
        {/* ================================================================= */}
        <div className="dash-panel">
          <div className="panel-header">
            <h3 className="panel-title">
              <Video size={17} />
              <span>Interactive Incident & Dashcam Monitor</span>
            </h3>
            <span className="panel-action-link">{incidents.length} Active Alerts</span>
          </div>

          <div className="incident-feed-container">
            {incidents.map((incident) => (
              <div key={incident.id} className="incident-card">
                <div className="incident-card-top">
                  <span className={`severity-badge ${incident.severity.toLowerCase()}`}>
                    {incident.severity} • {incident.type.toUpperCase().replace('_', ' ')}
                  </span>
                  <span className="incident-time">
                    <Clock size={11} />
                    {incident.time}
                  </span>
                </div>

                <h4 className="incident-title">{incident.title}</h4>

                <div className="incident-meta">
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <MapPin size={12} color="#c6a15b" />
                    <strong>{incident.highway}</strong>
                  </span>
                  <span>Coords: {incident.coords}</span>
                </div>

                <p style={{ fontSize: '0.78rem', color: '#4a5858', margin: 0 }}>
                  {incident.description}
                </p>

                <div className="incident-ai-meter">
                  <span>Edge AI Model Confidence:</span>
                  <strong style={{ color: '#0f4c4c' }}>{Math.round(incident.confidence * 100)}%</strong>
                </div>

                <button
                  className="btn-preview-clip"
                  onClick={() => setPreviewClipIncident(incident)}
                >
                  <Video size={13} />
                  <span>Inspect Dashcam Video Clip (5s)</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ================================================================= */}
        {/* COLUMN 3: DELIVERY TIMELINE & STATUS SWITCHER                     */}
        {/* ================================================================= */}
        <div className="dash-panel">
          <div className="panel-header">
            <h3 className="panel-title">
              <Compass size={17} />
              <span>Consignment & Route Lifecycle</span>
            </h3>
            <span className="panel-action-link">RBAC: {activeRole}</span>
          </div>

          {/* Consignment Summary Card */}
          <div className="consignment-card">
            <div className="consignment-code">{delivery.code}</div>
            <div className="consignment-cargo">{delivery.cargo}</div>
            <div style={{ fontSize: '0.75rem', color: '#0f4c4c', fontWeight: 600 }}>
              ETA: {delivery.eta}
            </div>
            <div style={{ fontSize: '0.72rem', color: delivery.riskScore > 50 ? '#dc2626' : '#15803d', marginTop: '2px' }}>
              Terrain Risk Index: {delivery.riskScore}/100
            </div>
          </div>

          {/* Strict State Machine Status Switcher */}
          <div className="status-switcher-block">
            <div className="switcher-label">Lifecycle State Switcher:</div>
            <div className="status-button-row">
              {['PENDING', 'IN_TRANSIT', 'REROUTED', 'DELIVERED'].map((st) => (
                <button
                  key={st}
                  className={`status-opt-btn ${delivery.status === st ? 'current' : ''}`}
                  onClick={() => handleStatusTransition(st)}
                >
                  {st}
                </button>
              ))}
            </div>
            <button
              className={`status-opt-btn danger ${delivery.status === 'FAILED' ? 'current' : ''}`}
              style={{ marginTop: '4px' }}
              onClick={() => handleStatusTransition('FAILED')}
            >
              FAIL CONSIGNMENT
            </button>
          </div>

          {/* Dynamic ACO Recalculation Button */}
          <button
            className="btn-recalculate-aco"
            onClick={handleAcoRecalculation}
            disabled={acoLoading}
          >
            <Compass size={15} />
            <span>{acoLoading ? 'Computing ACO Pheromones...' : 'Recalculate Dynamic ACO Route'}</span>
          </button>

          {/* Multi-stop Corridor Timeline */}
          <div className="timeline-list">
            {delivery.stops.map((stop) => (
              <div
                key={stop.order}
                className={`timeline-item ${stop.status === 'reached' ? 'reached' : stop.status === 'blocked' ? 'active' : ''}`}
              >
                <div className="timeline-dot">
                  {stop.status === 'reached' ? '✓' : stop.status === 'blocked' ? '!' : stop.order}
                </div>
                <div className="timeline-text">
                  <h5>{stop.name}</h5>
                  <span>
                    {stop.status === 'reached'
                      ? 'Waypoint Cleared'
                      : stop.status === 'blocked'
                      ? 'HAZARD BLOCKED (Sonapur)'
                      : 'Pending Dispatch'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* 5. DASHCAM VIDEO INSPECTION MODAL */}
      {previewClipIncident && (
        <div className="modal-overlay" onClick={() => setPreviewClipIncident(null)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-head">
              <h3>Dashcam Incident Review: {previewClipIncident.title}</h3>
              <button className="modal-close-btn" onClick={() => setPreviewClipIncident(null)}>
                <X size={18} />
              </button>
            </div>

            <div className="modal-body">
              <div className="video-frame-container">
                <div className="video-placeholder-hud">
                  <Video size={42} color="#38bdf8" style={{ marginBottom: '8px' }} />
                  <div style={{ fontWeight: 700, letterSpacing: '0.05em' }}>
                    [EDGE DASHCAM 5-SEC LOOP TELEMETRY]
                  </div>
                  <div className="hud-tag">
                    LOC: {previewClipIncident.coords} | SPEED: 41 KM/H | SENSOR: CAM_FRONT_01
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '6px' }}>
                    Edge AI Confidence Score: {Math.round(previewClipIncident.confidence * 100)}%
                  </div>
                </div>
              </div>

              <div style={{ fontSize: '0.82rem', lineHeight: '1.4' }}>
                <p><strong>Incident Type:</strong> {previewClipIncident.type.toUpperCase()}</p>
                <p><strong>Highway Corridor:</strong> {previewClipIncident.highway}</p>
                <p><strong>Geofence Action:</strong> 25 km emergency perimeter broadcasted to fleet drivers.</p>
              </div>

              <button
                className="btn-recalculate-aco"
                onClick={() => {
                  setPreviewClipIncident(null);
                  handleAcoRecalculation();
                }}
              >
                <span>Acknowledge & Trigger Route Recalculation</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
