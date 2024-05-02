import React, { useState } from 'react';
import { getDocument } from '@/api/document_functions';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { handleClientScriptLoad } from 'next/script';

interface ProjectItemProps {
    id: string;
    title: string;
    lastModified: string;
    content:string;
}

const EnlargedProjectCard: React.FC<ProjectItemProps> = ({ id, title, lastModified, content }: ProjectItemProps) => {

    const router = useRouter();

    const editProject = () => {
        router.push(`./texteditor/?documentid=${id}`); // Pass documentId instead of key
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-4 relative">
            <div className='flex flex-row justify-between'>
                <h1 className="text-xl font-bold mb-2 cursor-pointer">{title}</h1>
                <img src='/document-color.svg' alt="open icon" width={100} height={100} onClick={editProject}/>
            </div>
            <p className="text-gray-500 mb-2">{lastModified}</p>
            <p className="text-black-500 mb-2">{content}</p>
        </div>
    );
};

export default EnlargedProjectCard;