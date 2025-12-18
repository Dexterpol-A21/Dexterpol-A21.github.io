import React from 'react';
import ProjectSection from './ProjectSection';
import Tilt from 'react-parallax-tilt';
import { useLanguage } from '../hooks/useAppConfig';

const FeatureShowcase = ({ title, description, icon, imageSrc, imageAlt, reverse = false }) => {
  const { language } = useLanguage();
  const t = (obj) => obj[language] || obj['en'];

  return (
    <div className={`feature-showcase ${reverse ? 'feature-showcase--reverse' : ''}`}>
      <div className="feature-showcase__content">
        <div className="feature-showcase__icon">
          <i className={icon}></i>
        </div>
        <h3 className="feature-showcase__title">{t(title)}</h3>
        <p className="feature-showcase__description">
          {t(description)}
        </p>
      </div>
      <div className="feature-showcase__demo">
        <Tilt
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          perspective={1000}
          scale={1.02}
          transitionSpeed={1500}
          className="browser-mockup-tilt"
        >
          <div className="browser-mockup">
            <div className="browser-mockup__header">
              <div className="browser-mockup__dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="browser-mockup__title">{imageAlt}</div>
            </div>
            <div className="browser-mockup__content">
              <img src={imageSrc} alt={imageAlt} loading="lazy" />
            </div>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

const FeaturesOverview = ({ title, items }) => {
  const { language } = useLanguage();
  const t = (obj) => obj[language] || obj['en'];

  return (
    <ProjectSection id="features-overview" className="project-features-overview" background="white" data-section-alias="features">
      <h2 className="section-title">{t(title)}</h2>
      <div className="section-line"></div>
      
      {items.map((item, index) => (
        <FeatureShowcase
          key={index}
          {...item}
          reverse={index % 2 !== 0}
        />
      ))}
    </ProjectSection>
  );
};

export default FeaturesOverview;
