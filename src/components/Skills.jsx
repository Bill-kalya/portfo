import React from 'react';
import './Skills.css';

import progImg from '../assets/programming.png';
import frontendImg from '../assets/frontend.png';
import backendImg from '../assets/backend.png';
import webImg from '../assets/web.jpeg';
import mobileImg from '../assets/mobile.jpeg';

const SkillsCard = ({ skills, badge, title, frontBg }) => {
  return (
    <div className="skills-card">
      <div className="content">

        <div className="front" style={{ backgroundImage: `url(${frontBg})` }}>
          <div className="overlay" />
          <div className="front-content">
            <small className="badge">{badge}</small>
            <div className="description">
              <p className="title-text"><strong>{title}</strong></p>
              {skills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-name">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="back">
          <div className="back-content">
            <strong>{title}</strong>
          </div>
        </div>

      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="skills-section">
      <div className="skills-header">
        <h1 className="skills-title">Skills</h1>
        <p className="skills-subtitle">These are the acquired skill cards. More to come…</p>
      </div>
      <div className="skills-container">
        <SkillsCard
          badge="CORE"
          title="Programming Languages"
          frontBg={progImg}
          skills={[
            { name: "C++",    level: 95 },
            { name: "Java",   level: 90 },
            { name: "Python", level: 80 },
            { name: "C#",     level: 75 },
            { name: "C",      level: 85 },
          ]}
        />
        <SkillsCard
          badge="UI / UX"
          title="Frontend Design"
          frontBg={frontendImg}
          skills={[
            { name: "HTML/CSS",    level: 95 },
            { name: "JavaScript",  level: 90 },
            { name: "React",       level: 45 },
          ]}
        />
        <SkillsCard
          badge="SERVER"
          title="Backend Development"
          frontBg={backendImg}
          skills={[
            { name: "Node.js",         level: 88 },
            { name: "Python/Flask",    level: 82 },
            { name: "Java/Springboot", level: 75 },
            { name: "Postgres SQL",    level: 25 },
          ]}
        />
        <SkillsCard
          badge="FULL STACK"
          title="Web Development"
          frontBg={webImg}
          skills={[
            { name: "React",       level: 43 },
            { name: "HTML/CSS/JS", level: 78 },
          ]}
        />
        <SkillsCard
          badge="MOBILE"
          title="Mobile Development"
          frontBg={mobileImg}
          skills={[
            { name: "React Native", level: 43 },
            { name: "Flutter",      level: 78 },
          ]}
        />
      </div>
    </div>
  );
};

export default Skills;