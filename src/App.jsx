import { useState, useEffect, useRef, useCallback } from "react";
import Saturn from "./components/saturn.jsx";
import ProfileCard from "./components/profilecard";
import Skills from "./components/Skills.jsx";
import ProjectCards from "./components/projects";
import SocialIcons from "./components/socialicons.jsx";
import "./App.css";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showProjectCards, setShowProjectCards] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showSocialIcons, setShowSocialIcons] = useState(false);

  // Refs for scroll-triggered sections
  const projectRef = useRef(null);
  const skillsRef = useRef(null);
  const socialRef = useRef(null);

  // Loader effect
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 200); // allow loader animation
    return () => clearTimeout(timer);
  }, []);

  // Debounce helper
  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };

  // Scroll handler (for everything except ProfileCard)
  const handleScroll = useCallback(
    debounce(() => {
      const windowHeight = window.innerHeight;

      if (!showProjectCards && projectRef.current) {
        const top = projectRef.current.getBoundingClientRect().top;
        if (top < windowHeight) setShowProjectCards(true);
      }

      if (!showSkills && skillsRef.current) {
        const top = skillsRef.current.getBoundingClientRect().top;
        if (top < windowHeight) setShowSkills(true);
      }

      if (!showSocialIcons && socialRef.current) {
        const top = socialRef.current.getBoundingClientRect().top;
        if (top < windowHeight) setShowSocialIcons(true);
      }
    }, 100),
    [showProjectCards, showSkills, showSocialIcons]
  );

  // Add scroll listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // trigger once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="app-wrapper">
      {/* Loader */}
      <div className={`loader-wrapper ${loading ? "" : "shrink"}`}>
        <Saturn />
      </div>

      {/* Main content */}
      <div className={`main-content ${loading ? "" : "visible"}`}>
        {/* Profile Card always appears after loader */}
        {!loading && (
          <div className="content-section profile-card visible">
            <ProfileCard />
          </div>
        )}

        {/* Project Cards */}
        <div
          ref={projectRef}
          className={`content-section project-cards ${showProjectCards ? "visible" : ""}`}
        >
          {showProjectCards && <ProjectCards />}
        </div>

        {/* Skills card */}
        <div
          ref={skillsRef}
          className={`content-section skills ${showSkills ? "visible" : ""}`}
        >
          {showSkills && <Skills />}
        </div>

        {/* Social Icons */}
        <div
          ref={socialRef}
          className={`content-section social-icons ${showSocialIcons ? "visible" : ""}`}
        >
          {showSocialIcons && <SocialIcons />}
        </div>
      </div>
    </div>
  );
}
