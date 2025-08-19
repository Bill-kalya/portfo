import React, { useState } from 'react';

const SocialIcons = () => {
  const [activeTooltip, setActiveTooltip] = useState(null);
  
  const socialData = [
    {
      id: 'discord',
      name: 'Discord',
      username: '@discord_user',
      about: '500+ Members',
      iconLabel: 'Di',
      bgClass: 'discord-bg',
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
      bgClass: 'instagram-bg',
      color: '#e6683c',
      viewBox: '0 0 448 512',
      path: 'M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      username: '@whatsapp_user',
      about: '200+ Contacts',
      iconLabel: 'Wa',
      bgClass: 'whatsapp-bg',
      color: '#25D366',
      viewBox: '0 0 24 24',
      path: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'
    },
    {
      id: 'telegram',
      name: 'Telegram',
      username: '@telegram_user',
      about: '300+ Members',
      iconLabel: 'Te',
      bgClass: 'telegram-bg',
      color: '#0088cc',
      viewBox: '0 0 24 24',
      path: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.136-.954l11.566-4.458c.538-.196 1.006.128.832.941z'
    },
    {
      id: 'x',
      name: 'X (Twitter)',
      username: '@twitter_user',
      about: '2k Followers',
      iconLabel: 'X',
      bgClass: 'x-bg',
      color: '#000000',
      viewBox: '0 0 24 24',
      path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      username: '@linkedin_user',
      about: '500+ Connections',
      iconLabel: 'Li',
      bgClass: 'linkedin-bg',
      color: '#0a66c2',
      viewBox: '0 0 24 24',
      path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
    },
    {
      id: 'gmail',
      name: 'Gmail',
      username: 'user@gmail.com',
      about: 'Professional',
      iconLabel: 'Gm',
      bgClass: 'gmail-bg',
      color: '#ea4335',
      viewBox: '0 0 24 24',
      path: 'M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-5.727V12.91L12 16.636l-4.636-3.727V21H1.636A1.636 1.636 0 010 19.364V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.546l6.545-4.906 1.528-1.145C21.69 2.28 24 3.434 24 5.457z'
    }
  ];

  const handleMouseEnter = (id) => {
    setActiveTooltip(id);
  };

  const handleMouseLeave = () => {
    setActiveTooltip(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-3">
            Social Media Icons
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Hover over each icon to see the tooltip profile
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {socialData.map((social) => (
            <div 
              key={social.id}
              className="tooltip-container relative flex justify-center"
              onMouseEnter={() => handleMouseEnter(social.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div 
                className={`tooltip absolute -top-40 left-1/2 transform -translate-x-1/2 p-3 rounded-xl bg-gray-800 border border-gray-700 shadow-2xl transition-all duration-300 ${
                  activeTooltip === social.id ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                style={{ 
                  width: '220px',
                  boxShadow: 'inset 5px 5px 5px rgba(0, 0, 0, 0.2), inset -5px -5px 15px rgba(255, 255, 255, 0.1), 5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="profile p-3 rounded-lg">
                  <div className="user flex items-center gap-3 mb-3">
                    <div 
                      className="img w-12 h-12 flex items-center justify-center rounded-lg text-xl font-bold"
                      style={{ 
                        border: `1px solid ${social.color}`,
                        color: social.color,
                        backgroundColor: 'white'
                      }}
                    >
                      {social.iconLabel}
                    </div>
                    <div className="details">
                      <div 
                        className="name font-bold"
                        style={{ color: social.color }}
                      >
                        {social.name}
                      </div>
                      <div className="username text-gray-300 text-sm">{social.username}</div>
                    </div>
                  </div>
                  <div className="about text-center py-1 px-3 rounded-full text-white text-sm bg-gray-700">
                    {social.about}
                  </div>
                </div>
              </div>
              
              <a 
                href="#" 
                className="icon relative flex flex-col items-center"
              >
                <div className="layer w-14 h-14 relative transition-transform duration-300 hover:rotate-[-35deg] hover:skew-x-[20deg]">
                  {[...Array(4)].map((_, i) => (
                    <span 
                      key={i}
                      className="absolute top-0 left-0 w-full h-full border border-gray-400 rounded-xl transition-all duration-300"
                      style={{ 
                        opacity: activeTooltip === social.id ? 0.2 + (i * 0.2) : 0,
                        transform: activeTooltip === social.id ? `translate(${5 * (i+1)}px, ${-5 * (i+1)}px)` : 'none',
                        zIndex: 4 - i
                      }}
                    />
                  ))}
                  <span 
                    className={`social-bg absolute top-0 left-0 w-full h-full rounded-xl flex items-center justify-center ${social.bgClass}`}
                    style={{ zIndex: 5 }}
                  >
                    <svg 
                      className="w-7 h-7" 
                      viewBox={social.viewBox}
                    >
                      <path fill="white" d={social.path} />
                    </svg>
                  </span>
                </div>
                <div 
                  className="text text-white text-sm font-medium mt-2 opacity-0 transition-opacity duration-300"
                  style={{ opacity: activeTooltip === social.id ? 1 : 0 }}
                >
                  {social.name}
                </div>
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center text-gray-400 text-sm border-t border-gray-700 pt-5">
          <p>Social Media Icons with Tooltip Containers | Hover to see profiles</p>
        </div>
        
        <style jsx>{`
          .tooltip-container {
            cursor: pointer;
            transition: all 0.2s;
            font-size: 17px;
            border-radius: 10px;
          }
          
          .layer {
            transition: transform 0.3s;
          }
          
          .social-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 15px;
          }
          
          .discord-bg { background: #5865F2; }
          .instagram-bg { background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); }
          .whatsapp-bg { background: #25D366; }
          .telegram-bg { background: #0088cc; }
          .x-bg { background: #000000; }
          .linkedin-bg { background: #0a66c2; }
          .gmail-bg { background: #ea4335; }
          
          @media (max-width: 768px) {
            .grid-cols-7 {
              grid-template-columns: repeat(3, minmax(0, 1fr));
            }
          }
          
          @media (max-width: 640px) {
            .grid-cols-7 {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default SocialIcons;