import React from 'react';
import Header from '../components/Header';
import ProjectSection from '../components/ProjectSection';

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
    <div>
      <div>
        <Header />
      </div>
      <ProjectSection projects={priorityProjects} title="Priority Projects" />
      <ProjectSection projects={recentProjects} title="Recent Projects" />
    </div>
  );
};

export default Homepage;
