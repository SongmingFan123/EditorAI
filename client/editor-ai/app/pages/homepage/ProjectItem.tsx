import React from 'react';
import { useRouter } from 'next/navigation';
import { handleRemoveDocument } from '../../api/document_functions';
import { useAuth } from '../../context/AuthContext';
import { useState } from 'react';

export interface ProjectItemProps {
  title: string;
  lastModified: string;
  documentId: string; // Add documentId as a prop
}

const ProjectItem = ({
  title,
  lastModified,
  documentId // Use documentId instead of key
}: ProjectItemProps) => {
  const [deleted, setDeleted] = useState<boolean>(false);
  const router = useRouter();
  const { user } = useAuth();
  const userId = user?.uid as string;

  const navigateToProject = () => {
    console.log(`Navigating to project: ${title}`);
    router.push(`./texteditor/?documentid=${documentId}`); // Pass documentId instead of key
  };

  const handleRemoveClick = async () => {
    console.log(`Removing project: ${title}`);
    setDeleted(true);
    await handleRemoveDocument(userId, documentId); // Pass documentId instead of key
  };

  return (
    <>
      {!deleted && (
        <div className="w-64 bg-white rounded-lg shadow-md p-4 relative" >
          <h1 className="text-xl font-bold mb-2 cursor-pointer" onClick={navigateToProject}>{title}</h1>
          <p className="text-gray-500 mb-2">{lastModified}</p>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded absolute top-2 right-2 text-xs"
            onClick={handleRemoveClick}
          >
            X
          </button>
        </div>
      )}
    </>
  );
};

export default ProjectItem;