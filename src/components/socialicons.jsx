import React, { useState } from 'react';
import './SocialIcons.css';

// Import all images (keeping your original imports)
import whatimg from '../assets/whatsapp.png';
import discordimg from '../assets/discord.png';
import gitimg from '../assets/github.png';
import gmailimg from '../assets/gmail.png';
import instaimg from '../assets/instagram.png';
import linkedinimg from '../assets/linkedin.png';
import phoneimg from '../assets/phone.png';

const SocialIcons = () => {
  const [activeTooltip, setActiveTooltip] = useState(null);

  // Create an images object for debugging
  const images = {
    whatsapp: whatimg,
    discord: discordimg,
    github: gitimg,
    gmail: gmailimg,
    instagram: instaimg,
    linkedin: linkedinimg,
    phone: phoneimg
  };

  console.log('Imported images:', images);

  const socials = [
    {
      id: 'phone',
      name: 'Phone',
      username: '+254 748 623 579',
      about: 'Call / SMS',
      color: '#22c55e',
      icon: phoneimg
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      username: '+254 113 120 076',
      about: 'Chat on WhatsApp',
      color: '#25D366',
      icon: whatimg
    },
    {
      id: 'discord',
      name: 'Discord',
      username: 'kalya#0001',
      about: 'Gaming / Dev',
      color: '#5865F2',
      icon: discordimg
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      username: 'linkedin.com/in/kalya',
      about: 'Professional Profile',
      color: '#0A66C2',
      icon: linkedinimg
    },
    {
      id: 'instagram',
      name: 'Instagram',
      username: '@kalya.dev',
      about: 'Visual Updates',
      color: '#e6683c',
      icon: instaimg
    },
    {
      id: 'gmail',
      name: 'Gmail',
      username: 'kalyakiprono2003@gmail.com',
      about: 'Send Email',
      color: '#EA4335',
      icon: gmailimg
    },
    {
      id: 'github',
      name: 'GitHub',
      username: 'github.com/kalya',
      about: 'Source Code',
      color: '#ffffff',
      icon: gitimg
    },
    {
      id: 'x',
      name: 'X (Twitter)',
      username: '@kalya',
      about: 'Tech Thoughts',
      color: '#ffffff',
      icon: '𝕏'
    }
  ];

  return (
    <div className="social-icons-section">
      {/* HEADER SECTION - ONLY ADDITION */}
      <div className="social-header">
        <h1 className="social-title">Connect With Me</h1>
        <p className="social-subtitle">
          Reach out through any of these platforms. I'm always open to connecting!
        </p>
      </div>
      
      {/* ORIGINAL ICONS GRID - UNCHANGED */}
      <div className="icons-grid">
        {socials.map((s) => (
          <div
            key={s.id}
            className="icon-wrapper"
            onMouseEnter={() => setActiveTooltip(s.id)}
            onMouseLeave={() => setActiveTooltip(null)}
          >
            {/* Tooltip */}
            <div className={`tooltip ${activeTooltip === s.id ? 'active' : ''}`}>
              <div className="tooltip-content">
                <div className="tooltip-header">
                  <div
                    className="tooltip-icon"
                    style={{ borderColor: s.color }}
                  >
                    {s.id === 'x' ? (
                      s.icon
                    ) : (
                      <img 
                        src={s.icon} 
                        alt={s.name}
                        onError={(e) => {
                          console.error(`Failed to load ${s.name} icon:`, s.icon);
                          e.target.style.display = 'none';
                        }}
                      />
                    )}
                  </div>
                  <div>
                    <div className="tooltip-name" style={{ color: s.color }}>
                      {s.name}
                    </div>
                    <div className="tooltip-username">{s.username}</div>
                  </div>
                </div>
                <div className="tooltip-about">{s.about}</div>
              </div>
            </div>

            {/* Icon */}
            <div className="icon">
              <div className="icon-bg" style={{ '--glow': s.color }}>
                <span className="frame f1" />
                <span className="frame f2" />
                <span className="frame f3" />

                {s.id === 'x' ? (
                  <span className="icon-emoji">{s.icon}</span>
                ) : (
                  <img 
                    className="icon-img" 
                    src={s.icon} 
                    alt={s.name}
                    onError={(e) => {
                      console.error(`Failed to load ${s.name} icon:`, s.icon);
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = s.name.charAt(0);
                    }}
                  />
                )}
              </div>

              <span className={`icon-label ${activeTooltip === s.id ? 'visible' : ''}`}>
                {s.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialIcons;