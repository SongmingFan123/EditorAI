"use client"

import React, { useEffect, useState } from 'react';
import EnlargedProjectCard from './EnlargedProjectCard';
import { useAuth } from '@/context/AuthContext';
import { getDocument } from '@/api/document_functions';
import { useRouter, useSearchParams } from 'next/navigation';
import ProjectItem from '../homepage/ProjectItem';
import CopyEditor from './CopyEditor';
import Link from 'next/link';

const PromoteArticle = () => {
    const { id } = useAuth();
    const searchParams = useSearchParams();
    const documentId = searchParams.get('documentid') as string;
    const [document, setDocument] = useState<any>(null);

    useEffect(() => {
        const fetchDocument = async (documentId: string) => {
            try {
                const document = await getDocument(id, documentId);
                setDocument(document);
            } catch (error) {
                console.log("Error fetching document:", error);
            }
        };
        fetchDocument(documentId);
    }, []);

    const documentContent ='This is a test document. It is a test document that is being used to test the copy editor. The copy editor is a tool that allows users to generate social media copy for their articles. The copy editor uses an AI model to generate the copy. The AI model is trained on a large dataset of social media posts. The AI model is able to generate high-quality copy that is tailored to the user\'s needs. The copy editor is a powerful tool that can help users save time and effort when promoting their articles on social media.';
    const documentTitle = 'Test Document';

    return (
        <div className="flex flex-row">
            {/* <Link href="./homepage"> 
                <a className="text-main-color font-bold font-newsreader flex items-center">
                    <Image src="/back.svg" alt="logo" width={20} height={20}/>
                    <span> Back </span> 
                </a>
            </Link> */}
            <div className="w-1/2">
                <EnlargedProjectCard
                    id={documentId}
                    title={documentTitle}
                    lastModified={document?.message.LastModified}
                    content={documentContent}
                />
            </div>
            <div className="w-1/2">
                <CopyEditor documentContent={document?.message.Content} />
            </div>
        </div>
    );
};

export default PromoteArticle;
