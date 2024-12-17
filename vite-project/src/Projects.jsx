import React from 'react';

// Importing images
import marinaFleetImage from './assets/images/boat rental upper section.jpg';
import bookParadiseImage from './assets/images/book paradise.jpg';
import carNationImage from './assets/images/car nation.jpg';
const Projects = () => {
  const projects = [
    {
      title: 'Marina Fleet',
      link: 'https://imaginative-crostata-ffae7e.netlify.app/',
      image: marinaFleetImage,
    },
    {
      title: 'Book Paradise',
      link: 'https://storied-semifreddo-495f4a.netlify.app/home',
      image: bookParadiseImage,
    },
    {
      title: 'Car Nation',
      link: 'https://675d723440e267f929c16ecc--stunning-blini-2a67ee.netlify.app/home',
      image: carNationImage,
    },
  ];

  return (
    <div style={{ padding: '5rem', fontFamily: 'Comic-Neue, cursive' }}>
      <h2 style={{ fontWeight: 'bolder' }}>My Projects</h2>
      <div className="project-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h1 className="project-title">{project.title}</h1>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              {project.link}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
