import React, { useEffect, useRef, useState } from 'react';
import './ProfileCard.css';

// Import images from assets
import pic1 from '../assets/pic1.png';
import pic2 from '../assets/pic2.png';
import typeSound from '../assets/sounds/Sci Fi Typewriter.m4a';


const ProfileCard = () => {
  const detailsRef = useRef(null);
  const glowRef = useRef(null);
  const [showFinalPic, setShowFinalPic] = useState(false);

  const detailsLines = [
    "<h1>KALYA BILLGATES KIPRONO</h1>",
    "<p><span>Role:</span> Full Stack Developer</p>",
    "<p><span>Specialties:</span> Mobile and Web Developer</p>",
    "<p><span>Status:</span> <span class='status'>Available</span></p>"
  ];

  const glowLines = [
    "A qualified IT professional with a strong foundation in Information Science and Technology. Having recently completed my studies, I'm currently seeking opportunities to apply my skills in web and mobile development. I'm passionate about creating innovative solutions that drive real-world impact."
  ];

  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio(typeSound);
    audio.volume = 0.25; // subtle sci-fi level
    audioRef.current = audio;
  }, []);

  useEffect(() => {
    const unlock = () => {
      if (audioRef.current) {
        audioRef.current.play().then(() => {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }).catch(() => {});
      }
      document.removeEventListener("click", unlock);
    };

    document.addEventListener("click", unlock);
  }, []);

  useEffect(() => {
    const detailsEl = detailsRef.current;
    const glowEl = glowRef.current;

    if (!detailsEl || !glowEl) return;

    typeLine(detailsLines, detailsEl, () => {
      typeLine(glowLines, glowEl, () => {
        setShowFinalPic(true);
      });
    });
  }, []);

  const typeLine = (lines, container, callback) => {
  let lineIndex = 0;
  let charIndex = 0;

  function type() {
    if (lineIndex < lines.length) {
      let currentLine = lines[lineIndex];

      if (charIndex <= currentLine.length) {
        container.innerHTML =
          lines.slice(0, lineIndex).join('') +
          currentLine.substring(0, charIndex) +
          '|';

        const currentChar = currentLine.charAt(charIndex - 1);

        // Play sound only for visible characters
        if (
          audioRef.current &&
          currentChar &&
          currentChar !== ' ' &&
          currentChar !== '<' &&
          currentChar !== '>' &&
          !/[/=]/.test(currentChar)
        ) {
          audioRef.current.currentTime = 0;
          audioRef.current.play().catch(() => {});
        }

        charIndex++;
        setTimeout(type, 20);
      } else {
        lineIndex++;
        charIndex = 0;
        setTimeout(type, 350);
      }
    } else {
      container.innerHTML = lines.join('');
      if (callback) callback();
    }
  }

  type();
};


  return (
    <div className="card">
      <div className="inner-border"></div>
      <div className="profile-details">
        <div className="profile-pic">
  <img src={pic1} alt="Initial" className="pic1" />
  
  {/* Continuous scan line while typing */}
  <div className="scan-line"></div>

  {/* Final pic appears after typing */}
  {showFinalPic && <img src={pic2} alt="Final" className="pic2 visible" />}
</div>

        <div className="details" ref={detailsRef}></div>
      </div>
      <div className="glow-box" ref={glowRef}>
        About me...
      </div>
    </div>
  );
};

export default ProfileCard;
