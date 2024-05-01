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
            <div className="flex flex-row">
                <div id='editorsection' className="w-7/10">
                    {/* back button */}
                    <Link href="./homepage" legacyBehavior> 
                        <a className="text-main-color font-bold font-newsreader flex items-center">
                        <Image src="/back.svg" alt="logo" width={20} height={20} style={{ marginRight: '8px' }}/>
                        <span> Back </span> </a>
                    </Link>

                    {/* document editor */}
                    <DocumentEditor 
                        documentContent={documentContent} 
                        setDocumentContent={setDocumentContent} 
                        documentId={documentId}
                        setDocumentId={setDocumentId}
                    />
                </div>

                <div id="asidesection" className="w-3/10">
                    {/* aside */}
                    <Aside documentContent={documentContent} />
                </div>
        </div>
    </div>
)};

export default TextEditor;