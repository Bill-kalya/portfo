import React, { useState } from 'react';
import './SocialIcons.css';

const SocialIcons = () => {
  const [activeTooltip, setActiveTooltip] = useState(null);

  const socialData = [
    {
      id: 'discord',
      name: 'Discord',
      username: '@discord_user',
      about: '500+ Members',
      iconLabel: 'Di',
      color: '#5865F2',
      viewBox: '0 -3.117 28 28',
      path: 'M23.719 1.815A22.8 22.8 0 0 0 17.942 0c-.249.45-.54 1.055-.74 1.536q-3.231-.486-6.402 0C10.6 1.055 10.302.45 10.051 0A22.7 22.7 0 0 0 4.27 1.82C.614 7.344-.377 12.731.119 18.042c2.425 1.811 4.775 2.911 7.085 3.63a17.6 17.6 0 0 0 1.517-2.499 15 15 0 0 1-2.389-1.163 12 12 0 0 0 .586-.463c4.607 2.155 9.613 2.155 14.165 0a14 14 0 0 0 .586.463 15 15 0 0 1-2.394 1.165c.438.877.945 1.714 1.517 2.499 2.312-.72 4.664-1.82 7.089-3.633.581-6.156-.993-11.494-4.162-16.227'
    },
    {
      id: 'instagram',
      name: 'Instagram',
      username: '@insta_user',
      about: '1.5k Followers',
      iconLabel: 'In',
      color: '#e6683c',
      viewBox: '0 0 448 512',
      path: 'M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141z'
    }
  ];

  return (
    <div className="icons-grid">
      {socialData.map((social) => (
        <div
          key={social.id}
          className="icon-wrapper"
          onMouseEnter={() => setActiveTooltip(social.id)}
          onMouseLeave={() => setActiveTooltip(null)}
        >
          {/* Tooltip */}
          <div className={`tooltip ${activeTooltip === social.id ? 'active' : ''}`}>
            <div className="tooltip-content">
              <div className="tooltip-header">
                <div
                  className="tooltip-icon"
                  style={{ borderColor: social.color, color: social.color }}
                >
                  {social.iconLabel}
                </div>
                <div>
                  <div className="tooltip-name" style={{ color: social.color }}>
                    {social.name}
                  </div>
                  <div className="tooltip-username">{social.username}</div>
                </div>
              </div>
              <div className="tooltip-about">{social.about}</div>
            </div>
          </div>

          {/* Icon */}
          <a href="#" className="icon">
            <div className="icon-bg">
              <svg viewBox={social.viewBox} className="icon-svg">
                <path fill="white" d={social.path} />
              </svg>
            </div>
            <span className={`icon-label ${activeTooltip === social.id ? 'visible' : ''}`}>
              {social.name}
            </span>
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialIcons;
