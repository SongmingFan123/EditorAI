'use client'

import React, { useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from "react";
import DocumentEditor from "./DocumentEditor";
import Aside from "./Aside";




const TextEditor = () => {
    const [documentId, setDocumentId] = useState<string>('');
    const [documentContent, setDocumentContent] = useState<string>('');

    return (
        <div>
<<<<<<< HEAD
            <div className="flex flex-row p-10 bg-brand-tan min-h-screen">
                <div id='editorsection' className="flex-grow md:ml-5 pr-20">
=======
            <div className="flex flex-row">
                <div id='editorsection' className="flex flex-col basis-2/3">
>>>>>>> remotes/origin/implementing-ai-branch
                    {/* back button */}
                    <Link href="./homepage" legacyBehavior> 
                        <a className="text-main-color font-bold font-newsreader flex items-center">
                        <Image src="/back.svg" alt="logo" width={25} height={25} style={{ marginRight: '10px' , marginTop: '15px', marginBottom:'0px'}}/>
                        <span className="mt-5 text-2xl font-poppins"> Back </span> </a>
                    </Link>

                    {/* document editor */}
                    <div>
                    <DocumentEditor 
                        documentContent={documentContent} 
                        setDocumentContent={setDocumentContent} 
                        documentId={documentId}
                        setDocumentId={setDocumentId}
                    />
                    </div>
                </div>

<<<<<<< HEAD
                <div id="asidesection" className="w-1/4 min-w-[300px]">
=======
                <div id="asidesection" className="basis-1/3">
>>>>>>> remotes/origin/implementing-ai-branch
                    {/* aside */}
                    <Aside documentContent={documentContent} setDocumentContent={setDocumentContent} />
                </div>
        </div>
    </div>
)};

export default TextEditor;