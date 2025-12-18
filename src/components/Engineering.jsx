import React from 'react';
import ProjectSection from './ProjectSection';
import { useLanguage } from '../hooks/useAppConfig';

const Engineering = ({ title, challenges, pipeline }) => {
  const { language } = useLanguage();
  const t = (obj) => (obj[language] || obj['en']);

  // Determine layout based on number of challenges
  // 4 challenges = GoodScribe = Vertical Pipeline on the right (Grid Layout)
  // 3 challenges = GoodBoard = Horizontal Pipeline at the bottom
  const isVerticalLayout = challenges.length === 4;

  const PipelineCard = () => (
    <div 
      className="bento-card-eng pipeline-card" 
      style={!isVerticalLayout ? { marginTop: 'var(--space-2)' } : {}}
    >
      <div className="pipeline-header">
        <h3 className="eng-card-title">{t(pipeline.title)}</h3>
        <span className="pipeline-badge">{pipeline.badge}</span>
      </div>
      <div 
        className="vertical-pipeline" 
        style={!isVerticalLayout ? { 
          flexDirection: 'row', 
          height: 'auto', 
          padding: 'var(--space-8)', 
          overflowX: 'auto', 
          gap: 'var(--space-4)' 
        } : {}}
      >
        
        {pipeline.steps.map((step, index) => (
          <React.Fragment key={index}>
            <div 
              className="v-step" 
              style={!isVerticalLayout ? { 
                flexDirection: 'column', 
                textAlign: 'center', 
                minWidth: '140px' 
              } : {}}
            >
              <div className="v-icon-wrapper">
                <div 
                  className="v-icon" 
                >
                  <i className={step.icon}></i>
                </div>
              </div>
              <div 
                className="v-content" 
                style={!isVerticalLayout ? { marginTop: 'var(--space-4)' } : {}}
              >
                <h4>{t(step.title)}</h4>
                <p>{t(step.description)}</p>
              </div>
            </div>
            
            {index < pipeline.steps.length - 1 && (
              <div 
                className="v-connector" 
                style={!isVerticalLayout ? { 
                  width: '60px', 
                  height: '2px', 
                  margin: '0', 
                  alignSelf: 'center', 
                  transform: 'translateY(-25px)' 
                } : {}}
              ></div>
            )}
          </React.Fragment>
        ))}

      </div>
      
      {pipeline.footer && (
        <div style={{ padding: '0 var(--space-8) var(--space-8)', borderTop: '1px solid var(--color-gray-200)', marginTop: '0' }}>
          <div className="challenge-solution" style={{ marginTop: 'var(--space-6)' }}>
            <span className="tag tag--solution">{t(pipeline.footer.tag)}</span>
            <p>{t(pipeline.footer.text)}</p>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <ProjectSection id="engineering" background="gray">
      <h2 className="section-title">{t(title)}</h2>
      <div className="section-line"></div>
      
      <div className="bento-grid-engineering">
        {/* First 2 challenges */}
        {challenges.slice(0, 2).map((challenge, index) => (
          <div key={index} className="bento-card-eng challenge-card">
            <div className="challenge-card__header">
              <i className={challenge.icon}></i>
              <h3>{t(challenge.title)}</h3>
            </div>
            <div className="challenge-card__body">
              <div className="challenge-problem">
                <span className="tag tag--problem">{language === 'en' ? 'Problem' : 'Problema'}</span>
                <p>{t(challenge.problem)}</p>
              </div>
              <div className="challenge-solution">
                <span className="tag tag--solution">{language === 'en' ? 'Solution' : 'Solución'}</span>
                <p>{t(challenge.solution)}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Pipeline Card (Inserted here for Vertical Layout) */}
        {isVerticalLayout && pipeline && <PipelineCard />}

        {/* Remaining challenges */}
        {challenges.slice(2).map((challenge, index) => (
          <div key={index + 2} className="bento-card-eng challenge-card">
            <div className="challenge-card__header">
              <i className={challenge.icon}></i>
              <h3>{t(challenge.title)}</h3>
            </div>
            <div className="challenge-card__body">
              <div className="challenge-problem">
                <span className="tag tag--problem">{language === 'en' ? 'Problem' : 'Problema'}</span>
                <p>{t(challenge.problem)}</p>
              </div>
              <div className="challenge-solution">
                <span className="tag tag--solution">{language === 'en' ? 'Solution' : 'Solución'}</span>
                <p>{t(challenge.solution)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pipeline Card (Outside grid for Horizontal Layout) */}
      {!isVerticalLayout && pipeline && <PipelineCard />}

    </ProjectSection>
  );
};

export default Engineering;
