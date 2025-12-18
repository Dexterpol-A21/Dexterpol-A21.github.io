import React from 'react';
import ProjectSection from './ProjectSection';
import { useLanguage } from '../hooks/useAppConfig';

const Architecture = ({ title, layers }) => {
  const { language } = useLanguage();
  const t = (obj) => (obj[language] || obj['en']);

  return (
    <ProjectSection id="architecture" background="gray">
      <h2 className="section-title">{t(title)}</h2>
      <div className="section-line"></div>
      
      <div className="architecture-grid">
        {layers.map((layer, index) => (
          <div key={index} className="architecture-layer">
            <div className="architecture-layer__header">
              <i className={layer.icon}></i>
              <h3>{t(layer.title)}</h3>
            </div>
            <p>{t(layer.description)}</p>
            <ul className="architecture-layer__features">
              {layer.features.map((feature, fIndex) => (
                <li key={fIndex}>{t(feature)}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </ProjectSection>
  );
};

export default Architecture;
