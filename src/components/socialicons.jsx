import React, { useState } from 'react';
import './SocialIcons.css'; // import the CSS

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
      path: 'M23.719 1.815A22.8 22.8 0 0 0 17.942 0c-.249.45-.54 1.055-.74 1.536q-3.231-.486-6.402 0C10.6 1.055 10.302.45 10.051 0A22.7 22.7 0 0 0 4.27 1.82C.614 7.344-.377 12.731.119 18.042c2.425 1.811 4.775 2.911 7.085 3.63a17.6 17.6 0 0 0 1.517-2.499 15 15 0 0 1-2.389-1.163 12 12 0 0 0 .586-.463c4.607 2.155 9.613 2.155 14.165 0a14 14 0 0 0 .586.463 15 15 0 0 1-2.394 1.165c.438.877.945 1.714 1.517 2.499 2.312-.72 4.664-1.82 7.089-3.633.581-6.156-.993-11.494-4.162-16.227M9.349 14.776c-1.383 0-2.517-1.291-2.517-2.863s1.11-2.866 2.517-2.866 2.541 1.291 2.517 2.866c.002 1.572-1.11 2.863-2.517 2.863m9.302 0c-1.383 0-2.517-1.291-2.517-2.863s1.11-2.866 2.517-2.866 2.541 1.291 2.517 2.866c0 1.572-1.11 2.863-2.517 2.863'
    },
    {
      id: 'instagram',
      name: 'Instagram',
      username: '@insta_user',
      about: '1.5k Followers',
      iconLabel: 'In',
      color: '#e6683c',
      viewBox: '0 0 448 512',
      path: 'M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'
    }
  ];

  return (
    <div className="social-container">
      <div className="social-header">
        <h1>Social Media Icons</h1>
        <p>Hover over each icon to see the tooltip profile</p>
      </div>

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
                  <path fill="white" d={social.path}></path>
                </svg>
              </div>
              <span className={`icon-label ${activeTooltip === social.id ? 'visible' : ''}`}>
                {social.name}
              </span>
            </a>
          </div>
        ))}
      </div>

      <div className="social-footer">
        Social Media Icons with Tooltip Containers | Hover to see profiles
      </div>
    </div>
  );
};

export default SocialIcons;
