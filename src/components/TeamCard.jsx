import React from 'react';
import { Linkedin, Github, User } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TeamCard({ member, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="team-card card"
    >
      {/* Beautiful Circular Avatar Placeholder */}
      <div className="team-avatar-wrapper">
        <div className="team-avatar-placeholder" aria-label={`Avatar for ${member.name}`}>
          <span className="avatar-initials font-serif">{member.initials}</span>
          <div className="avatar-icon-pill" title="Team Contributor">
            <User size={11} className="avatar-user-icon" />
          </div>
        </div>
        <div className="avatar-ring" />
      </div>

      <div className="team-card-content">
        <h3 className="team-name font-serif">{member.name}</h3>
        <span className="team-role">{member.role}</span>
      </div>

      {/* GitHub and LinkedIn icon buttons */}
      <div className="team-card-socials">
        <a
          href={member.github}
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn github"
          title={`${member.name} on GitHub (Prototype link)`}
          aria-label={`${member.name} GitHub`}
        >
          <Github size={17} />
          <span>GitHub</span>
        </a>
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn linkedin"
          title={`${member.name} on LinkedIn (Prototype link)`}
          aria-label={`${member.name} LinkedIn`}
        >
          <Linkedin size={17} />
          <span>LinkedIn</span>
        </a>
      </div>

      <style>{`
        .team-card {
          padding: 2.25rem 1.75rem;
          border-radius: var(--radius-xl);
          background: var(--color-white);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1.25rem;
          position: relative;
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-md);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .team-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
          border-color: rgba(15, 76, 76, 0.3);
        }

        .team-avatar-wrapper {
          position: relative;
          width: 92px;
          height: 92px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .team-avatar-placeholder {
          width: 84px;
          height: 84px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-teal) 0%, var(--color-teal-dark) 100%);
          color: var(--color-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 3px solid var(--color-white);
          box-shadow: var(--shadow-md);
          position: relative;
          user-select: none;
        }

        .avatar-initials {
          font-size: 1.65rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: #E8D3A2;
        }

        .avatar-icon-pill {
          position: absolute;
          bottom: -2px;
          right: -2px;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: var(--color-gold);
          color: var(--color-white);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--color-white);
          box-shadow: var(--shadow-sm);
        }

        .avatar-ring {
          position: absolute;
          inset: 0px;
          border-radius: 50%;
          border: 1.5px dashed var(--color-gold);
          opacity: 0.6;
          pointer-events: none;
          transition: transform 0.6s ease;
        }

        .team-card:hover .avatar-ring {
          transform: rotate(60deg);
          opacity: 1;
        }

        .team-card-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.35rem;
          flex: 1;
        }

        .team-name {
          font-size: 1.25rem;
          color: var(--color-teal);
          font-weight: 700;
          line-height: 1.25;
        }

        .team-role {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--color-sage);
          letter-spacing: 0.01em;
        }

        .team-card-socials {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding-top: 1rem;
          border-top: 1px solid var(--color-border-subtle);
          width: 100%;
          justify-content: center;
        }

        .social-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.45rem 0.95rem;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 600;
          background: var(--color-ivory);
          color: var(--color-charcoal-muted);
          border: 1px solid var(--color-border);
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .social-btn:hover {
          background: var(--color-teal);
          color: var(--color-white);
          border-color: var(--color-teal);
          transform: translateY(-2px);
          box-shadow: var(--shadow-sm);
        }
      `}</style>
    </motion.div>
  );
}
