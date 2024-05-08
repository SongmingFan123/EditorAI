import React from 'react';
import '../styles/ProjectItem.css';


interface Project {
  name: string;
}

interface ProjectItemProps {
  key: string; 
  project: Project;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  return (
    <div>
      {/* Example usage */}
      <h3>{project.name}</h3>
      {/* Render other project details */}
    </div>
  );
};

export default ProjectItem;
