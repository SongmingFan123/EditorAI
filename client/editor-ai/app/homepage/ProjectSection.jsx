import React from 'react';
import ProjectItem from './ProjectItem';

const ProjectSection = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div>
        {/* This is where you would map over your project data and pass it into ProjectItem components */}
        <ProjectItem />
        <ProjectItem />
        {/* ... */}
      </div>
    </div>
  );
};

export default ProjectSection;