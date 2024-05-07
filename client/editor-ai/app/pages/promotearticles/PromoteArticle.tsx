import React, { useEffect, useState } from 'react';
import EnlargedProjectCard from './EnlargedProjectCard';
import { useAuth } from '@/context/AuthContext';
import { getDocument } from '@/api/document_functions';
import { useRouter, useSearchParams } from 'next/navigation';
import ProjectItem from '../homepage/ProjectItem';
import CopyEditor from './CopyEditor';
import Link from 'next/link';
import SocialMediaContainer from './SocialMediaContainer';

const PromoteArticle = () => {
    const { id } = useAuth();
    const searchParams = useSearchParams();
    const documentId = searchParams.get('documentid') as string;
    const [copyText, setCopyText] = useState<string>("Click the refresh button to generate a new social media copy.")
    const [documentContent, setDocumentContent] = useState<string>('');
    const [documentTitle, setDocumentTitle] = useState<string>('');
    const [documentLastModified, setDocumentLastModified] = useState<string>('');

    useEffect(() => {
        const fetchDocument = async (documentId: string) => {
            try {
                const document = await getDocument(id, documentId);
                if(!document) {
                    return;
                }
                setDocumentContent(document.message.Content);
                setDocumentTitle(document.message.Title);
                setDocumentLastModified(document.message.LastModified);
            } catch (error) {
                console.log("Error fetching document:", error);
            }
        };
        fetchDocument(documentId);
    }, []);

    // const documentContent ='This is a test document. It is a test document that is being used to test the copy editor. The copy editor is a tool that allows users to generate social media copy for their articles. The copy editor uses an AI model to generate the copy. The AI model is trained on a large dataset of social media posts. The AI model is able to generate high-quality copy that is tailored to the user\'s needs. The copy editor is a powerful tool that can help users save time and effort when promoting their articles on social media.';

    return (
        <div className="p-10 bg-brand-tan min-h-screen">
            <h1 className="text-3xl text-center m-5 mb-2 font-newsreader">Promote your Project: {documentTitle}</h1>
            <div className="flex items-center justify-start mb-5">
            <Link href="./homepage" legacyBehavior> 
                        <a className="text-main-color font-bold font-newsreader flex items-center">
                        <img src="/back.svg" alt="logo" width={25} height={25} style={{ marginRight: '10px' , marginTop: '15px', marginBottom:'0px'}}/>
                        <span className="mt-5 text-2xl font-poppins"> Back </span> </a>
                    </Link>
                    </div>

            {/* layout 1 */}
            {/* <div className="flex flex-col justify-evenly">
                <SocialMediaContainer />
                <div className='flex justify-evenly flex-row'>
                    <EnlargedProjectCard
                        id={documentId}
                        title={documentTitle}
                        lastModified={documentLastModified}
                        content={documentContent}
                    />
                    <CopyEditor documentContent={documentContent} />
                </div>
            </div> */}

            {/* layout 2 */}
            <div className=" flex flex-row justify-between items-start gap-5">

                <div className='w-4/5 flex justify-evenly flex-col'>
                    <SocialMediaContainer copy={copyText} />
                    <EnlargedProjectCard
                        id={documentId}
                        title={documentTitle}
                        lastModified={documentLastModified}
                        content={documentContent}
                    />
                </div>
                <div className='w-4/5'>
                    <CopyEditor documentContent={documentContent} copyText={copyText} setCopyText={setCopyText} />
                </div>
            </div>
        </div>
    );
    
};

export default PromoteArticle;