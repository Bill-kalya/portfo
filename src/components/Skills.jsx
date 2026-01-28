// Skills.jsx
import React from 'react';
import './Skills.css';

import progImg from '../assets/programming.png';
import frontendImg from '../assets/frontend.png';
import backendImg from '../assets/backend.png';
import webImg from '../assets/web.jpeg';
import mobileImg from '../assets/mobile.jpeg';

const SkillsCard = ({ backText, badge, title, footer, frontBg }) => {
  return (
    <div className="skills-card">
      <div className="content">

        {/* BACK */}
        <div className="back">
          <div className="back-content">
            <strong>{backText}</strong>
          </div>
        </div>

        {/* FRONT */}
        <div
          className="front"
          style={{ backgroundImage: `url(${frontBg})` }}
        >
          <div className="overlay" />

          <div className="front-content">
            <small className="badge">{badge}</small>

            <div className="description">
              <p className="title-text">
                <strong>{title}</strong>
              </p>
              <p className="card-footer">{footer}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="skills-container">

      <SkillsCard
        backText="Programming Languages"
        badge="CORE"
        title="Programming"
        footer="Logic • Algorithms • Performance"
        frontBg={progImg}
      />

      <SkillsCard
        backText="Frontend Development"
        badge="UI / UX"
        title="Frontend"
        footer="React • Animations • UX"
        frontBg={frontendImg}
      />

      <SkillsCard
        backText="Backend Development"
        badge="SERVER"
        title="Backend"
        footer="APIs • Databases • Security"
        frontBg={backendImg}
      />

      <SkillsCard
        backText="Web Development"
        badge="FULL STACK"
        title="Web"
        footer="Modern • Scalable • Fast"
        frontBg={webImg}
      />

      <SkillsCard
        backText="Mobile Development"
        badge="MOBILE"
        title="Mobile"
        footer="Flutter • Android • UX"
        frontBg={mobileImg}
      />

    </div>
  );
};

export default Skills;
