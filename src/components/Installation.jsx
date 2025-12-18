import React from 'react';
import ProjectSection from './ProjectSection';
import { useLanguage } from '../hooks/useAppConfig';

const Installation = ({ title, options, nextProject }) => {
  const { language } = useLanguage();
  const t = (obj) => (obj[language] || obj['en']);

  return (
    <ProjectSection id="installation" background="gray">
      <h2 className="section-title">{t(title)}</h2>
      <div className="section-line"></div>
      
      <div className="installation-grid">
        {options.map((option, index) => (
          <div key={index} className="installation-option">
            <div className="installation-option__icon" style={{ background: 'none', boxShadow: 'none' }}>
              {option.isImage ? (
                <img src={option.icon} alt={t(option.title)} style={{ width: '40px', height: '40px' }} />
              ) : (
                <i className={option.icon} style={{ fontSize: '40px', color: 'var(--color-black)' }}></i>
              )}
            </div>
            <h3 className="installation-option__title">{t(option.title)}</h3>
            <p className="installation-option__description">{t(option.description)}</p>
            <a 
              href={option.button.link} 
              target={option.button.link !== '#' ? "_blank" : undefined}
              rel={option.button.link !== '#' ? "noopener noreferrer" : undefined}
              className={`btn ${option.button.variant === 'secondary' ? 'btn--secondary' : 'btn--primary'} ${option.button.disabled ? 'disabled' : ''}`}
              style={option.button.disabled ? { opacity: 0.7, cursor: 'not-allowed' } : (option.button.variant === 'secondary' ? { backgroundColor: 'white', color: 'black', borderColor: 'white' } : {})}
            >
              <i className={option.button.icon} style={{ marginRight: '8px' }}></i>
              <span>{t(option.button.text)}</span>
            </a>
          </div>
        ))}
      </div>

      {nextProject && (
        <div className="project-navigation" style={{ marginTop: '0', display: 'flex', justifyContent: 'flex-end' }}>
          <a href={nextProject.link} className="back-link" style={{ marginBottom: '0' }}>
            <span>{t(nextProject.text)}</span>
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      )}
    </ProjectSection>
  );
};

export default Installation;
