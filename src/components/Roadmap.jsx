import React from 'react';
import ProjectSection from './ProjectSection';
import { useLanguage } from '../hooks/useAppConfig';

const Roadmap = ({ title, items }) => {
  const { language } = useLanguage();
  const t = (obj) => (obj[language] || obj['en']);

  return (
    <ProjectSection id="roadmap" background="white">
      <h2 className="section-title">{t(title)}</h2>
      <div className="section-line"></div>
      
      <div className="roadmap-timeline">
        {items.map((item, index) => (
          <div key={index} className="roadmap-item">
            <div className="roadmap-item__content">
              <h3 className="roadmap-item__title">{t(item.title)}</h3>
              <p className="roadmap-item__description">{t(item.description)}</p>
              <span className="roadmap-item__status">{t(item.status)}</span>
            </div>
          </div>
        ))}
      </div>
    </ProjectSection>
  );
};

export default Roadmap;
