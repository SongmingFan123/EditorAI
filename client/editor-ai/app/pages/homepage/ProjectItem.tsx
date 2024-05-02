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

  const [showRemoveConfirmation, setShowRemoveConfirmation] = useState<boolean>(false);
  const [showOpenConfirmation, setShowOpenConfirmation] = useState<boolean>(false);

  const editProject = () => {
    console.log(`Navigating to project: ${title}`);
    router.push(`./texteditor/?documentid=${documentId}`); // Pass documentId instead of key
  };

  const promoteProject = () => {
    console.log(`Promoting project: ${title}`);
    router.push(`./promotearticles/?documentid=${documentId}`); 
  }


  const handleRemoveClick = async () => {
    console.log(`Removing project: ${title}`);
    setDeleted(true);
    await handleRemoveDocument(userId, documentId); // Pass documentId instead of key
  };

  return (
    <>
      {!deleted && (
        <div className="w-64 bg-white rounded-lg shadow-md p-4 relative">
          <h1 onClick={() => setShowOpenConfirmation(true)} className="text-xl font-bold mb-2 cursor-pointer">
            {title}
          </h1>
          <p className="text-gray-500 mb-2">{lastModified}</p>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded absolute top-2 right-2 text-xs"
            onClick={() => setShowRemoveConfirmation(true)}
          >
            X
          </button>
          {showOpenConfirmation && (
            <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-4 rounded-lg">
                <p>What would you like to do with this project?</p>
                <button
                  className="bg-brand-red hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
                  onClick={editProject}
                >
                  Edit it
                </button>
                <button
                  className="bg-brand-red hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
                  onClick={promoteProject}
                >
                  Promote it
                </button>
              </div>
            </div>
          )}
          {showRemoveConfirmation && (
            <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-4 rounded-lg">
                <p>Are you sure you want to remove this project?</p>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded" onClick={handleRemoveClick}>
                  Yes
                </button>
                <button
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded"
                  onClick={() => setShowRemoveConfirmation(false)}
                >
                  No
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ProjectItem;