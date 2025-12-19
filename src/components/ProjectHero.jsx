import React from 'react';
import { useLanguage, useTheme } from '../hooks/useAppConfig';

const ProjectHero = ({
  title,
  subtitle,
  iconSrc,
  dates,
  version,
  category,
  type,
  platform,
  role,
  demoLink,
  demoLinkText,
  demoLinkIcon,
  demoLinkIsImage,
  secondaryLink, // { url, text, icon, isImage }
  backLink = "../index.html#projects",
  typeIcon = "fas fa-cloud",
  platformIcon = "fas fa-globe"
}) => {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const handleLanguageToggle = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  // Helper to get text based on language
  const t = (obj) => {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[language] || obj['en'];
  };

  return (
    <section className="project-hero" id="hero">
      {/* Toggle Controls */}
      <div className="hero__controls">
        <button 
          className="control-btn theme-toggle" 
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
        >
          <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`} data-theme-icon aria-hidden="true"></i>
        </button>
        <button 
          className="control-btn language-toggle" 
          onClick={handleLanguageToggle}
          aria-label="Switch language"
        >
          <i className="fas fa-language" aria-hidden="true"></i>
        </button>
      </div>

      <div className="container">
        <div className="project-hero__content">
          <a href={backLink} className="back-link">
            <i className="fas fa-arrow-left"></i>
            <span>{language === 'en' ? 'Back to Projects' : 'Volver a Proyectos'}</span>
          </a>
          
          <div className="project-hero__header">
            <div className="project-icon">
              <img src={iconSrc} alt={`${t(title)} Icon`} className="project-icon-img" />
            </div>
            <div className="project-hero__title-group">
              <h1 className="project-hero__title">{t(title)}</h1>
              <p className="project-hero__subtitle">{t(subtitle)}</p>
            </div>
          </div>
          
          <div className="project-hero__meta">
            <div className="meta-item">
              <i className="fas fa-calendar-alt"></i>
              <span>{t(dates)}</span>
            </div>
            <div className="meta-item">
              <i className="fas fa-code-branch"></i>
              <span>{t(version)}</span>
            </div>
            <div className="meta-item">
              <i className="fas fa-tag"></i>
              <span>{t(category)}</span>
            </div>
            <div className="meta-item">
              <i className={typeIcon}></i>
              <span>{t(type)}</span>
            </div>
            <div className="meta-item">
              <i className={platformIcon}></i>
              <span>{t(platform)}</span>
            </div>
            <div className="meta-item">
              <i className="fas fa-users"></i>
              <span>{t(role)}</span>
            </div>
          </div>

          <div className="project-hero__actions">
            {demoLink && (
              <a href={demoLink} className="btn btn--primary" target="_blank" rel="noopener noreferrer">
                {demoLinkIsImage ? (
                  <img src={demoLinkIcon} alt="Demo Action" className="btn-icon" />
                ) : (
                  <i className={demoLinkIcon || "fas fa-external-link-alt"}></i>
                )}
                <span>{demoLinkText ? t(demoLinkText) : (language === 'en' ? 'Live Demo' : 'Demo en Vivo')}</span>
              </a>
            )}
            
            {secondaryLink && (
              <a href={secondaryLink.url} className="btn btn--secondary" target="_blank" rel="noopener noreferrer">
                {secondaryLink.isImage ? (
                  <img src={secondaryLink.icon} alt="Secondary Action" />
                ) : (
                  <i className={secondaryLink.icon}></i>
                )}
                <span>{t(secondaryLink.text)}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
