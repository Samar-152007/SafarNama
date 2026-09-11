import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mountain, Compass, ShieldAlert, Navigation, Users, Github, Menu, X, Radio } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Intelligence', path: '/dashboard' },
    { name: 'Route AI', path: '/route-ai' },
    { name: 'Report Incident', path: '/report' },
    { name: 'Team', path: '/team' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="navbar-wrapper">
      <div className="container">
        <nav className="navbar">
          {/* Brand Logo */}
          <Link to="/" className="brand" onClick={() => setMobileMenuOpen(false)}>
            <div className="brand-icon">
              <img src="/images/SafarNama.png" alt="SafarNama Logo" className="brand-logo-img" />
            </div>
            <div className="brand-text-block">
              <span className="brand-title font-serif">SafarNama</span>
              <span className="brand-tag">NER LOGISTICS AI</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="nav-links">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-item ${isActive(link.path) ? 'active' : ''}`}
              >
                {link.name}
                {isActive(link.path) && <span className="active-pill" />}
              </Link>
            ))}
          </div>

          {/* Right Action & GitHub */}
          <div className="nav-actions">
            <div className="live-status-badge">
              <Radio size={13} className="live-radio-icon animate-pulse" />
              <span>7 NER Alerts Active</span>
            </div>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
              title="GitHub Repository"
            >
              <Github size={19} />
            </a>

            {/* Mobile menu hamburger toggle */}
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="container">
            <div className="mobile-nav-list">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`mobile-nav-item ${isActive(link.path) ? 'mobile-active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{link.name}</span>
                  {isActive(link.path) && <span className="mobile-indicator">•</span>}
                </Link>
              ))}
              <div className="mobile-extra-info">
                <p className="mobile-status-text">
                  <strong>SafarNama AI:</strong> 8 Northeast states connected with active telemetry.
                </p>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <Github size={16} />
                  <span>View Project on GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .navbar-wrapper {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: rgba(247, 244, 236, 0.88);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--color-border);
          transition: all 0.3s ease;
        }

        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
          gap: 1.5rem;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          text-decoration: none;
        }

        .brand-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          box-shadow: 0 4px 12px rgba(15, 76, 76, 0.12);
          border: 1px solid var(--color-border);
          padding: 4px;
          overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .brand:hover .brand-icon {
          transform: translateY(-1px);
          box-shadow: 0 6px 16px rgba(15, 76, 76, 0.18);
          border-color: var(--color-teal);
        }

        .brand-logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }

        .brand-text-block {
          display: flex;
          flex-direction: column;
        }

        .brand-title {
          font-size: 1.45rem;
          font-weight: 700;
          color: var(--color-teal);
          line-height: 1;
          letter-spacing: -0.01em;
        }

        .brand-tag {
          font-size: 0.65rem;
          letter-spacing: 0.14em;
          color: var(--color-sage);
          font-weight: 700;
          margin-top: 2px;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .nav-item {
          position: relative;
          padding: 0.5rem 0.95rem;
          color: var(--color-charcoal-muted);
          font-size: 0.92rem;
          font-weight: 600;
          transition: color 0.2s ease;
          border-radius: var(--radius-full);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .nav-item:hover {
          color: var(--color-teal);
          background: rgba(15, 76, 76, 0.04);
        }

        .nav-item.active {
          color: var(--color-teal);
          font-weight: 700;
        }

        .active-pill {
          position: absolute;
          bottom: 2px;
          width: 18px;
          height: 2.5px;
          background: var(--color-gold);
          border-radius: var(--radius-full);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .live-status-badge {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          background: var(--color-gold-soft);
          color: #8C6A21;
          border: 1px solid rgba(198, 161, 91, 0.35);
          padding: 0.35rem 0.8rem;
          border-radius: var(--radius-full);
          font-size: 0.78rem;
          font-weight: 600;
        }

        .live-radio-icon {
          color: #B28222;
        }

        @keyframes pulse-anim {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .animate-pulse {
          animation: pulse-anim 1.8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .github-btn {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-full);
          background: var(--color-white);
          color: var(--color-charcoal);
          border: 1px solid var(--color-border);
          transition: all 0.2s ease;
        }

        .github-btn:hover {
          color: var(--color-teal);
          border-color: var(--color-teal);
          transform: translateY(-1px);
        }

        .mobile-toggle {
          display: none;
          color: var(--color-teal);
          padding: 0.3rem;
        }

        .mobile-drawer {
          display: none;
          background: var(--color-ivory);
          border-bottom: 1px solid var(--color-border);
          padding: 1.25rem 0 1.75rem 0;
          box-shadow: var(--shadow-md);
        }

        .mobile-nav-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .mobile-nav-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.85rem 1.2rem;
          border-radius: var(--radius-md);
          font-weight: 600;
          color: var(--color-charcoal);
          font-size: 1.05rem;
          background: var(--color-white);
          border: 1px solid var(--color-border-subtle);
        }

        .mobile-nav-item.mobile-active {
          color: var(--color-teal);
          border-color: var(--color-teal);
          background: rgba(15, 76, 76, 0.05);
        }

        .mobile-indicator {
          color: var(--color-gold);
          font-size: 1.5rem;
          line-height: 1;
        }

        .mobile-extra-info {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px dashed var(--color-border);
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .mobile-status-text {
          font-size: 0.85rem;
          color: var(--color-charcoal-muted);
        }

        @media (max-width: 960px) {
          .nav-links {
            display: none;
          }
          .live-status-badge {
            display: none;
          }
          .mobile-toggle {
            display: flex;
          }
          .mobile-drawer {
            display: block;
          }
        }
      `}</style>
    </header>
  );
}
