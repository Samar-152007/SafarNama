import React from 'react';
import { teamMembers } from '../data/team';
import TeamCard from '../components/TeamCard';
import { Mountain, Compass, ShieldCheck, Heart, Award, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Team() {
  return (
    <div className="page-team">
      <div className="container">
        {/* Header Section */}
        <div className="team-header">
          <span className="section-tag">Human Intelligence & Engineering</span>
          <h1 className="section-title font-serif">Meet the Team</h1>
          <p className="section-subtitle">
            The team building intelligent logistics infrastructure for the North Eastern Region.
          </p>
        </div>

        {/* 6 Premium Team Cards Grid */}
        <div className="team-cards-grid grid-3">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>

        {/* Mission & Engineering Values Section */}
        <section className="team-mission-card card">
          <div className="mission-content">
            <div className="mission-badge">
              <Compass size={16} className="text-gold" />
              <span>THE SAFARNAMA CORE MISSION</span>
            </div>
            <h2 className="mission-title font-serif">Bridging the Geography of the North East</h2>
            <p className="mission-desc">
              India's North Eastern Region is a magnificent tapestry of 8 states, 45 million citizens, and strategic international borders. Yet its commercial arteries remain vulnerable to sudden monsoonal flash-floods, seismic shifts, and high-altitude freezes.
            </p>
            <p className="mission-desc">
              Our multidisciplinary team unites remote sensing scientists from Arunachal, GIS systems engineers from Assam, and field liaison specialists from Nagaland to create a predictive, localized logistics intelligence network that keeps essential food, medical, and defense supply lines flowing.
            </p>

            <div className="mission-stats-strip">
              <div className="mission-stat">
                <span className="stat-big font-serif">8</span>
                <span className="stat-caption">NER States Unified</span>
              </div>
              <div className="mission-stat">
                <span className="stat-big font-serif">14</span>
                <span className="stat-caption">National Highways Monitored</span>
              </div>
              <div className="mission-stat">
                <span className="stat-big font-serif">&lt; 1.2s</span>
                <span className="stat-caption">Edge Inference Latency</span>
              </div>
              <div className="mission-stat">
                <span className="stat-big font-serif">100%</span>
                <span className="stat-caption">Open Standards & Data Resilience</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        .page-team {
          padding: 2.5rem 0 4rem 0;
          display: flex;
          flex-direction: column;
          gap: 3.5rem;
        }

        .team-header {
          text-align: center;
          max-width: 760px;
          margin: 0 auto;
        }

        .team-cards-grid {
          margin-bottom: 1rem;
        }

        .team-mission-card {
          background: linear-gradient(135deg, var(--color-white) 0%, var(--color-ivory-light) 100%);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xl);
          padding: 3.5rem 3rem;
          box-shadow: var(--shadow-md);
        }

        @media (max-width: 768px) {
          .team-mission-card {
            padding: 2.5rem 1.5rem;
          }
        }

        .mission-content {
          max-width: 820px;
          margin: 0 auto;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
        }

        .mission-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--color-teal);
          background: var(--status-safe-soft);
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-full);
        }

        .mission-title {
          font-size: clamp(1.85rem, 3vw, 2.5rem);
          color: var(--color-teal);
          line-height: 1.2;
        }

        .mission-desc {
          font-size: 1.02rem;
          color: var(--color-charcoal-muted);
          line-height: 1.7;
        }

        .mission-stats-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          width: 100%;
          margin-top: 1.5rem;
          padding-top: 2rem;
          border-top: 1px solid var(--color-border);
        }

        @media (max-width: 768px) {
          .mission-stats-strip {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .mission-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
        }

        .stat-big {
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--color-teal);
          line-height: 1;
        }

        .stat-caption {
          font-size: 0.78rem;
          color: var(--color-charcoal-light);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
      `}</style>
    </div>
  );
}
