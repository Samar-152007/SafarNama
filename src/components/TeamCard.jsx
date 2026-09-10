import React from 'react';
import { Linkedin, Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TeamCard({ member, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="team-card card"
    >
      <div className="team-avatar-wrapper">
        <img
          src={member.image}
          alt={member.name}
          className="team-avatar-img"
          onError={(e) => {
            // Fallback to stylized initials avatar if image network is unavailable
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div className="avatar-fallback" style={{ display: 'none' }}>
          {member.initials}
        </div>
        <div className="avatar-ring" />
      </div>

      <div className="team-card-content">
        <h3 className="team-name font-serif">{member.name}</h3>
        <span className="team-role">{member.role}</span>
        <span className="team-specialty">{member.specialty}</span>
        <p className="team-bio">{member.bio}</p>
      </div>

      <div className="team-card-socials">
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          title={`${member.name} on LinkedIn`}
        >
          <Linkedin size={16} />
        </a>
        <a
          href={member.github}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          title={`${member.name} on GitHub`}
        >
          <Github size={16} />
        </a>
      </div>

      <style>{`
        .team-card {
          padding: 2rem 1.75rem;
          border-radius: var(--radius-xl);
          background: var(--color-white);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1.25rem;
          position: relative;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .team-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
          border-color: rgba(15, 76, 76, 0.25);
        }

        .team-avatar-wrapper {
          position: relative;
          width: 100px;
          height: 100px;
        }

        .team-avatar-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          display: block;
          border: 3px solid var(--color-white);
          box-shadow: var(--shadow-md);
        }

        .avatar-fallback {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: var(--color-teal);
          color: var(--color-gold);
          font-family: var(--font-serif);
          font-size: 1.5rem;
          font-weight: 700;
          align-items: center;
          justify-content: center;
          border: 3px solid var(--color-white);
          box-shadow: var(--shadow-md);
        }

        .avatar-ring {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 1.5px dashed var(--color-gold);
          opacity: 0.6;
          pointer-events: none;
          transition: transform 0.5s ease;
        }

        .team-card:hover .avatar-ring {
          transform: rotate(45deg);
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
          font-size: 1.3rem;
          color: var(--color-teal);
        }

        .team-role {
          font-size: 0.84rem;
          font-weight: 700;
          color: var(--color-charcoal);
          letter-spacing: -0.01em;
        }

        .team-specialty {
          font-size: 0.74rem;
          font-weight: 600;
          color: var(--color-sage);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.45rem;
        }

        .team-bio {
          font-size: 0.84rem;
          color: var(--color-charcoal-muted);
          line-height: 1.55;
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

        .social-link {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: var(--color-ivory);
          color: var(--color-charcoal-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--color-border);
          transition: all 0.2s ease;
        }

        .social-link:hover {
          background: var(--color-teal);
          color: var(--color-white);
          border-color: var(--color-teal);
          transform: translateY(-2px);
        }
      `}</style>
    </motion.div>
  );
}
