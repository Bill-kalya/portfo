import React from 'react';
import './SocialIcons.css';

import whatimg from '../assets/whatsapp.png';
import discordimg from '../assets/discord.png';
import gitimg from '../assets/github.png';
import gmailimg from '../assets/gmail.png';
import instaimg from '../assets/instagram.png';
import linkedinimg from '../assets/linkedin.png';
import phoneimg from '../assets/phone.png';

const SocialIcons = () => {

  const socials = [
    {
      id: 'phone',
      name: 'Phone',
      username: '+254 748 623 579',
      about: 'Call / SMS',
      color: '#22c55e',
      link: 'tel:+254748623579',
      icon: phoneimg
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      username: '+254 113 120 076',
      about: 'Chat on WhatsApp',
      color: '#25D366',
      link: 'https://wa.me/254113120076',
      icon: whatimg
    },
    {
      id: 'discord',
      name: 'Discord',
      username: 'kalya#0001',
      about: 'Gaming / Dev',
      color: '#5865F2',
      link: 'https://discord.com/users/1138747700532232213',
      icon: discordimg
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      username: 'linkedin.com/in/bill-kalya',
      about: 'Professional Profile',
      color: '#0A66C2',
      link: 'https://www.linkedin.com/in/bill-kalya',
      icon: linkedinimg
    },
    {
      id: 'instagram',
      name: 'Instagram',
      username: '@bill_kalya',
      about: 'Visual Updates',
      color: '#e6683c',
      link: 'https://www.instagram.com/bill_kalya',
      icon: instaimg
    },
    {
      id: 'gmail',
      name: 'Gmail',
      username: 'kalyakiprono2003@gmail.com',
      about: 'Send Email',
      color: '#EA4335',
      link: 'https://mail.google.com/mail/?view=cm&fs=1&to=kalyakiprono2003@gmail.com',
      icon: gmailimg
    },
    {
      id: 'github',
      name: 'GitHub',
      username: 'github.com/Bill-kalya',
      about: 'Bill-kalya',
      color: '#ffffff',
      link: 'https://github.com/Bill-kalya',
      icon: gitimg
    },
    {
      id: 'x',
      name: 'X (Twitter)',
      username: 'cal_yaBill',
      about: 'Tech Thoughts',
      color: '#ffffff',
      link: 'https://x.com/cal_yaBill',
      icon: '𝕏'
    }
  ];

  return (
    <div className="social-icons-section">

      <div className="social-header">
        <h1 className="social-title">Connect With Me</h1>
        <p className="social-subtitle">
          Reach out through any of these platforms. I'm always open to connecting!
        </p>
      </div>

      <div className="icons-grid">
        {socials.map((s) => (
          <div key={s.id} className="icon-wrapper">

            {/* Tooltip */}
            <div className="tooltip">
              <div className="tooltip-content">
                <div className="tooltip-header">
                  <div
                    className="tooltip-icon"
                    style={{ borderColor: s.color }}
                  >
                    {s.id === 'x' ? (
                      <span className="icon-emoji">{s.icon}</span>
                    ) : (
                      <img src={s.icon} alt={s.name} />
                    )}
                  </div>

                  <div>
                    <div
                      className="tooltip-name"
                      style={{ color: s.color }}
                    >
                      {s.name}
                    </div>
                    <div className="tooltip-username">
                      {s.username}
                    </div>
                  </div>
                </div>

                <div
                  className="tooltip-about"
                  onClick={() => {
                    if (s.link.startsWith('mailto:')) {
                      window.location.href = s.link;
                    } else {
                      window.open(s.link, '_blank');
                    }
                  }}
                >
                  {s.about}
                </div>
              </div>
            </div>

            {/* Clickable Icon */}
            <a
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <div
                className="icon-bg"
                style={{ '--glow': s.color }}
              >
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
                  />
                )}
              </div>

              <span className="icon-label">
                {s.name}
              </span>
            </a>

          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialIcons;
