import React from 'react';
import { Link } from 'react-router-dom';
import projectData from '../data.json';
import WorkCard from '..WorkCard'; 

const ProjectList = () => {
  return (
    <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
      <h1 className="text-2xl font-bold">Projets.</h1>
      <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
        {projectData.projects.map((project) => (
          <Link key={project.id} to={project.url} target="_blank" rel="noopener noreferrer">
            <WorkCard
              img={require(`../${project.imageSrc}`).default}
              name={project.title}
              description={project.description}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
