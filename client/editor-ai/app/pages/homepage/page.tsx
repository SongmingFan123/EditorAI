<<<<<<< HEAD:client/editor-ai/app/pages/homepage/page.tsx
"use client"

import React from 'react';
import HomePage from './HomePage';
=======
import React from 'react';
import Header from '../components/Header';
import ProjectSection from '../components/ProjectSection';

// Assuming ProjectSection accepts a prop structure like this:
interface Project {
  name: string;
}
>>>>>>> 7ea19c7f80d0313195e94ba33f560933d803f5c3:client/editor-ai/app/homepage/page.tsx

interface ProjectSectionProps {
  projects: Project[];
  title: string;
}

const Homepage: React.FC = () => {
  const priorityProjects: Project[] = [{ name: 'Project 1' }, { name: 'Project 2' }];
  const recentProjects: Project[] = [{ name: 'Project 3' }, { name: 'Project 4' }];

  return (
<<<<<<< HEAD:client/editor-ai/app/pages/homepage/page.tsx
    
    <HomePage/>
    
=======
    <div>
      <div>
        <Header />
      </div>
      <ProjectSection projects={priorityProjects} title="Priority Projects" />
      <ProjectSection projects={recentProjects} title="Recent Projects" />
    </div>
>>>>>>> 7ea19c7f80d0313195e94ba33f560933d803f5c3:client/editor-ai/app/homepage/page.tsx
  );
};

export default Homepage;
