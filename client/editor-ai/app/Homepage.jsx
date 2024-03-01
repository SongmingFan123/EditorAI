import React from 'react';
import Header from '../components/Header';
import ProjectSection from '../components/ProjectSection';

const Home = () => {
  const priorityProjects = [{ name: 'Project 1' }, { name: 'Project 2' }];
  const recentProjects = [{ name: 'Project 3' }, { name: 'Project 4' }];

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

export default Home;
