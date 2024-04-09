import React, { useEffect, useState } from 'react';
import ProjectItem from './ProjectItem';
import { getDocuments } from '@/api/document_functions';
import { useAuth } from '@/context/AuthContext';
const ProjectSection = ({ title }) => {

  const [projects, setProjects] = useState([]);

  const user = useAuth();
  const userId = user.user.uid;

  console.log(user)
  console.log(userId)

  const fetchProjects = async () => {

    try {
      const response = await getDocuments(userId);
      console.log(response)
      setProjects(response);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);



  return (
    <div className="m-4">
      <h2 className="text-lg text-gray-700 mb-2">{title}</h2>
      <div className="flex flex-row overflow-x-auto">
        {projects==null ? projects.documents.map((document) => (          
          <ProjectItem
            key={document.id}
            title={document.Title}
            content={document.Content}
            lastModified={document.LastModified}
          />
        )): null}
      </div>
      <button onClick={fetchProjects} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"> Testing </button>
    </div>
  );
};

export default ProjectSection;
