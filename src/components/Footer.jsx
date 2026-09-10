import React from 'react';
import { Link } from 'react-router-dom';
import { Mountain, Compass, Shield, Github, Linkedin, Radio, Heart } from 'lucide-react';

export default function Footer() {
  const states = [
    'Assam',
    'Arunachal Pradesh',
    'Meghalaya',
    'Manipur',
    'Mizoram',
    'Nagaland',
    'Tripura',
    'Sikkim'
  ];

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="footer-brand">
              <div className="brand-icon-sm">
                <Mountain size={18} />
              </div>
              <span className="brand-name font-serif">SafarNama</span>
            </div>
            <p className="footer-tagline font-serif">"Predict. Navigate. Deliver."</p>
            <p className="footer-desc">
              AI-powered logistics intelligence for India's North Eastern Region. Providing real-time disruption prediction, terrain vulnerability models, and resilient route alternatives for challenging Himalayan geographies.
            </p>
            <div className="footer-telemetry-status">
              <Radio size={12} className="text-gold animate-pulse" />
              <span>Telemetry Node: Active • All 8 States Synchronized</span>
            </div>
          </div>

          {/* Covered States */}
          <div className="footer-states-col">
            <h4 className="footer-col-title">Monitored NER Territories</h4>
            <div className="states-tags-wrap">
              {states.map((s) => (
                <span key={s} className="state-badge">
                  <span className="state-dot" />
                  {s}
                </span>
              ))}
            </div>
            <p className="states-note">
              Continuous InSAR slope monitoring, BRO clearance feeds, and Open-Meteo precipitation indexes.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Platform Navigation</h4>
            <ul className="footer-links-list">
              <li><Link to="/">Home Overview</Link></li>
              <li><Link to="/dashboard">Intelligence Dashboard</Link></li>
              <li><Link to="/route-ai">AI Route Intelligence</Link></li>
              <li><Link to="/report">Report Disruption</Link></li>
              <li><Link to="/team">Engineering Team</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {new Date().getFullYear()} <strong>SafarNama</strong> — Smart India Hackathon (SIH) Intelligent Logistics Prototype.
          </p>
          <div className="bottom-meta">
            <span className="api-badge">Powered by OpenStreetMap & Open-Meteo API</span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              title="GitHub"
            >
              <Github size={16} />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .site-footer {
          background: var(--color-white);
          border-top: 1px solid var(--color-border);
          padding: 4.5rem 0 2rem 0;
          margin-top: 5rem;
          position: relative;
        }

        .footer-top-grid {
          display: grid;
          grid-template-columns: 2fr 1.6fr 1fr;
          gap: 3rem;
          margin-bottom: 3.5rem;
        }

        @media (max-width: 992px) {
          .footer-top-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 680px) {
          .footer-top-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }

        .brand-icon-sm {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: var(--color-teal);
          color: var(--color-white);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .brand-name {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--color-teal);
        }

        .footer-tagline {
          font-size: 1.05rem;
          font-style: italic;
          color: var(--color-gold);
          margin-bottom: 0.75rem;
        }

        .footer-desc {
          font-size: 0.88rem;
          color: var(--color-charcoal-muted);
          line-height: 1.6;
          max-width: 440px;
          margin-bottom: 1.25rem;
        }

        .footer-telemetry-status {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--color-ivory);
          border: 1px solid var(--color-border);
          padding: 0.35rem 0.8rem;
          border-radius: var(--radius-full);
          font-size: 0.76rem;
          font-weight: 600;
          color: var(--color-teal);
        }

        .footer-col-title {
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-teal);
          margin-bottom: 1.25rem;
        }

        .states-tags-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          margin-bottom: 1rem;
        }

        .state-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: var(--color-ivory);
          border: 1px solid var(--color-border-subtle);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-full);
          font-size: 0.76rem;
          font-weight: 600;
          color: var(--color-charcoal);
        }

        .state-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--color-sage);
        }

        .states-note {
          font-size: 0.8rem;
          color: var(--color-charcoal-light);
          line-height: 1.45;
        }

        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .footer-links-list a {
          font-size: 0.88rem;
          color: var(--color-charcoal-muted);
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .footer-links-list a:hover {
          color: var(--color-teal);
          padding-left: 4px;
        }

        .footer-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 2rem;
          border-top: 1px solid var(--color-border-subtle);
          flex-wrap: wrap;
          gap: 1rem;
        }

        .copyright-text {
          font-size: 0.82rem;
          color: var(--color-charcoal-light);
        }

        .bottom-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .api-badge {
          font-size: 0.76rem;
          color: var(--color-sage);
          font-weight: 600;
        }

        .footer-social-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--color-ivory);
          color: var(--color-charcoal);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--color-border);
          transition: all 0.2s ease;
        }

        .footer-social-icon:hover {
          background: var(--color-teal);
          color: var(--color-white);
        }
      `}</style>
    </footer>
  );
}
