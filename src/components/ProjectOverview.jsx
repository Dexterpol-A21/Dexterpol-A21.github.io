import React from 'react';
import ProjectSection from './ProjectSection';
import { useLanguage } from '../hooks/useAppConfig';

const ProjectOverview = ({ title, text }) => {
  const { language } = useLanguage();
  const t = (obj) => obj[language] || obj['en'];

  return (
    <ProjectSection id="overview" className="overview" background="white" data-section-alias="hero">
      <div className="overview-hero">
        <h2 className="overview-hero__title">{t(title)}</h2>
        <p className="overview-hero__text">{t(text)}</p>
      </div>
    </ProjectSection>
  );
};

export default ProjectOverview;
