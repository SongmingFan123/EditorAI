import React from 'react';
import HomePage from './HomePage';

// Assuming ProjectSection accepts a prop structure like this:
interface Project {
  name: string;
}

interface ProjectSectionProps {
  projects: Project[];
  title: string;
}

const Homepage: React.FC = () => {
  const priorityProjects: Project[] = [{ name: 'Project 1' }, { name: 'Project 2' }];
  const recentProjects: Project[] = [{ name: 'Project 3' }, { name: 'Project 4' }];

  return (
    
    <HomePage/>
    
  );
};

export default Homepage;
