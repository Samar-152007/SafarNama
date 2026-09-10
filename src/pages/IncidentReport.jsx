import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import {
  UploadCloud,
  CheckCircle2,
  AlertTriangle,
  Camera,
  MapPin,
  Sparkles,
  ArrowRight,
  RefreshCw,
  ShieldAlert,
  Info,
  Layers,
  FileCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { simulateAIVisionAnalysis, addIncident } from '../services/incidentService';

export default function IncidentReport() {
  const navigate = useNavigate();

  // Form State
  const [imagePreview, setImagePreview] = useState(null);
  const [incidentType, setIncidentType] = useState('Landslide');
  const [description, setDescription] = useState('');
  const [highway, setHighway] = useState('NH-29 (Kohima-Dimapur corridor)');
  const [state, setState] = useState('Nagaland');
  const [locationCoords, setLocationCoords] = useState('25.7511, 93.9217');

  // AI Vision state
  const [isAnalyzingVision, setIsAnalyzingVision] = useState(false);
  const [visionResults, setVisionResults] = useState(null);

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedIncident, setSubmittedIncident] = useState(null);

  const incidentTypes = [
    'Landslide',
    'Flood',
    'Road Blockage',
    'Road Damage',
    'Accident',
    'Other'
  ];

  const states = [
    'Assam',
    'Arunachal Pradesh',
    'Meghalaya',
    'Nagaland',
    'Manipur',
    'Mizoram',
    'Tripura',
    'Sikkim'
  ];

  // Load sample image
  const handleLoadSample = async () => {
    const sampleUrl = '/images/ner_landslide_incident.jpg';
    setImagePreview(sampleUrl);
    await triggerVisionScan(sampleUrl, incidentType);
  };

  // Handle local file upload
  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async () => {
      const dataUrl = reader.result;
      setImagePreview(dataUrl);
      await triggerVisionScan(dataUrl, incidentType);
    };
    reader.readAsDataURL(file);
  };

  const triggerVisionScan = async (img, type) => {
    setIsAnalyzingVision(true);
    setVisionResults(null);

    const result = await simulateAIVisionAnalysis(img, type);
    setVisionResults(result);
    setIsAnalyzingVision(false);
  };

  const handleTypeChange = (newType) => {
    setIncidentType(newType);
    if (imagePreview) {
      triggerVisionScan(imagePreview, newType);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const coords = locationCoords.split(',').map((c) => parseFloat(c.trim()));
    const lat = isNaN(coords[0]) ? 26.2 : coords[0];
    const lng = isNaN(coords[1]) ? 92.8 : coords[1];

    const report = {
      type: incidentType,
      title: `${incidentType.toUpperCase()} ALERT — ${highway}`,
      highway,
      state,
      lat,
      lng,
      riskScore: visionResults ? visionResults.riskScore : 87,
      severity: visionResults ? visionResults.severity : 'HIGH',
      clearanceTime: '6–12 hours',
      recommendation: visionResults ? visionResults.recommendation : 'Immediate route reassessment required.',
      description: description || 'Severe road obstruction observed in mountain sector.',
      imageUrl: imagePreview
    };

    const created = addIncident(report);
    setSubmittedIncident(created);
    setIsSubmitting(false);

    // Confetti celebration
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#0F4C4C', '#6F8F72', '#C6A15B']
    });
  };

  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLocationCoords(`${pos.coords.latitude.toFixed(4)}, ${pos.coords.longitude.toFixed(4)}`);
        },
        () => {
          setLocationCoords('25.7511, 93.9217');
        }
      );
    }
  };

  return (
    <div className="page-incident-report">
      <div className="container">
        {/* Header */}
        <div className="report-header">
          <span className="section-tag">Crowdsourced Logistics Intelligence</span>
          <h1 className="section-title font-serif">Report a Disruption</h1>
          <p className="section-subtitle">
            Upload incident photos from field convoys. SafarNama AI detects obstacle dimensions, predicts clearance times, and alerts incoming freight.
          </p>
        </div>

        {/* Success Modal / Banner if Submitted */}
        {submittedIncident && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="success-banner card"
          >
            <div className="success-icon-box">
              <CheckCircle2 size={32} className="text-sage" />
            </div>
            <div className="success-text">
              <h3 className="success-title font-serif">Incident Dispatched to Active Intelligence Feed!</h3>
              <p className="success-desc">
                Your report for <strong>{submittedIncident.highway}</strong> ({submittedIncident.state}) has been calibrated with risk score <strong>{submittedIncident.riskScore}/100</strong> and is now visible on the live regional map.
              </p>
            </div>
            <div className="success-actions">
              <button
                className="btn btn-primary"
                onClick={() => navigate('/dashboard')}
              >
                <span>View on Dashboard Map</span>
                <ArrowRight size={16} />
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  setSubmittedIncident(null);
                  setImagePreview(null);
                  setVisionResults(null);
                  setDescription('');
                }}
              >
                Report Another
              </button>
            </div>
          </motion.div>
        )}

        {/* Main Grid: Form on Left, Vision Scanner on Right */}
        <div className="report-layout-grid">
          {/* Left: Input Form */}
          <div className="form-card card">
            <h3 className="form-title font-serif">Disruption Details</h3>
            <p className="form-desc">Provide ground observations for the NER logistics mesh.</p>

            <form onSubmit={handleSubmit} className="report-form">
              {/* Image Upload Box */}
              <div className="form-group">
                <label className="form-label">Road Incident Imagery</label>
                <div className="upload-dropzone">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    id="incident-file-input"
                    className="file-input-hidden"
                  />

                  {imagePreview ? (
                    <div className="preview-container">
                      <img
                        src={imagePreview}
                        alt="Road incident preview"
                        className="preview-img"
                      />
                      <label htmlFor="incident-file-input" className="change-img-btn">
                        <Camera size={14} />
                        <span>Change Photo</span>
                      </label>
                    </div>
                  ) : (
                    <label htmlFor="incident-file-input" className="dropzone-label">
                      <UploadCloud size={36} className="upload-icon" />
                      <span className="upload-primary-text">Click to upload photo or drag & drop</span>
                      <span className="upload-subtext">JPG, PNG or WEBP from field mobile camera</span>
                    </label>
                  )}
                </div>

                {/* Instant Sample Button */}
                <div className="sample-btn-strip">
                  <button
                    type="button"
                    className="btn-sample"
                    onClick={handleLoadSample}
                  >
                    <Sparkles size={14} className="text-gold" />
                    <span>Load NER Landslide Sample Photo</span>
                  </button>
                </div>
              </div>

              {/* Incident Type Select */}
              <div className="form-group">
                <label className="form-label">Incident Type</label>
                <div className="type-buttons-grid">
                  {incidentTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      className={`type-btn ${incidentType === type ? 'active' : ''}`}
                      onClick={() => handleTypeChange(type)}
                    >
                      <span>{type}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* State & Highway Row */}
              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label">State</label>
                  <select
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="form-select"
                  >
                    {states.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Highway / Sector</label>
                  <input
                    type="text"
                    value={highway}
                    onChange={(e) => setHighway(e.target.value)}
                    placeholder="e.g. NH-29 Pagala Pahar"
                    className="form-input"
                    required
                  />
                </div>
              </div>

              {/* Location Coordinates & Auto Detect */}
              <div className="form-group">
                <div className="label-with-action">
                  <label className="form-label">GPS Coordinates (Lat, Long)</label>
                  <button
                    type="button"
                    className="btn-locate"
                    onClick={handleUseCurrentLocation}
                  >
                    <MapPin size={12} />
                    <span>Auto-Detect Location</span>
                  </button>
                </div>
                <input
                  type="text"
                  value={locationCoords}
                  onChange={(e) => setLocationCoords(e.target.value)}
                  placeholder="25.7511, 93.9217"
                  className="form-input"
                  required
                />
              </div>

              {/* Description */}
              <div className="form-group">
                <label className="form-label">Field Description</label>
                <textarea
                  rows="3"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe road blockage width, whether passenger or freight vehicles can squeeze through, ongoing rain, etc."
                  className="form-textarea"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary btn-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw size={17} className="animate-spin" />
                    <span>Broadcasting Alert...</span>
                  </>
                ) : (
                  <>
                    <FileCheck size={17} />
                    <span>Submit Incident to SafarNama Mesh</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right: Simulated AI Vision Analysis Panel */}
          <div className="vision-panel-wrapper">
            <div className="vision-card card">
              <div className="vision-header">
                <div className="vision-title-wrap">
                  <div className="ai-chip">AI</div>
                  <h3 className="vision-title font-serif">Simulated AI Vision Analysis</h3>
                </div>
                <span className="prototype-badge">PROTOTYPE DEMO</span>
              </div>

              <p className="vision-intro">
                Demonstrates edge-inferencing model analyzing road structural failures from uploaded field imagery.
              </p>

              {/* Scanning State */}
              {isAnalyzingVision && (
                <div className="vision-scanning-box">
                  <div className="radar-sweep-box">
                    <div className="radar-line"></div>
                    <RefreshCw size={28} className="animate-spin text-teal" />
                  </div>
                  <span className="scanning-text">Analyzing road image...</span>
                  <span className="scanning-sub">Running segmentation & fissure depth estimation</span>
                </div>
              )}

              {/* Analysis Completed State */}
              {visionResults && !isAnalyzingVision && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="vision-results-content"
                >
                  <div className="vision-stat-row">
                    <div className="stat-pill">
                      <span className="pill-lbl">Detected</span>
                      <strong className="pill-val text-teal">{visionResults.detected}</strong>
                    </div>
                    <div className="stat-pill">
                      <span className="pill-lbl">Severity</span>
                      <span className="badge badge-critical">{visionResults.severity}</span>
                    </div>
                    <div className="stat-pill">
                      <span className="pill-lbl">Risk Score</span>
                      <strong className="pill-val font-serif text-critical">{visionResults.riskScore}/100</strong>
                    </div>
                  </div>

                  <div className="confidence-strip">
                    <span className="conf-lbl">Model Confidence:</span>
                    <div className="conf-bar-track">
                      <div className="conf-bar-fill" style={{ width: `${visionResults.confidence}%` }}></div>
                    </div>
                    <span className="conf-val">{visionResults.confidence}%</span>
                  </div>

                  <div className="defects-box">
                    <span className="defects-title">Detected Structural Anomalies:</span>
                    <ul className="defects-list">
                      {visionResults.visualDefects?.map((defect, i) => (
                        <li key={i}>
                          <AlertTriangle size={12} className="text-gold" />
                          <span>{defect}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rec-box">
                    <div className="rec-hdr">
                      <Sparkles size={14} className="text-gold" />
                      <span>Recommendation</span>
                    </div>
                    <p className="rec-text">{visionResults.recommendation}</p>
                  </div>

                  <div className="demo-disclaimer">
                    <Info size={13} className="info-icon" />
                    <span>{visionResults.disclaimer}</span>
                  </div>
                </motion.div>
              )}

              {/* Idle State when no image uploaded */}
              {!imagePreview && !isAnalyzingVision && !visionResults && (
                <div className="vision-idle-state">
                  <Camera size={38} className="idle-icon" />
                  <p className="idle-text">
                    Upload a road photo or click <strong>"Load NER Landslide Sample Photo"</strong> to activate simulated computer vision inspection.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .page-incident-report {
          padding: 2.5rem 0 4rem 0;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .report-header {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 1rem auto;
        }

        .success-banner {
          background: var(--status-safe-soft);
          border: 1.5px solid var(--color-teal);
          padding: 1.75rem;
          border-radius: var(--radius-xl);
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .success-icon-box {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: var(--color-white);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .text-sage {
          color: var(--color-sage);
        }

        .success-text {
          flex: 1;
          min-width: 260px;
        }

        .success-title {
          font-size: 1.25rem;
          color: var(--color-teal);
          margin-bottom: 0.25rem;
        }

        .success-desc {
          font-size: 0.88rem;
          color: var(--color-charcoal-muted);
        }

        .success-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .report-layout-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 2rem;
          align-items: start;
        }

        @media (max-width: 960px) {
          .report-layout-grid {
            grid-template-columns: 1fr;
          }
        }

        .form-card {
          padding: 2rem;
          background: var(--color-white);
          border-radius: var(--radius-xl);
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-title {
          font-size: 1.35rem;
          color: var(--color-teal);
        }

        .form-desc {
          font-size: 0.86rem;
          color: var(--color-charcoal-muted);
          margin-top: -0.8rem;
        }

        .report-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .form-label {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-charcoal);
          letter-spacing: 0.02em;
        }

        .label-with-action {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .btn-locate {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-teal);
        }

        .btn-locate:hover {
          text-decoration: underline;
        }

        .file-input-hidden {
          display: none;
        }

        .upload-dropzone {
          border: 2px dashed var(--color-border);
          border-radius: var(--radius-lg);
          background: var(--color-ivory-light);
          padding: 1.5rem;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .upload-dropzone:hover {
          border-color: var(--color-teal);
          background: var(--color-white);
        }

        .dropzone-label {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
        }

        .upload-icon {
          color: var(--color-sage);
        }

        .upload-primary-text {
          font-weight: 600;
          font-size: 0.92rem;
          color: var(--color-teal);
        }

        .upload-subtext {
          font-size: 0.78rem;
          color: var(--color-charcoal-light);
        }

        .preview-container {
          position: relative;
          max-height: 220px;
          border-radius: var(--radius-md);
          overflow: hidden;
        }

        .preview-img {
          width: 100%;
          height: 100%;
          max-height: 220px;
          object-fit: cover;
          display: block;
        }

        .change-img-btn {
          position: absolute;
          bottom: 0.75rem;
          right: 0.75rem;
          background: rgba(15, 76, 76, 0.9);
          color: var(--color-white);
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          cursor: pointer;
        }

        .sample-btn-strip {
          margin-top: 0.25rem;
        }

        .btn-sample {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--color-teal);
          background: var(--color-ivory);
          border: 1px solid var(--color-border);
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-full);
          transition: all 0.2s ease;
        }

        .btn-sample:hover {
          background: var(--color-ivory-dark);
        }

        .type-buttons-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.5rem;
        }

        @media (max-width: 480px) {
          .type-buttons-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .type-btn {
          padding: 0.55rem 0.75rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
          background: var(--color-ivory);
          color: var(--color-charcoal);
          font-size: 0.82rem;
          font-weight: 600;
          transition: all 0.2s ease;
        }

        .type-btn:hover {
          border-color: var(--color-teal);
        }

        .type-btn.active {
          background: var(--color-teal);
          color: var(--color-white);
          border-color: var(--color-teal);
        }

        .form-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        @media (max-width: 600px) {
          .form-row-2 {
            grid-template-columns: 1fr;
          }
        }

        .form-input, .form-select, .form-textarea {
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
          background: var(--color-ivory-light);
          outline: none;
          transition: all 0.2s ease;
          width: 100%;
        }

        .form-input:focus, .form-select:focus, .form-textarea:focus {
          border-color: var(--color-teal);
          background: var(--color-white);
        }

        .btn-submit {
          padding: 0.95rem;
          font-size: 1.02rem;
          margin-top: 0.5rem;
        }

        /* Vision Panel Styles */
        .vision-card {
          padding: 2rem;
          background: var(--color-white);
          border-radius: var(--radius-xl);
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          border-top: 4px solid var(--color-gold);
        }

        .vision-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .vision-title-wrap {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .ai-chip {
          width: 24px;
          height: 24px;
          border-radius: 6px;
          background: var(--color-gold);
          color: var(--color-white);
          font-size: 0.72rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .vision-title {
          font-size: 1.2rem;
          color: var(--color-teal);
        }

        .prototype-badge {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--color-gold);
          background: var(--color-gold-soft);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(198, 161, 91, 0.35);
        }

        .vision-intro {
          font-size: 0.84rem;
          color: var(--color-charcoal-muted);
          line-height: 1.5;
        }

        .vision-scanning-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem 1.5rem;
          gap: 1rem;
          background: var(--status-safe-soft);
          border-radius: var(--radius-lg);
          border: 1px dashed var(--color-teal);
        }

        .radar-sweep-box {
          position: relative;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .scanning-text {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--color-teal);
        }

        .scanning-sub {
          font-size: 0.78rem;
          color: var(--color-charcoal-muted);
        }

        .vision-results-content {
          display: flex;
          flex-direction: column;
          gap: 1.15rem;
        }

        .vision-stat-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.5rem;
        }

        .stat-pill {
          background: var(--color-ivory);
          padding: 0.6rem 0.75rem;
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          gap: 2px;
          align-items: flex-start;
        }

        .pill-lbl {
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--color-charcoal-light);
        }

        .pill-val {
          font-size: 0.95rem;
          font-weight: 700;
        }

        .confidence-strip {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.78rem;
        }

        .conf-lbl {
          font-weight: 600;
          color: var(--color-charcoal-muted);
        }

        .conf-bar-track {
          flex: 1;
          height: 6px;
          background: var(--color-ivory);
          border-radius: var(--radius-full);
          overflow: hidden;
        }

        .conf-bar-fill {
          height: 100%;
          background: var(--color-sage);
          border-radius: var(--radius-full);
        }

        .conf-val {
          font-weight: 700;
          color: var(--color-teal);
        }

        .defects-box {
          background: var(--color-ivory-light);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 0.85rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .defects-title {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--color-charcoal-muted);
        }

        .defects-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .defects-list li {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.8rem;
          color: var(--color-charcoal);
        }

        .rec-box {
          background: var(--status-safe-soft);
          border: 1px solid rgba(15, 76, 76, 0.2);
          border-radius: var(--radius-md);
          padding: 0.85rem 1rem;
        }

        .rec-hdr {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.74rem;
          font-weight: 700;
          color: var(--color-teal);
          text-transform: uppercase;
          margin-bottom: 0.25rem;
        }

        .rec-text {
          font-size: 0.82rem;
          color: var(--color-teal-dark);
          line-height: 1.4;
          font-weight: 500;
        }

        .demo-disclaimer {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.72rem;
          color: var(--color-charcoal-light);
          padding-top: 0.5rem;
          border-top: 1px dashed rgba(24, 37, 37, 0.1);
        }

        .info-icon {
          flex-shrink: 0;
          color: var(--color-gold);
        }

        .vision-idle-state {
          padding: 3rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1rem;
          background: var(--color-ivory-light);
          border-radius: var(--radius-lg);
          border: 1px dashed var(--color-border);
        }

        .idle-icon {
          color: var(--color-sage);
        }

        .idle-text {
          font-size: 0.85rem;
          color: var(--color-charcoal-muted);
          max-width: 320px;
          line-height: 1.5;
        }
      `}</style>
    </div>
  );
}
