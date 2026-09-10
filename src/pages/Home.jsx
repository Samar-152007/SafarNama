import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import LiveWeatherWidget from '../components/LiveWeatherWidget';
import {
  ShieldAlert,
  Navigation,
  CloudRain,
  Cpu,
  ArrowRight,
  TrendingUp,
  MapPin,
  Clock,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Compass
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const pillars = [
    {
      icon: Cpu,
      title: 'Himalayan Terrain AI',
      desc: 'Synthetic Aperture Radar (SAR) slope gradient modeling detecting early soil creep before catastrophic landslides occur.'
    },
    {
      icon: CloudRain,
      title: 'Monsoon Meteorological Mesh',
      desc: 'Hyper-local rainfall rate ingestion via Open-Meteo numerical weather forecasts, anticipating flash floods along vulnerable river basins.'
    },
    {
      icon: Navigation,
      title: 'Disruption-Resilient Rerouting',
      desc: 'Dynamic corridor analysis generating safe bypasses that avoid high-altitude blockage bottlenecks while preserving freight transit velocity.'
    },
    {
      icon: ShieldAlert,
      title: 'Computer Vision Incident Ingestion',
      desc: 'Instant damage severity classification from field patrol and driver uploads with automated road clearance time predictions.'
    }
  ];

  const corridorChallenges = [
    {
      title: "Siliguri 'Chicken's Neck' Chokepoint",
      stat: '22 km Width',
      desc: 'The sole overland arterial connecting mainland India to all 8 Northeast states, creating severe compounding delays during disruptions.'
    },
    {
      title: 'Sela Pass Alpine Vulnerability',
      stat: '13,700 ft',
      desc: 'Sub-zero freezes, snowdrifts, and steep scree slopes along NH-13 frequently sever access to Western Arunachal Pradesh.'
    },
    {
      title: 'Brahmaputra Flood Plain Inundation',
      stat: '4,000+ mm Rain',
      desc: 'Annual monsoon surges flood crucial culverts along NH-27 and NH-37, isolating vital agro and petroleum supply chains.'
    }
  ];

  return (
    <div className="page-home">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. NER Strategic Corridor Challenges */}
      <section className="section-challenges">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Logistics Geography</span>
            <h2 className="section-title">The North Eastern Logistics Landscape</h2>
            <p className="section-subtitle">
              Stretching across 262,000 km² of rugged mountain ranges and river basins, the North Eastern Region faces unique transit vulnerabilities that conventional supply chain tools fail to solve.
            </p>
          </div>

          <div className="challenges-grid">
            {corridorChallenges.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="challenge-card card"
              >
                <div className="challenge-stat-box font-serif">
                  {item.stat}
                </div>
                <h3 className="challenge-title">{item.title}</h3>
                <p className="challenge-desc">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core AI Architecture Pillars */}
      <section className="section-pillars">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Proprietary Technology</span>
            <h2 className="section-title">Engineered for Extreme Terrains</h2>
            <p className="section-subtitle">
              SafarNama fuses multi-modal remote sensing, meteorological forecasting, and road infrastructure telemetry into a unified operational command system.
            </p>
          </div>

          <div className="pillars-grid">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="pillar-card card">
                  <div className="pillar-icon-box">
                    <Icon size={22} />
                  </div>
                  <h3 className="pillar-title font-serif">{pillar.title}</h3>
                  <p className="pillar-desc">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Live Weather Widget Section */}
      <section className="section-weather-live">
        <div className="container">
          <LiveWeatherWidget />
        </div>
      </section>

      {/* 5. Call to Action Banner */}
      <section className="section-cta">
        <div className="container">
          <div className="cta-card card">
            <div className="cta-content">
              <span className="cta-badge">EXPERIENCE SAFARNAMA</span>
              <h2 className="cta-title font-serif">Ready to navigate NER logistics with AI foresight?</h2>
              <p className="cta-desc">
                Explore our live disruption intelligence dashboard or run dynamic route optimization between Guwahati and Tawang.
              </p>
              <div className="cta-buttons">
                <Link to="/dashboard" className="btn btn-primary btn-lg">
                  <span>Open Intelligence Dashboard</span>
                  <ArrowRight size={18} />
                </Link>
                <Link to="/route-ai" className="btn btn-secondary btn-lg">
                  <span>Run Route AI Simulation</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .page-home {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .section-challenges {
          padding: 3.5rem 0;
        }

        .challenges-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        @media (max-width: 900px) {
          .challenges-grid {
            grid-template-columns: 1fr;
          }
        }

        .challenge-card {
          padding: 2.25rem 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          background: var(--color-white);
          border-left: 3px solid var(--color-gold);
        }

        .challenge-stat-box {
          font-size: 1.85rem;
          font-weight: 700;
          color: var(--color-teal);
          line-height: 1;
        }

        .challenge-title {
          font-size: 1.15rem;
          color: var(--color-charcoal);
        }

        .challenge-desc {
          font-size: 0.88rem;
          color: var(--color-charcoal-muted);
          line-height: 1.6;
        }

        .section-pillars {
          padding: 3.5rem 0;
          background: rgba(111, 143, 114, 0.05);
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        @media (max-width: 1024px) {
          .pillars-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .pillars-grid {
            grid-template-columns: 1fr;
          }
        }

        .pillar-card {
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          background: var(--color-white);
        }

        .pillar-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: var(--status-safe-soft);
          color: var(--color-teal);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pillar-title {
          font-size: 1.2rem;
          color: var(--color-teal);
        }

        .pillar-desc {
          font-size: 0.86rem;
          color: var(--color-charcoal-muted);
          line-height: 1.6;
        }

        .section-weather-live {
          padding: 1.5rem 0 3rem 0;
        }

        .section-cta {
          padding: 2rem 0 4rem 0;
        }

        .cta-card {
          background: linear-gradient(135deg, var(--color-teal-dark) 0%, var(--color-teal) 100%);
          color: var(--color-white);
          padding: 4rem 2.5rem;
          border-radius: var(--radius-xl);
          text-align: center;
          box-shadow: var(--shadow-lg);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .cta-content {
          max-width: 720px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
        }

        .cta-badge {
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--color-gold);
          background: rgba(198, 161, 91, 0.18);
          padding: 0.35rem 0.9rem;
          border-radius: var(--radius-full);
        }

        .cta-title {
          font-size: clamp(2rem, 4vw, 3rem);
          color: var(--color-white);
          line-height: 1.15;
        }

        .cta-desc {
          font-size: 1.05rem;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.6;
          max-width: 600px;
        }

        .cta-buttons {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 0.5rem;
        }

        .cta-buttons .btn-secondary {
          background: rgba(255, 255, 255, 0.12);
          color: var(--color-white);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .cta-buttons .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: var(--color-white);
        }
      `}</style>
    </div>
  );
}
