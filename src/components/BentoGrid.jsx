import React from 'react';
import ProjectSection from './ProjectSection';
import { useLanguage } from '../hooks/useAppConfig';

const BentoGrid = ({ id, title, items, background = 'gray' }) => {
  const { language } = useLanguage();
  const t = (obj) => obj[language] || obj['en'];

  return (
    <ProjectSection id={id} className="features" background={background}>
      <div className="section-header">
        <h2 className="section-title">{t(title)}</h2>
        <div className="section-line"></div>
      </div>
      
      <div className="bento-grid">
        {items.map((item, index) => (
          <div key={index} className={`bento-card bento-card--${item.size}`}>
            <div className="bento-card__bg">
              <i className={item.icon}></i>
            </div>
            <div className="bento-card__content">
              <div className="bento-card__icon">
                <i className={item.icon}></i>
              </div>
              <h3 className="bento-card__title">{t(item.title)}</h3>
              <p className="bento-card__description">{t(item.description)}</p>
            </div>
          </div>
        ))}
      </div>
    </ProjectSection>
  );
};

export default BentoGrid;
