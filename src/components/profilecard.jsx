import React, { useEffect, useRef, useState, useCallback } from 'react';
import './profilecard.css';

import pic1 from '../assets/pic1.png';
import pic2 from '../assets/pic2.webp';
import typeSound from '../assets/sounds/Sci Fi Typewriter.m4a';

const ProfileCard = () => {
  const detailsRef  = useRef(null);
  const glowRef     = useRef(null);
  const audioRef    = useRef(null);
  const activeTimer = useRef(null);   // single timer ref — no dangling timeouts

  const [showFinalPic,  setShowFinalPic]  = useState(false);
  const [scanDone,      setScanDone]      = useState(false);
  const [audioReady,    setAudioReady]    = useState(false);

  const detailsLines = [
    "<h1>KALYA BILLGATES KIPRONO</h1>",
    "<p><span>Role:</span> Full Stack Developer</p>",
    "<p><span>Specialties:</span> Mobile &amp; Web Developer</p>",
    "<p><span>Status:</span> <span class='status'>● Available</span></p>",
  ];

  const glowText =
    "A qualified IT professional with a strong foundation in Information Science and Technology. " +
    "Having recently completed my studies, I'm currently seeking opportunities to apply my skills " +
    "in web and mobile development. Passionate about creating innovative solutions that drive real-world impact.";

  // ── Audio setup ───────────────────────────────────────────
  useEffect(() => {
    const audio = new Audio(typeSound);
    audio.volume = 0.18;
    audio.preload = 'auto';
    audioRef.current = audio;

    const markReady = () => setAudioReady(true);
    audio.addEventListener('canplaythrough', markReady);
    return () => audio.removeEventListener('canplaythrough', markReady);
  }, []);

  // Unlock audio on first user gesture (iOS / autoplay policy)
  useEffect(() => {
    const unlock = () => {
      const a = audioRef.current;
      if (!a) return;
      a.play().then(() => { a.pause(); a.currentTime = 0; }).catch(() => {});
      setAudioReady(true);
      window.removeEventListener('pointerdown', unlock);
    };
    window.addEventListener('pointerdown', unlock, { once: true });
    return () => window.removeEventListener('pointerdown', unlock);
  }, []);

  // ── Sound helper — only plays for printable non-tag chars ─
  const playTick = useCallback((char) => {
    const a = audioRef.current;
    if (!a || !audioReady) return;
    if (!char || /[\s<>/="']/.test(char)) return;
    a.currentTime = 0;
    a.play().catch(() => {});
  }, [audioReady]);

  // ── Core typewriter ───────────────────────────────────────
  // Returns a cancel function so we can clean up on unmount
  const typeWriter = useCallback((lines, el, onDone, speed = 18, pause = 320) => {
    let lineIdx = 0;
    let charIdx = 0;
    let cancelled = false;

    // Strip HTML tags to find "visible" characters for sound
    const stripTags = (s) => s.replace(/<[^>]*>/g, '');

    function tick() {
      if (cancelled) return;
      if (lineIdx >= lines.length) {
        el.innerHTML = lines.join('');
        onDone?.();
        return;
      }

      const line    = lines[lineIdx];
      const visible = stripTags(line);

      if (charIdx <= line.length) {
        const partial = line.substring(0, charIdx);

        // Count how many visible chars we've typed so far
        const visibleSoFar = stripTags(partial);
        const lastChar     = visibleSoFar[visibleSoFar.length - 1];

        el.innerHTML =
          lines.slice(0, lineIdx).join('') +
          partial +
          '<span class="cursor">|</span>';

        playTick(lastChar);
        charIdx++;
        activeTimer.current = setTimeout(tick, speed);
      } else {
        lineIdx++;
        charIdx = 0;
        activeTimer.current = setTimeout(tick, pause);
      }
    }

    tick();
    return () => { cancelled = true; clearTimeout(activeTimer.current); };
  }, [playTick]);

  // ── Sequence: details → glow → reveal pic ────────────────
  useEffect(() => {
    const detailsEl = detailsRef.current;
    const glowEl    = glowRef.current;
    if (!detailsEl || !glowEl) return;

    // Initialise glow placeholder
    glowEl.innerHTML = '<span class="glow-placeholder">About me...</span>';

    let cancelGlow;
    const cancelDetails = typeWriter(detailsLines, detailsEl, () => {
      // Small dramatic pause before glow section starts
      activeTimer.current = setTimeout(() => {
        glowEl.innerHTML = '';
        cancelGlow = typeWriter(
          [glowText],
          glowEl,
          () => {
            setScanDone(true);
            // Slight delay so scan completes visually before swap
            activeTimer.current = setTimeout(() => setShowFinalPic(true), 900);
          },
          14,   // slightly slower for the bio paragraph
          0
        );
      }, 500);
    });

    return () => {
      cancelDetails?.();
      cancelGlow?.();
      clearTimeout(activeTimer.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="profile-card-wrapper">
      <div className="card" role="region" aria-label="Profile card">
        <div className="inner-border" aria-hidden="true" />

        <div className="profile-details">
          {/* ── Photo ── */}
          <div className={`profile-pic ${scanDone ? 'scan-done' : ''}`}>
            <img src={pic1} alt="Profile placeholder" className="pic-base" />

            {/* Scan line animates while typing */}
            {!scanDone && <div className="scan-line" aria-hidden="true" />}

            {/* Final photo fades in after typing finishes */}
            <img
              src={pic2}
              alt="Kalya Billgates Kiprono"
              className={`pic-final ${showFinalPic ? 'visible' : ''}`}
            />
          </div>

          {/* ── Typed details ── */}
          <div className="details" ref={detailsRef} aria-live="polite" />
        </div>

        {/* ── Typed bio ── */}
        <div className="glow-box" ref={glowRef} aria-live="polite" />
      </div>
    </div>
  );
};

export default ProfileCard;