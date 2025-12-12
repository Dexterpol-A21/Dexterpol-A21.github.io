import React, { useEffect, useState } from 'react';

const allTechnologies = {
  goodscribe: [
    { name: 'HTML5', icon: '../svg/html5.svg', type: 'img', color: '#E34F26' },
    { name: 'CSS3', icon: '../svg/css.svg', type: 'img', color: '#663399' },
    { name: 'JavaScript', icon: '../svg/javascript.svg', type: 'img', color: '#F7DF1E' },
    { name: 'React', icon: '../svg/react.svg', type: 'img', color: '#61DAFB' },
    { name: 'Astro', icon: '../svg/astro-icon.svg', type: 'img', color: '#BC52EE' },
    { name: 'Tailwind CSS', icon: '../svg/tailwindcss.svg', type: 'img', color: '#38BDF8' },
    { name: 'Vite', icon: '../svg/vite.svg', type: 'img', color: '#646CFF' },
    { name: 'Firebase', icon: '../svg/firebase.svg', type: 'img', color: '#FFCA28' },
    { name: 'Azure AI Translator', icon: '../svg/azure_icon_189202.svg', type: 'img', color: '#0078D4' },
    { name: 'Deepgram SDK', icon: '../svg/deepgram.svg', type: 'img', color: '#13EF93' },
    { name: 'Google Cloud', icon: '../svg/googlecloud.svg', type: 'img', color: '#8AB4F8', isMask: true },
    { name: 'Cloudflare', icon: '../svg/cloudflare.svg', type: 'img', color: '#F38020', isMask: true },
    { name: 'Chrome Extension API', icon: '../svg/chromewebstore.svg', type: 'img', color: '#4285F4', isMask: true }
  ],
  goodpins: [
    { name: 'HTML5', icon: '../svg/html5.svg', type: 'img', color: '#E34F26' },
    { name: 'CSS3', icon: '../svg/css.svg', type: 'img', color: '#663399' },
    { name: 'JavaScript', icon: '../svg/javascript.svg', type: 'img', color: '#F7DF1E' },
    { name: 'Chrome Extension API', icon: '../svg/chromewebstore.svg', type: 'img', color: '#4285F4', isMask: true }
  ],
  default: [
    { name: 'HTML5', icon: '../svg/html5.svg', type: 'img', color: '#E34F26' },
    { name: 'CSS3', icon: '../svg/css.svg', type: 'img', color: '#663399' },
    { name: 'JavaScript', icon: '../svg/javascript.svg', type: 'img', color: '#F7DF1E' },
    { name: 'React', icon: '../svg/react.svg', type: 'img', color: '#61DAFB' }
  ]
};

const TechStack = () => {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    const path = window.location.pathname.toLowerCase();
    if (path.includes('goodscribe')) {
      setTechnologies(allTechnologies.goodscribe);
    } else if (path.includes('goodpins')) {
      setTechnologies(allTechnologies.goodpins);
    } else {
      setTechnologies(allTechnologies.default);
    }
  }, []);

  return (
    <div className="tech-grid">
      {technologies.map((tech, index) => (
        <div 
          key={index} 
          className="tech-item"
          style={{ '--hover-color': tech.color }}
        >
          {tech.type === 'img' ? (
            tech.isMask ? (
              <div 
                className="tech-icon" 
                style={{ 
                  maskImage: `url(${tech.icon})`, 
                  WebkitMaskImage: `url(${tech.icon})`,
                  maskSize: 'contain',
                  WebkitMaskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  WebkitMaskPosition: 'center',
                  backgroundColor: 'currentColor'
                }}
              />
            ) : (
              <img src={tech.icon} alt={tech.name} />
            )
          ) : (
            <i className={tech.icon}></i>
          )}
          <span>{tech.name}</span>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
