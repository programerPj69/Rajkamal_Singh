import React, { useState } from 'react';

import '../../styles/Works/Works.scss';

import data from '../../data';

// Importing child component
import ProjectCard from '../ProjectCard';

const Works = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = data.portfolio.projectCard.categories || [
    'All',
    'Full-Stack / Web',
    'Python & AI',
    'Java / C++',
    'Mobile & Utilities',
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? data.portfolio.projectCard.cards
      : data.portfolio.projectCard.cards.filter(
          (project) => project.category === selectedCategory
        );

  return (
    <>
      <div className="works" id="work">
        <div className="works__container">
          <div className="works__header" id="works__heading">
            <h1 data-aos="fade-down">
              <span
                data-aos="fade-down"
                data-aos-delay="0"
                data-aos-offset="200"
              >
                W
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-offset="200"
              >
                O
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="400"
                data-aos-offset="200"
              >
                R
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="600"
                data-aos-offset="200"
              >
                K
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="800"
                data-aos-offset="200"
              >
                S
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="1000"
                data-aos-offset="200"
              >
                .
              </span>
            </h1>
          </div>

          {/* Category Filter Tabs with Repo Count */}
          <div className="works__categories" data-aos="fade-up" data-aos-delay="200">
            {categories.map((cat) => {
              const count =
                cat === 'All'
                  ? data.portfolio.projectCard.cards.length
                  : data.portfolio.projectCard.cards.filter(
                      (p) => p.category === cat
                    ).length;

              return (
                <button
                  key={cat}
                  className={`works__category-btn ${
                    selectedCategory === cat ? 'works__category-btn--active' : ''
                  }`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat} <span style={{ opacity: 0.8, fontSize: '0.85em', marginLeft: '4px' }}>({count})</span>
                </button>
              );
            })}
          </div>

          <div className="works__grid">
            <div className="works__grid-container">
              {filteredProjects.map((content) => (
                <ProjectCard key={content.heading} cardContent={content} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;

