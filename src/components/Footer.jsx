import React, { useEffect, useState, useRef } from "react";
import "./footer.css";

const Footer = () => {
  const [visible, setVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1, rootMargin: "0px 0px -20px 0px" }
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className={`footer ${visible ? "footer-visible" : ""}`}>

      {/* Glow accent line */}
      <div className="footer-glow-line" />

      <div className="footer-content">

        <div className="footer-left">
          <h2 className="footer-brand">Kalya Systems</h2>
          <p>
            Building futuristic web experiences, scalable platforms,
            and intelligent digital tools.
          </p>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <span className="footer-col-label">Navigate</span>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
        </nav>

        <div className="footer-social" aria-label="Social links">
          <span className="footer-col-label">Connect</span>
          <a href="#" aria-label="GitHub">GitHub</a>
          <a href="#" aria-label="LinkedIn">LinkedIn</a>
          <a href="#" aria-label="Email">Email</a>
        </div>

      </div>

      <div className="footer-divider" />

      <div className="footer-bottom">
        © {new Date().getFullYear()} Kalya Systems • All Rights Reserved
      </div>

    </footer>
  );
};

export default Footer;