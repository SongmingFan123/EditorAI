import React from 'react';
import { useRouter } from 'next/navigation';
import { handleRemoveDocument } from '../../api/document_functions';
import { useAuth } from '../../context/AuthContext';
import { useState } from 'react';
import DeletionModal from './DeletionModal';
import OpenDocumentModal from './OpenDocumentModal';
import ProjectItemDisplay from './ProjectItemDisplay';
import { imageClassification } from '@huggingface/inference';

export interface ProjectItemProps {
  title: string;
  lastModified: string;
  documentId: string; 
  documentContent:string
}

const ProjectItem = ({
  title,
  lastModified,
  documentId,
  documentContent

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

          <ProjectItemDisplay
            title={title}
            lastModified={lastModified}
            content={documentContent}
            setshowOpenConfirmation={setShowOpenConfirmation}
            setShowRemoveConfirmation={setShowRemoveConfirmation}
          />


          <OpenDocumentModal
            title={title}
            showOpenConfirmation={showOpenConfirmation}
            setShowOpenConfirmation={setShowOpenConfirmation}
            editProject={editProject}
            promoteProject={promoteProject}
          />
          

          <DeletionModal
            showRemoveConfirmation={showRemoveConfirmation}
            handleRemoveClick={handleRemoveClick}
            setShowRemoveConfirmation={setShowRemoveConfirmation}
            title={title}
          />
          
        </div>
      )}
    </>
  );
};

export default ProjectItem;