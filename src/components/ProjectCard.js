import React from 'react';

// Used 'react-collapsible' package for creating collapsible bars
import Collapsible from 'react-collapsible';

import '../styles/ProjectCard.scss';

const ProjectCard = (props) => {
  const { heading, category, description, buttonLink, buttonText, liveLink, language } = props.cardContent;

  const triggerContent = (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
      <span>{heading}</span>
      {language && (
        <span
          style={{
            fontSize: '0.7em',
            padding: '2px 8px',
            borderRadius: '10px',
            backgroundColor: 'rgba(0, 255, 255, 0.15)',
            color: '#00ffff',
            border: '1px solid rgba(0, 255, 255, 0.3)',
            fontWeight: 'normal',
            textTransform: 'none',
          }}
        >
          {language}
        </span>
      )}
    </div>
  );

  return (
    <>
      <div
        className="project-card"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-delay={props.cardContent.animationDelay}
      >
        <div className="project-card__container">
          <Collapsible trigger={triggerContent}>
            <div className="project-card__description-content">
              {category && (
                <span
                  style={{
                    display: 'inline-block',
                    fontSize: '0.75em',
                    color: '#7928ca',
                    fontWeight: 'bold',
                    marginBottom: '0.5em',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}
                >
                  {category}
                </span>
              )}
              <p>{description}</p>
              <div style={{ display: 'flex', gap: '10px', marginTop: '10px', flexWrap: 'wrap' }}>
                {buttonLink && (
                  <a
                    href={buttonLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {buttonText || 'VIEW REPO'}
                  </a>
                )}
                {liveLink && (
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      background: 'linear-gradient(135deg, #00ffff 0%, #7928ca 100%)',
                      borderColor: 'transparent',
                    }}
                  >
                    LIVE DEMO
                  </a>
                )}
              </div>
            </div>
          </Collapsible>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;

