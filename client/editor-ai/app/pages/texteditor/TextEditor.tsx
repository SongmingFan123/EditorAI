'use client'

import React, { useEffect } from "react";
import dynamic from 'next/dynamic';
import 'quill/dist/quill.snow.css'
import SuggestionBox from './SuggestionBox'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from "react";
import OptionButton from "./Options";
import SubmitButton from "./Submit";
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';


import {updateDocument,getDocument} from '../../api/document_functions';
import { textGeneration } from '@huggingface/inference'
import { isDeepStrictEqual } from "util";


const ReactQuillNoSSR = dynamic(
  () => import('react-quill'), 
  { ssr: false }
);



const TextEditor = () => {
    const [showSuggestions, setShowSuggestions] = useState(true);
    const [showOptions, setShowOptions] = useState(true);
    const [showSaveContainer, setShowSaveContainer] = useState(false);
    const [showButtonContainer, setShowButtonContainer] = useState(true);
    const router = useRouter();
    const { user } = useAuth();
    const userId = user?.uid as string;
    const [editing, setEditing] = useState(false);

    const [documentName, setDocumentName] = useState<string>('');
    const [documentId, setDocumentId] = useState<string>('');
    const [documentContent, setDocumentContent] = useState<string>('');

    const searchParams = useSearchParams()


    useEffect(() => {
        const documentId = searchParams.get('documentid') as string;
        setDocumentId(documentId);

        const fetchDocument = async (documentId:string) => {
            const document = await getDocument(userId, documentId)
            console.log("Document:", document.message.Title)

            setDocumentName(document.message.Title)
            console.log("test: ", document.message.Content)
            setDocumentContent(document.message.Content)
        }

        fetchDocument(documentId);



    }, []);

    const [generatedText, setGeneratedText] = useState('');

    


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

    const handleShowSuggestions = () => {
        setShowOptions(false);
    };
    
    const handleProcedureContentChange = async (content: string) => {

        console.log("content---->", content);
        setDocumentContent(content);
        await updateDocument(userId,documentId,documentName,content);
    };


    const handleSubmit= async () => {
        handleAskEditorAI(documentContent);
        handleShowSuggestions();
    }

    const handleAskEditorAI = async (content: string) => {
        const accessToken = process.env.NEXT_PUBLIC_HF_ACCESS_TOKEN;
    
        const modelName = 'meta-llama/Meta-Llama-3-8B';
        const prompt = 'Please provide 3-4 grammar suggestions and corrections for the following text in json format with the following headers type, description of error, incorrect text, corrected text';
        const input = `PROMPT: ${prompt}\nCONTENT: ${content}\nSUGGESTIONS:`;
        console.log(content);
    
        const output = await textGeneration({
            accessToken: accessToken,
            model: modelName,
            inputs: input
        });

        console.log(output.generated_text);
    
        const regex = /SUGGESTIONS: (.+)/s;
        const matches = output.generated_text.match(regex);
        const suggestions = matches ? matches[1] : null;
        
        console.log(suggestions);
    
    };

    const handeTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTitle = e.target.value;

        if (newTitle !== documentName) {
            setEditing(true);
            console.log("editing")
        }
        else {
            setEditing(false);
            console.log("not editing")
        }
    };

    const submitNewTitle = () => {
        // updateDocument(userId,documentId,documentName,documentContent);
        // setEditing(false);
    }

    return (
        <div>
            <button type="button" onClick={handleSubmit}>Testing</button>
            <h1 className="text-center"></h1>
            <Link href="./homepage" legacyBehavior> 
                <a className="text-main-color font-bold font-newsreader flex items-center">
                    <Image src="/back.svg" alt="logo" width={20} height={20} style={{ marginRight: '8px' }}/>
                    <span> Back </span> </a>

              </Link>
            <div className='flex justify-between p-5 h-full font-newsreader'>
                <div className='bg-white flex-grow mr-5 p-4' style={{ flexBasis: '70%' }}>
                    {editing && <button onClick={submitNewTitle}>Save</button>}
                    <input className='text-2xl font-bold' placeholder={documentName} onChange={handeTitleChange}/>
                    <ReactQuillNoSSR
                        modules={modules}
                        formats={formats}
                        value={documentContent}
                        placeholder="write your content ...."
                        onChange={handleProcedureContentChange}
                        className='h-[80vh] rounded-lg'
                    />
                </div>
                <div className=' flex-grow ml-5 p-4 'style={{ flexBasis: '30%'}}>
                {showOptions ? (
        <>
            <p style={{ fontSize: '28px', fontFamily: 'Newsreader', textAlign: 'center' }}>I need help with:</p>
            <div className="button-container">
                <OptionButton text="Grammar/Spell Check" /> 
                <OptionButton text="Generate New Source(s)" /> 
                <OptionButton text="Create Headline" /> 
                <OptionButton text="AP Style Check" /> 
                <SubmitButton text="Submit" onClick={handleSubmit} /> 
            </div>
        </>
    ) : (
        <>
        {showButtonContainer && (
            <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: '5px' }}>
                {/* This is the background button container */}
         <SuggestionBox header='content' content='Example Suggestion' onApply={() => setShowSaveContainer(true)} onShowAskAI={() => setShowButtonContainer(false)} />
         </div>
         )}
</>
    )}
                    
        </div>
            </div>
        </div>
    );
};

export default TextEditor;