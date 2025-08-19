import { useState, useEffect } from "react";
import Saturn from "./components/saturn.jsx";
import ProfileCard from "./components/profilecard";
import Experience from "./components/experience";
import ProjectCards from "./components/projects";
import "./App.css";
import SocialIcons from "./components/socialicons.jsx";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showProfileCard, setShowProfileCard] = useState(false);
  const [showProjectCards, setShowProjectCards] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showSocialIcons, setShowSocialIcons] = useState(false);

  useEffect(() => {
    setLoading(false); // Remove the timer for immediate interaction
    return () => {}; // No cleanup needed
  }, []);

  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  const handleScroll = debounce(() => {
    const profileCard = document.querySelector('.profile-card');
    const projectCards = document.querySelector('.project-cards');
    const experience = document.querySelector('.experience');
    const socialIcons = document.querySelector('.social-icons');

    console.log('Scrolling...');
    if (profileCard && profileCard.getBoundingClientRect().top < window.innerHeight) {
      console.log('ProfileCard is in view');
      setShowProfileCard(true);
    }
    if (projectCards && projectCards.getBoundingClientRect().top < window.innerHeight) {
      console.log('ProjectCards is in view');
      setShowProjectCards(true);
    }
    if (experience && experience.getBoundingClientRect().top < window.innerHeight) {
      console.log('Experience is in view');
      setShowExperience(true);
    }
    if (socialIcons && socialIcons.getBoundingClientRect().top < window.innerHeight) {
      console.log('SocialIcons is in view');
      setShowSocialIcons(true);
    }
  }, 100); // 100 ms debounce

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="app-wrapper">
      {/* Loader */}
      <div className={`loader-wrapper ${loading ? "" : "shrink"}`}>
        <Saturn />
      </div>

      {/* Main content appears after loader shrinks */}
      <div className={`main-content ${loading ? "" : "visible"}`}>
        {showProfileCard && (
          <div className="content-section profile-card">
            <ProfileCard />
          </div>
        )}
        
        {showProjectCards && (
          <div className="content-section project-cards">
            <ProjectCards />
          </div>
        )}
        
        {showExperience && (
          <div className="content-section experience">
            <Experience />
          </div>
        )}
        
        {showSocialIcons && (
          <div className="content-section social-icons">
            <SocialIcons />
          </div>
        )}
      </div> {/* Closing tag for main-content */}
    </div>
  );
}
