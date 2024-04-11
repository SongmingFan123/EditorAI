import React, { useEffect, useState } from 'react';
import ProjectItem from './ProjectItem';
import { getDocuments } from '@/api/document_functions';
import { useAuth } from '@/context/AuthContext';

const ProjectSection = ({ title }) => {
  const user = useAuth();
  const userId = user.user.uid;

  const [projects, setProjects] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await getDocuments(userId);
        console.log('Response:', response); // Check the response structure
        setProjects(response);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    if (!projects) {
      fetchProjects();
    }
  }, []); // useEffect will run when userId changes

  const handleClicked = () => {
    console.log(projects[0]["Title"]);
  }

  return (
    <div className="m-4">
      <h2 className="text-lg text-gray-700 mb-2">{title}</h2>
      <div className="flex flex-wrap gap-4"> {/* Add gap-4 class for margin */}
        {projects ? projects.map((document) => { // Use curly braces to return JSX
          return (
            <ProjectItem
              key={document.id}
              title={document.Title}
              content={document.Content}
              lastModified={document.LastModified}
              documentId={document.id} // Pass documentId as a prop
            />
          );
        }) : <p>Loading...</p>}
      </div>
    </div>
  );
};

export default ProjectSection;
