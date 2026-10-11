import React, { useState } from 'react';
import RouteAnalysis from '../components/RouteAnalysis';
import { calculateRouteAnalysis, getAvailableHubs, AI_ANALYSIS_STEPS } from '../services/routeService';
import { demoRoutesData } from '../data/demoRoutes';
import { Navigation, ArrowRight, Sparkles, MapPin, RefreshCw, Cpu, Layers, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function RouteAI() {
  const hubs = getAvailableHubs();
  const [fromHub, setFromHub] = useState('Guwahati');
  const [toHub, setToHub] = useState('Tawang');
  const [travelMonth, setTravelMonth] = useState(7); // Default to July (Peak Monsoon) to demonstrate predictive AI

  // Route calculation state
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(0);
  const [analysisComplete, setAnalysisComplete] = useState(true); // Default true so demo is visible right away
  const [routeData, setRouteData] = useState(demoRoutesData['guwahati-tawang']);

  const handleAnalyzeRoute = async () => {
    setIsAnalyzing(true);
    setAnalysisComplete(false);
    setAnalysisStep(0);

    const plannedDate = new Date(2026, travelMonth - 1, 15);
    // Start live API routing, DEM elevation & seasonal hazard analysis immediately
    const apiPromise = calculateRouteAnalysis(fromHub, toHub, plannedDate);

    // Step-by-step sequential animation with Framer Motion
    for (let i = 0; i < AI_ANALYSIS_STEPS.length; i++) {
      setAnalysisStep(i);
      await new Promise((resolve) => setTimeout(resolve, 650));
    }

    // Await computed route data from live APIs
    const res = await apiPromise;
    setRouteData(res);
    setIsAnalyzing(false);
    setAnalysisComplete(true);
  };

  const handleSwap = () => {
    const temp = fromHub;
    setFromHub(toHub);
    setToHub(temp);
  };

  return (
    <div className="page-route-ai">
      <div className="container">
        {/* Header Section */}
        <div className="route-ai-header">
          <span className="section-tag">Autonomous Geospatial Routing</span>
          <h1 className="section-title font-serif">AI Route Intelligence</h1>
          <p className="section-subtitle">
            Find safer, faster and more resilient routes across challenging NER terrain.
          </p>
        </div>

        {/* Input Query Bar */}
        <div className="route-query-card card">
          <div className="query-inputs-row">
            {/* Origin Input */}
            <div className="input-group">
              <label className="input-label">
                <MapPin size={14} className="text-teal" />
                <span>Origin (From)</span>
              </label>
              <select
                value={fromHub}
                onChange={(e) => setFromHub(e.target.value)}
                className="hub-select font-serif"
                disabled={isAnalyzing}
              >
                {hubs.map((hub) => (
                  <option key={hub.id} value={hub.name}>
                    {hub.name} ({hub.state})
                  </option>
                ))}
              </select>
            </div>

            {/* Hub Swap / Arrow Icon */}
            <div className="swap-button-wrap">
              <button
                type="button"
                className="btn-swap"
                onClick={handleSwap}
                disabled={isAnalyzing}
                title="Swap Origin and Destination"
              >
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Destination Input */}
            <div className="input-group">
              <label className="input-label">
                <MapPin size={14} className="text-gold" />
                <span>Destination (To)</span>
              </label>
              <select
                value={toHub}
                onChange={(e) => setToHub(e.target.value)}
                className="hub-select font-serif"
                disabled={isAnalyzing}
              >
                {hubs.map((hub) => (
                  <option key={hub.id} value={hub.name}>
                    {hub.name} ({hub.state})
                  </option>
                ))}
              </select>
            </div>

            {/* Travel Season Simulator Input */}
            <div className="input-group">
              <label className="input-label">
                <Calendar size={14} className="text-teal" />
                <span>Travel Season</span>
              </label>
              <select
                value={travelMonth}
                onChange={(e) => setTravelMonth(Number(e.target.value))}
                className="hub-select font-serif"
                disabled={isAnalyzing}
              >
                <option value={7}>July (Monsoon Peak - Max Landslides)</option>
                <option value={8}>August (Heavy Rain & River Floods)</option>
                <option value={9}>September (Late Monsoon / Current)</option>
                <option value={10}>October (Autumn Post-Monsoon)</option>
                <option value={1}>January (Dry Winter Baseline)</option>
                <option value={5}>May (Pre-Monsoon Squalls)</option>
              </select>
            </div>

            {/* Analyze Route Button */}
            <div className="query-action-wrap">
              <button
                className="btn btn-primary btn-analyze"
                onClick={handleAnalyzeRoute}
                disabled={isAnalyzing}
              >
                {isAnalyzing ? (
                  <>
                    <RefreshCw size={17} className="animate-spin" />
                    <span>Analyzing Terrain...</span>
                  </>
                ) : (
                  <>
                    <Sparkles size={17} className="text-gold" />
                    <span>Analyze Route</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Quick Presets Strip */}
          <div className="presets-strip">
            <span className="presets-lbl">NER Corridors:</span>
            <button
              className={`preset-btn ${fromHub === 'Guwahati' && toHub === 'Tawang' ? 'active' : ''}`}
              onClick={() => { setFromHub('Guwahati'); setToHub('Tawang'); }}
            >
              Guwahati ⇄ Tawang (NH-13)
            </button>
            <button
              className={`preset-btn ${fromHub === 'Guwahati' && toHub === 'Shillong' ? 'active' : ''}`}
              onClick={() => { setFromHub('Guwahati'); setToHub('Shillong'); }}
            >
              Guwahati ⇄ Shillong (NH-06)
            </button>
            <button
              className={`preset-btn ${fromHub === 'Shillong' && toHub === 'Silchar' ? 'active' : ''}`}
              onClick={() => { setFromHub('Shillong'); setToHub('Silchar'); }}
            >
              Shillong ⇄ Silchar (Sonapur)
            </button>
            <button
              className={`preset-btn ${fromHub === 'Silchar' && toHub === 'Imphal' ? 'active' : ''}`}
              onClick={() => { setFromHub('Silchar'); setToHub('Imphal'); }}
            >
              Silchar ⇄ Imphal (NH-37)
            </button>
            <button
              className={`preset-btn ${fromHub === 'Kohima' && toHub === 'Imphal' ? 'active' : ''}`}
              onClick={() => { setFromHub('Kohima'); setToHub('Imphal'); }}
            >
              Kohima ⇄ Imphal (NH-02)
            </button>
          </div>
        </div>

        {/* Dynamic Route Analysis & Comparative Visualizer */}
        <RouteAnalysis
          routeData={routeData}
          isAnalyzing={isAnalyzing}
          analysisStep={analysisStep}
          analysisComplete={analysisComplete}
        />
      </div>

      <style>{`
        .page-route-ai {
          padding: 2.5rem 0 4rem 0;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .route-ai-header {
          text-align: center;
          max-width: 760px;
          margin: 0 auto;
        }

        .route-query-card {
          padding: 1.75rem 2rem;
          background: var(--color-white);
          border-radius: var(--radius-xl);
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          box-shadow: var(--shadow-md);
        }

        .query-inputs-row {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto;
          align-items: flex-end;
          gap: 1.25rem;
        }

        @media (max-width: 860px) {
          .query-inputs-row {
            grid-template-columns: 1fr;
          }
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .input-label {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--color-charcoal-muted);
        }

        .hub-select {
          padding: 0.85rem 1.15rem;
          border-radius: var(--radius-md);
          border: 1.5px solid var(--color-border);
          background: var(--color-ivory-light);
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-teal);
          outline: none;
          transition: all 0.2s ease;
          width: 100%;
        }

        .hub-select:focus {
          border-color: var(--color-teal);
          background: var(--color-white);
          box-shadow: 0 0 0 3px rgba(15, 76, 76, 0.12);
        }

        .swap-button-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          padding-bottom: 0.5rem;
        }

        .btn-swap {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: var(--color-ivory);
          color: var(--color-teal);
          border: 1px solid var(--color-border);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .btn-swap:hover {
          background: var(--color-teal);
          color: var(--color-white);
          transform: rotate(180deg);
        }

        .query-action-wrap {
          display: flex;
          align-items: flex-end;
        }

        .btn-analyze {
          padding: 0.88rem 2rem;
          font-size: 1.02rem;
          height: 52px;
          width: 100%;
        }

        .animate-spin {
          animation: spin 1s linear infinite;
        }

        .presets-strip {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          flex-wrap: wrap;
          padding-top: 0.75rem;
          border-top: 1px dashed rgba(24, 37, 37, 0.08);
        }

        .presets-lbl {
          font-size: 0.76rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--color-charcoal-light);
          letter-spacing: 0.05em;
        }

        .preset-btn {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--color-charcoal-muted);
          background: var(--color-ivory);
          border: 1px solid var(--color-border);
          padding: 0.3rem 0.75rem;
          border-radius: var(--radius-full);
          transition: all 0.2s ease;
        }

        .preset-btn:hover {
          color: var(--color-teal);
          border-color: var(--color-teal);
        }

        .preset-btn.active {
          background: var(--status-safe-soft);
          color: var(--color-teal);
          border-color: var(--color-teal);
          font-weight: 700;
        }
      `}</style>
    </div>
  );
}
