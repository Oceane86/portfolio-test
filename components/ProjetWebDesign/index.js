import React from 'react';
import projectData from '../data.json'; 
const ProjectList = () => {
  return (
    <div>
      {projectData.projects.map((project) => (
        <div key={project.id}>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            <img src={require(`../${project.imageSrc}`).default} alt={project.title} />
            <h1>{project.title}</h1>
          </a>
          <p>Description: {project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
