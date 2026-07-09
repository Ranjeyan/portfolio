// Components/Projects.js
import React from 'react';
import Project from '../Components/Projects';
import projectsData from '../Contents/ProjectsData'; 

function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
      {projectsData.map((project, index) => (
        <Project
          key={index}
          year={project.year}
          image={project.image}
          title={project.title}
          description={project.description}
          tools={project.tools}
          link={project.link}
        />
      ))}
    </div>
  );
}

export default Projects;