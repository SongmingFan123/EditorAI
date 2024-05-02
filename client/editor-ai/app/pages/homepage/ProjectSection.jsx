import React, { useEffect, useState } from 'react';
import ProjectItem from './ProjectItem';
import { getDocuments } from '@/api/document_functions';
import { useAuth } from '@/context/AuthContext';

const ProjectSection = ({ title, searchQuery }) => {
  const user = useAuth();
  const userId = user.user.uid;

  const [projects, setProjects] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await getDocuments(userId);
        console.log(response)
        console.log('Response:', response.message); // Check the response structure
        setProjects(response.message);
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
      <div className="flex flex-wrap gap-4"> 
      {projects && projects.length > 0 ? (
        projects.map((document) => (
          <ProjectItem
            key={document.id}
            title={document.Title}
            content={document.Content}
            lastModified={document.LastModified}
            documentId={document.id}
          />
        ))
      ) : (
        <p>No projects found matching the search query.</p>
      )}
      </div>
    </div>
  );
};

export default ProjectSection;
