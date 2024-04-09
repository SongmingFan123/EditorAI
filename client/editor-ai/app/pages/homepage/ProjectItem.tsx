import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { handleRemoveDocument } from '../../api/document_functions';
import { useAuth } from '@/context/AuthContext';

interface ProjectItemProps {
  key: string;
  title: string;
  content: string;
  lastModified: string;
}

const ProjectItem = ({
  key,
  title,
  content,
  lastModified
}: ProjectItemProps) => {
  const router = useRouter();
  const { user } = useAuth();
  const userId = user?.uid as string;

  const navigateToProject = (documentId: string) => {
    console.log(`Navigating to project: ${title}`);
    router.push(`/texteditor/${documentId}`);
  };

  const handleRemoveClick = async () => {
    await handleRemoveDocument(userId, key);
  };

  return (
    <div className="w-36 h-24 mr-4 bg-brand-tan border-brand-red rounded p-4 shadow-sm">
      <h1 onClick={() => navigateToProject(key)}>{title}</h1>
      <p>{lastModified}</p>
      <button onClick={handleRemoveClick}>X</button>
    </div>
  );
};

export default ProjectItem;
