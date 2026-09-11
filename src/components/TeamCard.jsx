import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Linkedin, Github, User, Maximize2, X, ExternalLink, Sparkles, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TeamCard({ member, index = 0 }) {
  const [imageError, setImageError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Close modal on Escape key press and lock background scroll
  useEffect(() => {
    if (!isModalOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isModalOpen]);

  // Format LinkedIn URL safely (supports full URL or just username/id)
  const getLinkedInUrl = (input) => {
    if (!input) return null;
    const trimmed = input.trim();
    if (!trimmed) return null;
    if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
      return trimmed;
    }
    const cleanId = trimmed.replace(/^@/, '');
    return `https://www.linkedin.com/in/${cleanId}`;
  };

  // Extract clean LinkedIn display ID / handle
  const getLinkedInHandle = (input) => {
    if (!input) return null;
    const trimmed = input.trim();
    if (!trimmed) return null;
    if (trimmed.includes('linkedin.com/in/')) {
      const parts = trimmed.split('linkedin.com/in/');
      return parts[1]?.replace(/\/.*$/, '').replace(/[?#].*$/, '') || trimmed;
    }
    return trimmed.replace(/^@/, '');
  };

  // Format GitHub URL safely
  const getGithubUrl = (input) => {
    if (!input) return null;
    const trimmed = input.trim();
    if (!trimmed) return null;
    if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
      return trimmed;
    }
    return `https://github.com/${trimmed.replace(/^@/, '')}`;
  };

  const linkedInUrl = getLinkedInUrl(member.linkedin);
  const linkedInHandle = getLinkedInHandle(member.linkedin);
  const githubUrl = getGithubUrl(member.github);
  const imageSrc = member.image ? member.image.replace(/\\/g, '/') : null;
  const hasPhoto = Boolean(imageSrc && !imageError);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        className="team-card card"
      >
        {/* Interactive Avatar with dynamic Pop-up on hover and click */}
        <button
          type="button"
          className="team-avatar-btn"
          onClick={() => setIsModalOpen(true)}
          title={`Click to zoom photo of ${member.name}`}
          aria-label={`View enlarged photo and profile of ${member.name}`}
        >
          <div className="team-avatar-wrapper">
            {hasPhoto ? (
              <div className="team-avatar-photo-frame">
                <img
                  src={imageSrc}
                  alt={member.name}
                  className="team-avatar-photo"
                  onError={() => setImageError(true)}
                  loading="lazy"
                />
                <div className="avatar-icon-pill" title="Verified Contributor">
                  <User size={11} className="avatar-user-icon" />
                </div>
              </div>
            ) : (
              <div className="team-avatar-placeholder">
                <span className="avatar-initials font-serif">{member.initials}</span>
                <div className="avatar-icon-pill" title="Team Contributor">
                  <User size={11} className="avatar-user-icon" />
                </div>
              </div>
            )}
            <div className="avatar-ring" />
            
            {/* Quick zoom hint icon on hover */}
            <div className="avatar-zoom-hint">
              <Maximize2 size={12} />
            </div>
          </div>
        </button>

        <div className="team-card-content">
          <h3 className="team-name font-serif">{member.name}</h3>
          <span className="team-role">{member.role}</span>
          
          {/* Clickable LinkedIn ID pill */}
          {linkedInHandle && (
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="team-linkedin-badge"
              title={`Open LinkedIn profile: ${linkedInHandle}`}
            >
              <Linkedin size={12} />
              <span>in/{linkedInHandle}</span>
            </a>
          )}
        </div>

        {/* GitHub and LinkedIn icon buttons */}
        <div className="team-card-socials">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn github"
              title={`${member.name} on GitHub`}
              aria-label={`${member.name} GitHub`}
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
          )}
          {linkedInUrl && (
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn linkedin"
              title={`${member.name} on LinkedIn`}
              aria-label={`${member.name} LinkedIn`}
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
          )}
        </div>
      </motion.div>

      {/* Lightbox Pop-up Modal for Judges & Reviewers */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {isModalOpen && (
            <div className="avatar-modal-root">
              <motion.div
                className="avatar-modal-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.22 }}
                onClick={() => setIsModalOpen(false)}
              />

              <div className="avatar-modal-container" onClick={() => setIsModalOpen(false)}>
                <motion.div
                  className="avatar-modal-card"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby={`modal-title-${member.id}`}
                  onClick={(e) => e.stopPropagation()}
                  initial={{ scale: 0.8, opacity: 0, y: 25 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.85, opacity: 0, y: 15 }}
                  transition={{ type: 'spring', stiffness: 380, damping: 26 }}
                >
                  <button
                    type="button"
                    className="avatar-modal-close-btn"
                    onClick={() => setIsModalOpen(false)}
                    aria-label="Close photo preview"
                  >
                    <X size={20} />
                  </button>

                  <div className="avatar-modal-photo-showcase">
                    <div className="avatar-modal-photo-glow" />
                    <div className="avatar-modal-photo-wrapper">
                      {hasPhoto ? (
                        <img
                          src={imageSrc}
                          alt={member.name}
                          className="avatar-modal-photo"
                        />
                      ) : (
                        <div className="avatar-modal-initials-view">
                          <span className="font-serif">{member.initials}</span>
                        </div>
                      )}
                      <div className="avatar-modal-seal" title="Verified SIH Core Contributor">
                        <ShieldCheck size={16} />
                      </div>
                    </div>
                  </div>

                  <div className="avatar-modal-details">
                    <div className="avatar-modal-tag">
                      <Sparkles size={13} className="text-gold" />
                      <span>SIH 2026 Core Engineering</span>
                    </div>

                    <h2 id={`modal-title-${member.id}`} className="avatar-modal-name font-serif">
                      {member.name}
                    </h2>
                    <p className="avatar-modal-role">{member.role}</p>

                    <div className="avatar-modal-actions">
                      {linkedInUrl && (
                        <a
                          href={linkedInUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="avatar-action-btn linkedin"
                        >
                          <Linkedin size={16} />
                          <span>{linkedInHandle ? `in/${linkedInHandle}` : 'LinkedIn'}</span>
                          <ExternalLink size={13} className="external-arrow" />
                        </a>
                      )}
                      {githubUrl && (
                        <a
                          href={githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="avatar-action-btn github"
                        >
                          <Github size={16} />
                          <span>GitHub</span>
                          <ExternalLink size={13} className="external-arrow" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}

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
          transform: translateY(-6px);
          box-shadow: var(--shadow-lg);
          border-color: rgba(15, 76, 76, 0.3);
        }

        /* Avatar Button Container */
        .team-avatar-btn {
          background: transparent;
          border: none;
          padding: 0;
          cursor: pointer;
          outline: none;
          position: relative;
          border-radius: 50%;
        }

        .team-avatar-btn:focus-visible .team-avatar-photo-frame,
        .team-avatar-btn:focus-visible .team-avatar-placeholder {
          outline: 3px solid var(--color-gold);
          outline-offset: 3px;
        }

        .team-avatar-wrapper {
          position: relative;
          width: 96px;
          height: 96px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .team-avatar-placeholder {
          width: 86px;
          height: 86px;
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
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
                      box-shadow 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
                      border-color 0.3s ease;
          z-index: 1;
        }

        .team-avatar-photo-frame {
          width: 86px;
          height: 86px;
          border-radius: 50%;
          border: 3px solid var(--color-white);
          box-shadow: var(--shadow-md);
          position: relative;
          background: var(--color-ivory);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
                      box-shadow 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
                      border-color 0.3s ease;
          z-index: 1;
        }

        /* POP-UP EFFECT ON HOVER: Lifts and scales up with spring physics */
        .team-avatar-btn:hover .team-avatar-photo-frame,
        .team-avatar-btn:hover .team-avatar-placeholder {
          transform: translateY(-8px) scale(1.15);
          box-shadow: 0 16px 32px -4px rgba(15, 76, 76, 0.32),
                      0 0 0 4px rgba(198, 161, 91, 0.45);
          border-color: var(--color-gold);
        }

        .team-avatar-photo {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .team-avatar-btn:hover .team-avatar-photo {
          transform: scale(1.1);
        }

        .avatar-initials {
          font-size: 1.7rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: #E8D3A2;
        }

        .avatar-icon-pill {
          position: absolute;
          bottom: 0px;
          right: 0px;
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
          z-index: 2;
          transition: transform 0.3s ease;
        }

        .team-avatar-btn:hover .avatar-icon-pill {
          transform: scale(1.12);
        }

        /* Gold dashed accent ring */
        .avatar-ring {
          position: absolute;
          inset: 0px;
          border-radius: 50%;
          border: 1.5px dashed var(--color-gold);
          opacity: 0.5;
          pointer-events: none;
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1),
                      opacity 0.3s ease;
        }

        .team-avatar-btn:hover .avatar-ring {
          transform: scale(1.28) rotate(45deg);
          opacity: 1;
          border-color: var(--color-gold);
        }

        /* Hover zoom hint badge */
        .avatar-zoom-hint {
          position: absolute;
          top: -3px;
          right: -3px;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--color-teal);
          color: #FFF5DB;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--color-white);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          z-index: 4;
          opacity: 0;
          transform: scale(0.5) translateY(4px);
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          pointer-events: none;
        }

        .team-avatar-btn:hover .avatar-zoom-hint {
          opacity: 1;
          transform: scale(1) translateY(0);
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

        .team-linkedin-badge {
          margin-top: 0.35rem;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.22rem 0.7rem;
          border-radius: var(--radius-full);
          background: var(--color-gold-soft);
          color: var(--color-teal);
          border: 1px solid rgba(198, 161, 91, 0.35);
          font-size: 0.74rem;
          font-weight: 600;
          font-family: var(--font-mono);
          text-decoration: none;
          transition: all 0.2s ease;
          max-width: 220px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .team-linkedin-badge:hover {
          background: #0A66C2;
          color: #FFFFFF;
          border-color: #0A66C2;
          transform: translateY(-1px);
          box-shadow: var(--shadow-sm);
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

        .social-btn.linkedin:hover {
          background: #0A66C2;
          border-color: #0A66C2;
          color: #FFFFFF;
        }

        /* ---------------------------------------------------- */
        /* LIGHTBOX POP-UP MODAL STYLES                         */
        /* ---------------------------------------------------- */
        .avatar-modal-root {
          position: fixed;
          inset: 0;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .avatar-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(10, 30, 30, 0.72);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        .avatar-modal-container {
          position: fixed;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          z-index: 100000;
        }

        .avatar-modal-card {
          position: relative;
          width: 100%;
          max-width: 440px;
          background: var(--color-white);
          border-radius: 28px;
          padding: 2.75rem 2.25rem 2.25rem 2.25rem;
          box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.45),
                      0 0 0 1px rgba(198, 161, 91, 0.3);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1.5rem;
          overflow: hidden;
        }

        .avatar-modal-close-btn {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid var(--color-border);
          background: var(--color-ivory);
          color: var(--color-charcoal);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          z-index: 10;
        }

        .avatar-modal-close-btn:hover {
          background: var(--color-teal);
          color: var(--color-white);
          border-color: var(--color-teal);
          transform: rotate(90deg);
        }

        .avatar-modal-photo-showcase {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .avatar-modal-photo-glow {
          position: absolute;
          inset: -12px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(198, 161, 91, 0.35) 0%, rgba(15, 76, 76, 0.1) 70%, transparent 100%);
          filter: blur(12px);
        }

        .avatar-modal-photo-wrapper {
          position: relative;
          width: 170px;
          height: 170px;
          border-radius: 50%;
          border: 4px solid var(--color-white);
          box-shadow: 0 12px 36px -6px rgba(15, 76, 76, 0.35),
                      0 0 0 3px var(--color-gold);
          background: var(--color-ivory);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .avatar-modal-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .avatar-modal-initials-view {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, var(--color-teal) 0%, var(--color-teal-dark) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #E8D3A2;
          font-size: 3.5rem;
          font-weight: 700;
        }

        .avatar-modal-seal {
          position: absolute;
          bottom: 8px;
          right: 8px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--color-gold);
          color: var(--color-white);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 3px solid var(--color-white);
          box-shadow: var(--shadow-sm);
        }

        .avatar-modal-details {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          width: 100%;
        }

        .avatar-modal-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-teal);
          background: var(--status-safe-soft);
          padding: 0.28rem 0.8rem;
          border-radius: var(--radius-full);
          margin-bottom: 0.25rem;
        }

        .avatar-modal-name {
          font-size: 1.7rem;
          color: var(--color-teal);
          font-weight: 700;
          line-height: 1.2;
          margin: 0;
        }

        .avatar-modal-role {
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-sage);
          margin: 0;
        }

        .avatar-modal-actions {
          display: flex;
          gap: 0.75rem;
          width: 100%;
          margin-top: 1rem;
          justify-content: center;
        }

        .avatar-action-btn {
          flex: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.7rem 1rem;
          border-radius: var(--radius-full);
          font-size: 0.88rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
          border: 1px solid var(--color-border);
        }

        .avatar-action-btn.linkedin {
          background: #0A66C2;
          color: #FFFFFF;
          border-color: #0A66C2;
        }

        .avatar-action-btn.linkedin:hover {
          background: #004182;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(10, 102, 194, 0.35);
        }

        .avatar-action-btn.github {
          background: #24292E;
          color: #FFFFFF;
          border-color: #24292E;
        }

        .avatar-action-btn.github:hover {
          background: #000000;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
        }

        .avatar-action-btn .external-arrow {
          opacity: 0.7;
          margin-left: -2px;
        }
      `}</style>
    </>
  );
}
