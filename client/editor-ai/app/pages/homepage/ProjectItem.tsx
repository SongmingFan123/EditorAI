import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

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

  const navigateToProject = (documentId: string) => {
    console.log(`Navigating to project: ${title}`);
    router.push(`/texteditor/${documentId}`);
  };

  return (
    <div className="w-36 h-24 mr-4 bg-brand-tan border-brand-red rounded p-4 shadow-sm">
      <h1 onClick={() => navigateToProject(key)}>{title}</h1>
      <p>{lastModified}</p>
    </div>
  );
};

export default ProjectItem;
