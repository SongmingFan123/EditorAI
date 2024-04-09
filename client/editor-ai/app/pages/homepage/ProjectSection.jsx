import React from 'react';
import ProjectItem from './ProjectItem';
import { getDocuments } from '@/api/document_functions';
import { useAuth } from '@/context/AuthContext';

const ProjectSection = ({ title }) => {

  const user = useAuth();
  const userId = user.uid;
  const projects = getDocuments(userId);

  return (
    <div className="m-4">
      <h2 className="text-lg text-gray-700 mb-2">{title}</h2>
      <div className="flex flex-row overflow-x-auto">
        {projects.documents.map((document) => (
          <ProjectItem
            key={document.id}
            title={document.Title}
            content={document.Content}
            lastModified={document.LastModified}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;