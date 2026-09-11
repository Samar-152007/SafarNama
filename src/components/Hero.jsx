import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mountain, CloudRain, ShieldCheck, Cpu, AlertTriangle, TrendingUp, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const indicators = [
    {
      title: 'Terrain Risk',
      value: 'InSAR 3D Scan',
      status: 'Active',
      statusType: 'safe',
      icon: Mountain,
      detail: 'Himalayan slope slip prediction'
    },
    {
      title: 'Weather Intelligence',
      value: 'Live Monsoon Radar',
      status: 'High Alert',
      statusType: 'high',
      icon: CloudRain,
      detail: 'Open-Meteo precipitation feeds'
    },
    {
      title: 'Road Accessibility',
      value: '91.4% Passable',
      status: 'Monitored',
      statusType: 'safe',
      icon: ShieldCheck,
      detail: '14 national highways tracked'
    },
    {
      title: 'AI Route Optimization',
      value: 'Multi-Factor Model',
      status: 'Live',
      statusType: 'gold',
      icon: Cpu,
      detail: 'Disruption-aware dynamic bypasses'
    }
  ];

  return (
    <section className="hero-section">
      {/* Decorative ambient background glows */}
      <div className="float-shape shape-1" />
      <div className="float-shape shape-2" />

      <div className="container">
        <div className="hero-content">
          {/* Top Tagline Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-pill"
          >
            <img src="/images/SafarNama.png" alt="SafarNama Logo" className="hero-pill-logo" />
            <span className="pill-text">Predict. Navigate. Deliver.</span>
          </motion.div>

          {/* Main Serif Display Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="hero-title font-serif"
          >
            SafarNama
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hero-subtitle"
          >
            AI-powered logistics intelligence for the North Eastern Region
          </motion.h2>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hero-description"
          >
            Predict disruptions, optimize routes and improve accessibility across one of India's most challenging logistics landscapes.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="hero-buttons"
          >
            <Link to="/dashboard" className="btn btn-primary btn-lg">
              <span>Explore Intelligence</span>
              <ArrowRight size={18} />
            </Link>
            <Link to="/team" className="btn btn-secondary btn-lg">
              <span>Meet Our Team</span>
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        {/* Large Premium Visual Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="hero-visual-card"
        >
          <div className="visual-image-wrapper">
            <img
              src="/images/ner_mountain_logistics.jpg"
              alt="Winding mountain highway in North Eastern India with logistics freight truck"
              className="hero-img"
              loading="eager"
            />
            {/* Subtle overlay gradients for depth */}
            <div className="visual-overlay" />

            {/* Simulated AI Route HUD overlay elements */}
            <div className="telemetry-badge telemetry-top-left">
              <div className="telemetry-icon">
                <Navigation size={14} className="text-teal" />
              </div>
              <div className="telemetry-content">
                <span className="telemetry-label">ACTIVE SECTOR</span>
                <span className="telemetry-val">NH-13 • Bhalukpong–Dirang Pass</span>
              </div>
            </div>

            <div className="telemetry-badge telemetry-bottom-right">
              <div className="telemetry-pulse-dot"></div>
              <div className="telemetry-content">
                <span className="telemetry-label">AI PREDICTIVE RADAR</span>
                <span className="telemetry-val">Monsoon Inflow: 48mm/h • Dynamic Reroute Ready</span>
              </div>
            </div>

            {/* Holographic waypoint pin */}
            <div className="waypoint-pin">
              <div className="pin-circle">
                <div className="pin-dot"></div>
              </div>
              <div className="pin-tag">Sela Pass Altitude: 13,700 ft</div>
            </div>
          </div>
        </motion.div>

        {/* Animated Indicators Below Hero */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="indicators-grid"
        >
          {indicators.map((ind, index) => {
            const Icon = ind.icon;
            return (
              <div key={index} className="indicator-card card">
                <div className="indicator-header">
                  <div className="indicator-icon-box">
                    <Icon size={20} />
                  </div>
                  <span className={`badge badge-${ind.statusType}`}>
                    {ind.status}
                  </span>
                </div>
                <div className="indicator-body">
                  <h4 className="indicator-title">{ind.title}</h4>
                  <div className="indicator-value">{ind.value}</div>
                  <p className="indicator-detail">{ind.detail}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          padding: 4.5rem 0 3.5rem 0;
          overflow: hidden;
        }

        .hero-content {
          text-align: center;
          max-width: 860px;
          margin: 0 auto 3.5rem auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(15, 76, 76, 0.08);
          border: 1px solid rgba(15, 76, 76, 0.16);
          padding: 0.4rem 1.1rem;
          border-radius: var(--radius-full);
          margin-bottom: 1.5rem;
        }

        .hero-pill-logo {
          width: 20px;
          height: 20px;
          object-fit: contain;
          border-radius: 4px;
        }

        .pill-text {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--color-teal);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .hero-title {
          font-size: clamp(3.2rem, 7vw, 5.2rem);
          font-weight: 800;
          color: var(--color-teal);
          line-height: 1.05;
          letter-spacing: -0.03em;
          margin-bottom: 1.25rem;
        }

        .hero-subtitle {
          font-family: var(--font-sans);
          font-size: clamp(1.25rem, 2.8vw, 1.85rem);
          font-weight: 600;
          color: var(--color-charcoal);
          line-height: 1.35;
          margin-bottom: 1.2rem;
        }

        .hero-description {
          font-size: clamp(1rem, 1.8vw, 1.15rem);
          color: var(--color-charcoal-muted);
          line-height: 1.65;
          max-width: 680px;
          margin-bottom: 2.25rem;
        }

        .hero-buttons {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.1rem;
          flex-wrap: wrap;
        }

        .hero-visual-card {
          position: relative;
          border-radius: var(--radius-xl);
          overflow: hidden;
          background: var(--color-white);
          border: 1px solid var(--color-border);
          box-shadow: 0 25px 60px -15px rgba(15, 76, 76, 0.22);
          margin-bottom: 3.5rem;
        }

        .visual-image-wrapper {
          position: relative;
          width: 100%;
          height: 520px;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .visual-image-wrapper {
            height: 340px;
          }
        }

        .hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 1.2s ease;
        }

        .hero-visual-card:hover .hero-img {
          transform: scale(1.02);
        }

        .visual-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(15, 76, 76, 0.15) 0%,
            transparent 40%,
            rgba(24, 37, 37, 0.4) 100%
          );
          pointer-events: none;
        }

        .telemetry-badge {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          padding: 0.6rem 1rem;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-md);
          border: 1px solid rgba(255, 255, 255, 0.8);
          z-index: 2;
        }

        .telemetry-top-left {
          top: 1.5rem;
          left: 1.5rem;
        }

        .telemetry-bottom-right {
          bottom: 1.5rem;
          right: 1.5rem;
        }

        @media (max-width: 640px) {
          .telemetry-top-left {
            top: 0.8rem;
            left: 0.8rem;
            padding: 0.4rem 0.7rem;
          }
          .telemetry-bottom-right {
            bottom: 0.8rem;
            right: 0.8rem;
            padding: 0.4rem 0.7rem;
          }
        }

        .telemetry-icon {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          background: var(--color-sage-soft);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-teal);
        }

        .telemetry-content {
          display: flex;
          flex-direction: column;
        }

        .telemetry-label {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--color-sage);
        }

        .telemetry-val {
          font-size: 0.84rem;
          font-weight: 700;
          color: var(--color-charcoal);
        }

        .telemetry-pulse-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--color-gold);
          box-shadow: 0 0 0 4px rgba(198, 161, 91, 0.25);
          animation: pulse-ring 2s infinite;
        }

        .waypoint-pin {
          position: absolute;
          top: 35%;
          left: 48%;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.35rem;
          pointer-events: none;
        }

        @media (max-width: 640px) {
          .waypoint-pin {
            display: none;
          }
        }

        .pin-circle {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: rgba(198, 161, 91, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 15px var(--color-gold);
        }

        .pin-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--color-gold);
        }

        .pin-tag {
          background: rgba(15, 76, 76, 0.88);
          color: var(--color-white);
          font-size: 0.72rem;
          font-weight: 600;
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-full);
          backdrop-filter: blur(8px);
          white-space: nowrap;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .indicators-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }

        @media (max-width: 1024px) {
          .indicators-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 580px) {
          .indicators-grid {
            grid-template-columns: 1fr;
          }
        }

        .indicator-card {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding: 1.35rem;
          border-radius: var(--radius-lg);
          border-left: 3px solid var(--color-sage);
        }

        .indicator-card:nth-child(2) {
          border-left-color: var(--color-gold);
        }

        .indicator-card:nth-child(4) {
          border-left-color: var(--color-teal);
        }

        .indicator-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .indicator-icon-box {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: var(--color-ivory);
          color: var(--color-teal);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .indicator-title {
          font-size: 0.82rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--color-charcoal-light);
          margin-bottom: 0.2rem;
        }

        .indicator-value {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-teal);
          margin-bottom: 0.25rem;
        }

        .indicator-detail {
          font-size: 0.82rem;
          color: var(--color-charcoal-muted);
          line-height: 1.4;
        }
      `}</style>
    </section>
  );
}
