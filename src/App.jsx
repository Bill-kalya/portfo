import { useState, useEffect, useRef } from "react";

import Saturn from "./components/saturn.jsx";
import ProfileCard from "./components/profilecard";
import Skills from "./components/Skills.jsx";
import ProjectCards from "./components/projects";
import SocialIcons from "./components/socialicons.jsx";
import SpaceBackground from "./components/SpaceBackground";
import Footer from "./components/Footer.jsx";
import "./App.css";
import CVNotification from "./components/CVNotification.jsx";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [contentReady, setContentReady] = useState(false);
  const [showProjectCards, setShowProjectCards] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showSocialIcons, setShowSocialIcons] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const projectRef = useRef(null);
  const skillsRef = useRef(null);
  const socialRef = useRef(null);

  // Loader → content transition
  useEffect(() => {
    const loaderTimer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(loaderTimer);
  }, []);

  // Stagger profile card entrance after loader fades
  useEffect(() => {
    if (!loading) {
      const t1 = setTimeout(() => setContentReady(true), 300);
      const t2 = setTimeout(() => setShowProfile(true), 600);
      return () => { clearTimeout(t1); clearTimeout(t2); };
    }
  }, [loading]);

  // IntersectionObserver for scroll-triggered sections
  useEffect(() => {
    if (!contentReady) return;

    const targetRefs = [
      projectRef.current,
      skillsRef.current,
      socialRef.current,
    ].filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const id = entry.target.dataset.section;
          if (id === "projects") setShowProjectCards(true);
          if (id === "skills") setShowSkills(true);
          if (id === "social") setShowSocialIcons(true);

          observer.unobserve(entry.target);
        });
      },
      {
        root: null, // document/viewport scroll root
        threshold: 0.1,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    targetRefs.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [contentReady]);




  return (
    <div className="app-wrapper">
      {/* Loader */}
      <div className={`loader-wrapper ${!loading ? "shrink" : ""}`}>
        <div className="loader-inner">
          <Saturn />
          <div className="loader-pulse" />
        </div>
      </div>

      <SpaceBackground />

      {/* Main content */}
      <div className={`main-content ${contentReady ? "visible" : ""}`}>
        {/* Profile Card */}
        <div
          id="about"
          className={`content-section profile-section ${showProfile ? "visible" : ""}`}
        >
          <ProfileCard />
        </div>

        {/* Project Cards */}
        <div
          id="projects"
          ref={projectRef}
          data-section="projects"
          className={`content-section project-section ${showProjectCards ? "visible" : ""}`}
        >
          {showProjectCards && <ProjectCards />}
        </div>

        {/* Skills */}
        <div
          id="skills"
          ref={skillsRef}
          data-section="skills"
          className={`content-section skills-section ${showSkills ? "visible" : ""}`}
        >
          {showSkills && <Skills />}
        </div>

        {/* Social Icons */}
        <div
          ref={socialRef}
          data-section="social"
          className={`content-section social-section ${showSocialIcons ? "visible" : ""}`}
        >
          {showSocialIcons && <SocialIcons />}
        </div>
      </div>

      <Footer />
      
      <CVNotification />
    </div>
  );
}
