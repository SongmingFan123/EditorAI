'use client'

import React, { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
import 'quill/dist/quill.snow.css'
import SuggestionBox from './SuggestionBox'
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import {updateDocument,getDocument} from '../../api/document_functions';
import { HfInference, textGeneration } from '@huggingface/inference'


const ReactQuillNoSSR = dynamic(
  () => import('react-quill'), 
  { ssr: false }
);


const hf = new HfInference(process.env.HF_ACCESS_TOKEN)


const TextEditor = () => {


    const router = useRouter();
    const { user } = useAuth();
    const userId = user?.uid as string;

    const [documentName, setDocumentName] = useState<string>('');
    const [documentId, setDocumentId] = useState<string>('');
    const [documentContent, setDocumentContent] = useState<string>('');

    const searchParams = useSearchParams()


    useEffect(() => {
        const documentId = searchParams.get('documentid') as string;
        setDocumentId(documentId);

        const fetchDocument = async (documentId:string) => {
            const document = await getDocument(userId, documentId)
            console.log("Document:", document[0])

            setDocumentName(document[0]["Title"])

            const documentContent = getDocument(userId, documentId)
            setDocumentContent(document[0]["Content"])
        }

        fetchDocument(documentId);



    }, []);

    // const {generatedText , setGeneratedText} = useState('');

    


    var modules = {
        toolbar: [
            [{ size: ["small", false, "large", "huge"] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
            [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
                { align: [] }
            ],
            [{ "color": ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color'] }],
        ]
    };
    
    var formats = [
        "header", "height", "bold", "italic",
        "underline", "strike", "blockquote",
        "list", "color", "bullet", "indent",
        "link", "image", "align", "size",
    ];
    
    const handleProcedureContentChange = async (content: string) => {
        console.log("content---->", content);
        await updateDocument(userId,documentId,documentName,content);

        // handleAskEditorAI(content);
    };

    // const handleAskEditorAI = async (input) => {
    //     const output = await hf.textGeneration({
    //         model: 'gpt2',
    //         inputs: input
    //     })

    //     setGeneratedText(output);
    //     console.log("output---->", generatedText);
    // }



    return (
        <div>
            <Link href="./homepage" legacyBehavior> 
                <a className="text-main-color font-bold font-newsreader flex items-center">
                    <Image src="/Vector (2).png" alt="logo" width={20} height={20} />
                    <span>Back</span> </a>
            </Link>
            <input type="text" value={documentName} className="bg-transparent border-b border-gray-300"/>
            {/* <input onClick={handleChangeDocumentName} type="text" value={documentName}/> */}

   
            <div className='flex justify-between p-5 h-full font-newsreader'>
                <div className='flex-1 mr-5'>
                    <ReactQuillNoSSR
                        modules={modules}
                        formats={formats}
                        value={documentContent}
                        onChange={handleProcedureContentChange}
                        className='h-[50vh] border border-gray-300 rounded-lg'
                    />
                </div>
                <div className="w-[20vw]">
                    <div className="bg-white p-4 mb-5 rounded-lg">
                        <h2>Suggested Edits</h2>
                        <ul className='list-none p-0'>
                            <li className='mb-2.5 bg-main-color rounded-lg text-white'style={{fontWeight: '25'}}>
                                <SuggestionBox header="Suggestion 1" content="This is a suggestion" />
                            </li>
                            <li className='mb-2.5 bg-main-color rounded-lg text-white'>
                                <SuggestionBox header="Suggestion 2" content="This is another suggestion" />
                            </li>
                        </ul>
                    </div>
                    <div className='bg-white p-4 rounded-lg font-newsreader'>
                        <h2>Ask EditorAI</h2>
                        {/* <p>{generatedText}</p> */}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default TextEditor;