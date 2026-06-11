import React, { useState, useEffect, useRef } from 'react';
import './CVNotification.css';

// ── Replace with your actual CV file path ──────────────────────
import cvFile from '../assets/Kalya kiprono.pdf';

const DOTS_DURATION   = 2800;   // ms the "..." loads
const TRIGGER_DELAY   = 40000;  // ms after page load before popup appears
const SHARE_SUPPORTED = typeof navigator !== 'undefined' && !!navigator.share;

const CVNotification = () => {
  const [phase, setPhase]       = useState('hidden');   // hidden | entering | dots | open | leaving
  const [dotCount, setDotCount] = useState(1);
  const [glitch, setGlitch]     = useState(false);
  const [scanLine, setScanLine] = useState(true);
  const timers                  = useRef([]);

  const after = (fn, ms) => {
    const id = setTimeout(fn, ms);
    timers.current.push(id);
    return id;
  };

  // ── Trigger sequence ───────────────────────────────────────
  useEffect(() => {
    after(() => setPhase('entering'), TRIGGER_DELAY);

    return () => timers.current.forEach(clearTimeout);
  }, []);

  // ── Entering → dots → open ─────────────────────────────────
  useEffect(() => {
    if (phase === 'entering') {
      // Random glitch flashes during entrance
      after(() => setGlitch(true),  120);
      after(() => setGlitch(false), 260);
      after(() => setGlitch(true),  400);
      after(() => setGlitch(false), 500);

      after(() => setPhase('dots'), 600);
    }

    if (phase === 'dots') {
      // Animate the three dots
      let count = 1;
      const dotTimer = setInterval(() => {
        count = count >= 3 ? 1 : count + 1;
        setDotCount(count);
      }, 420);
      timers.current.push(dotTimer);

      after(() => {
        clearInterval(dotTimer);
        setDotCount(3);
        // Glitch burst before reveal
        setGlitch(true);
        after(() => setGlitch(false), 80);
        after(() => setGlitch(true),  160);
        after(() => setGlitch(false), 220);
        after(() => setPhase('open'), 300);
      }, DOTS_DURATION);
    }

    if (phase === 'open') {
      // Scan line sweeps once on open
      setScanLine(true);
      after(() => setScanLine(false), 1800);
    }
  }, [phase]);

  // ── Dismiss ────────────────────────────────────────────────
  const dismiss = () => {
    setPhase('leaving');
    after(() => setPhase('hidden'), 700);
  };

  // ── Actions ────────────────────────────────────────────────
  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = cvFile;
    a.download = 'Kalya_Billgates_Kiprono_CV.pdf';
    a.click();
  };

  const handleShare = async () => {
    try {
      if (SHARE_SUPPORTED) {
        const res  = await fetch(cvFile);
        const blob = await res.blob();
        const file = new File([blob], 'Kalya_CV.pdf', { type: 'application/pdf' });

        if (navigator.canShare?.({ files: [file] })) {
          await navigator.share({ files: [file], title: 'Kalya Billgates — CV' });
          return;
        }
      }
      // Fallback: copy link
      await navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    } catch {
      alert('Share not supported on this device.');
    }
  };

  if (phase === 'hidden') return null;

  return (
    <div className={`cv-overlay ${phase === 'open' ? 'cv-overlay--dim' : ''}`}
         onClick={(e) => e.target === e.currentTarget && dismiss()}>

      <div className={`cv-popup
        cv-popup--${phase}
        ${glitch ? 'cv-popup--glitch' : ''}
      `}>

        {/* Corner brackets */}
        <span className="cv-corner cv-corner--tl" />
        <span className="cv-corner cv-corner--tr" />
        <span className="cv-corner cv-corner--bl" />
        <span className="cv-corner cv-corner--br" />

        {/* Scan line */}
        {scanLine && <div className="cv-scan-line" />}

        {/* Header bar */}
        <div className="cv-header">
          <div className="cv-header__left">
            <span className="cv-dot cv-dot--red"   />
            <span className="cv-dot cv-dot--amber" />
            <span className="cv-dot cv-dot--green" />
          </div>
          <span className="cv-header__title">
            KALYA_SYS // SECURE CHANNEL
          </span>
          <button className="cv-close" onClick={dismiss} aria-label="Dismiss">✕</button>
        </div>

        {/* ── DOTS phase ── */}
        {(phase === 'dots' || phase === 'entering') && (
          <div className="cv-dots-phase">
            <div className="cv-incoming-label">INCOMING INTEL</div>
            <div className="cv-dots">
              {[1,2,3].map(i => (
                <span key={i} className={`cv-dot-pulse ${i <= dotCount ? 'cv-dot-pulse--on' : ''}`} />
              ))}
            </div>
            <div className="cv-decrypting">DECRYPTING PAYLOAD{'.'.repeat(dotCount)}</div>
          </div>
        )}

        {/* ── OPEN phase ── */}
        {phase === 'open' && (
          <div className="cv-body">
            {/* Top alert strip */}
            <div className="cv-alert-strip">
              <span className="cv-alert-strip__icon">⬡</span>
              INTEL PACKAGE RECEIVED — CLASSIFICATION: OPEN
              <span className="cv-alert-strip__icon">⬡</span>
            </div>

            {/* File card */}
            <div className="cv-file-card">
              <div className="cv-file-card__icon">
                <svg viewBox="0 0 48 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0H32L48 16V56H8V0Z" fill="rgba(0,255,255,0.06)" stroke="#00ffff" strokeWidth="1.5"/>
                  <path d="M32 0L32 16H48" stroke="#00ffff" strokeWidth="1.5" fill="none"/>
                  <text x="10" y="38" fill="#00ffff" fontSize="10" fontFamily="monospace" fontWeight="bold">PDF</text>
                </svg>
              </div>

              <div className="cv-file-card__info">
                <p className="cv-file-card__name">Kalya_Billgates_Kiprono_CV.pdf</p>
                <p className="cv-file-card__meta">
                  <span className="cv-tag">VERIFIED</span>
                  <span className="cv-tag">ENCRYPTED</span>
                  <span className="cv-tag">2025</span>
                </p>
                <p className="cv-file-card__desc">
                  Full-stack developer profile · Skills · Projects · Clearance Level: PUBLIC
                </p>
              </div>
            </div>

            {/* Transmission log */}
            <div className="cv-log">
              <div className="cv-log__line"><span className="cv-log__ts">[00:00:01]</span> SOURCE: KALYA_SYS CENTRAL</div>
              <div className="cv-log__line"><span className="cv-log__ts">[00:00:02]</span> PAYLOAD: curriculum_vitae.pdf</div>
              <div className="cv-log__line cv-log__line--blink"><span className="cv-log__ts">[00:00:03]</span> STATUS: READY FOR EXTRACTION ▋</div>
            </div>

            {/* Actions */}
            <div className="cv-actions">
              <button className="cv-btn cv-btn--primary" onClick={handleDownload}>
                <span className="cv-btn__icon">↓</span>
                DOWNLOAD FILE
              </button>
              <button className="cv-btn cv-btn--secondary" onClick={handleShare}>
                <span className="cv-btn__icon">⇗</span>
                SHARE INTEL
              </button>
            </div>

            <p className="cv-footer-note">
              // TRANSMISSION WILL SELF-DISMISS ON CLOSE · KALYA SYSTEMS {new Date().getFullYear()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CVNotification;