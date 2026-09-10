import React from 'react';
import { motion } from 'framer-motion';

export default function StatCard({ label, value, subtext, trend, icon: Icon, color = 'teal', delay = 0 }) {
  const colorClasses = {
    teal: {
      bg: 'rgba(15, 76, 76, 0.08)',
      text: 'var(--color-teal)',
      border: 'var(--color-teal)'
    },
    gold: {
      bg: 'rgba(198, 161, 91, 0.12)',
      text: '#A6802E',
      border: 'var(--color-gold)'
    },
    red: {
      bg: 'rgba(220, 38, 38, 0.08)',
      text: 'var(--status-critical)',
      border: 'var(--status-critical)'
    },
    sage: {
      bg: 'rgba(111, 143, 114, 0.12)',
      text: 'var(--color-sage)',
      border: 'var(--color-sage)'
    }
  };

  const scheme = colorClasses[color] || colorClasses.teal;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="stat-card card"
    >
      <div className="stat-card-header">
        <span className="stat-label">{label}</span>
        {Icon && (
          <div className="stat-icon-wrapper" style={{ background: scheme.bg, color: scheme.text }}>
            <Icon size={18} />
          </div>
        )}
      </div>

      <div className="stat-value-block">
        <span className="stat-value font-serif" style={{ color: scheme.text }}>
          {value}
        </span>
      </div>

      <div className="stat-footer">
        {trend && (
          <span className="stat-trend" style={{ color: scheme.text }}>
            {trend}
          </span>
        )}
        <span className="stat-subtext">{subtext}</span>
      </div>

      <style>{`
        .stat-card {
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 0.75rem;
          background: var(--color-white);
          border: 1px solid var(--color-border-subtle);
          position: relative;
          overflow: hidden;
        }

        .stat-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: ${scheme.border};
          opacity: 0.7;
        }

        .stat-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
        }

        .stat-label {
          font-size: 0.82rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-charcoal-muted);
        }

        .stat-icon-wrapper {
          width: 32px;
          height: 32px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-value-block {
          margin: 0.25rem 0;
        }

        .stat-value {
          font-size: clamp(2rem, 3.5vw, 2.75rem);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .stat-footer {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: var(--color-charcoal-light);
          flex-wrap: wrap;
        }

        .stat-trend {
          font-weight: 700;
          background: ${scheme.bg};
          padding: 0.15rem 0.45rem;
          border-radius: var(--radius-sm);
        }

        .stat-subtext {
          font-weight: 500;
        }
      `}</style>
    </motion.div>
  );
}
