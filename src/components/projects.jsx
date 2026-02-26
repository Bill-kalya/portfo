import React from 'react';
import './projects.css';
import frameimg from '../assets/frame-animation.png';
import arborealimg from '../assets/arboreal.png';

const ProjectCards = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Website Development",
      description: "Developed a fully functional e-commerce website for a local business using HTML, CSS, and JavaScript. Increased the client's online sales by 30% within the first three months.",
      imageAlt: "website",
      buttonText: "View More"
    },
    {
      id: 2,
      title: "Arboreal Archive",
      description: "Explore, learn, and compare tree species — their categories, life spans, and unique traits — all in one interactive digital forest.",
      imageAlt: "mobile app",
      image: arborealimg,
      link: "https://bill-kalya.github.io/arboreal_archive/",
      buttonText: "View More"
    },
    {
      id: 3,
      title: "Frame-Animation",
      description: "A sleek, fluid animation that brings modern elegance and movement to any webpage.",
      imageAlt: "frame animation",
      image: frameimg,
      link: "https://bill-kalya.github.io/frame-animation/",
      buttonText: "View More"
    }
  ];

  return (
    <div className="project-container">
      <h1 className="section-title">Featured Projects</h1>
      <p className="section-subtitle">Explore my latest work and accomplishments</p>
      
      <div className="flex-container-cards">
        {projects.map(project => (
          <div className="card" key={project.id}>
            <div className="card-img-shadow">
              {project.image ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <img src={project.image} alt={project.imageAlt || project.title} style={{ cursor: 'pointer' }} />
                </a>
              ) : (
                <div className="image-placeholder">
                  <div className="placeholder-icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M4 16L8 12L11.5 15.5L14.5 12.5L16 14L20 10M4 16V20H20V4H4V16Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              )}
            </div>
            <div className="card-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="button-shadow">
                <div className="card-button">{project.buttonText}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCards;