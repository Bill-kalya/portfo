import React from 'react';
import './projects.css';

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
      title: "Mobile Health App",
      description: "Created a mobile application to track and monitor health metrics using React Native. Improved user engagement and received positive feedback from beta testers.",
      imageAlt: "mobile app",
      buttonText: "View More"
    },
    {
      id: 3,
      title: "University Event Management System",
      description: "Developed a web-based system for managing university events and registrations using Angular, Node.js, and MongoDB. Streamlined event management process, reducing manual work by 50%.",
      imageAlt: "mobile app",
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
              <div className="image-placeholder">
                <div className="placeholder-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 16L8 12L11.5 15.5L14.5 12.5L16 14L20 10M4 16V20H20V4H4V16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
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