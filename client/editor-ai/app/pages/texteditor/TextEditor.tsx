'use client'

import React, { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
import 'quill/dist/quill.snow.css';
import SuggestionBox from './SuggestionBox';
import Link from 'next/link';
import Image from 'next/image';
import axios from "axios";
import { TextEditorProps } from "./page";


const ReactQuillNoSSR = dynamic(
  () => import('react-quill'), 
  { ssr: false }
);

const TextEditor: React.FC<TextEditorProps>  = ( {documentID, userID, newDoc, docName} ) => {

    const [myContent, setMyContent] = useState("");
    const [myTitle, setMyTitle] = useState("");

    // API calls
    const getMyDocuments = async () => { // get document
        try{
            const response = await axios.get(`http://127.0.0.1:5000/document/read/${userID}/${documentID}`); // change to deployment uri
            const message = response.data.message[0];
            console.log("hello world", response.data.message[0].Content);
            setMyContent(message.Content);
            setMyTitle(message.Title);
        } catch(error) {
            console.log(error);
        }
    }

    const saveMyDocuments = async () => { // save document
        try{
            const payload = {
                user_id: userID,
                document_name: myTitle,
                document_id: documentID,
                new_document: myContent,
            };
            const response = await axios.put('http://127.0.0.1:5000/document/update', payload, { // change to deployment uri
                headers: {
                    'Content-Type': 'application/json'
                }
            });       
            console.log("Update successful", response.data);     
        } catch(error) {
            console.log(error);
        }
    }

    const createMyDocuments = async () => { // create new document
        try{
            const payload = {
                user_id: userID,
                document_name: "",
                document: "",
            };
            const response = await axios.put('http://127.0.0.1:5000/document/create', payload, { // change to deployment uri
                headers: {
                    'Content-Type': 'application/json'
                }
            });      
            console.log("Update successful", response.data);
      
        } catch(error) {
            console.log(error);
        }
    }



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
    
    const handleProcedureContentChange = (content: string) => {
        setMyContent(content)
        console.log("content---->", myContent);
    };

   

    useEffect(() => {
        if(!newDoc) {
            getMyDocuments(); // get the document
        } else {
            createMyDocuments(); // create new document
        }
    }, [])


    return (
        <div>

            <h1 className="text-center"></h1>
            <Link href="./homepage" legacyBehavior> 
                <a className="text-main-color font-bold font-newsreader flex items-center">
                    <Image src="/Vector (2).png" alt="logo" width={20} height={20} />
                    <span>Back</span> </a>
              </Link>
             <h1 className="text-center">{myTitle}</h1> 
            <div className='flex justify-between p-5 h-full font-newsreader'>
                <div className='flex-1 mr-5'>
                    <ReactQuillNoSSR
                        modules={modules}
                        formats={formats}
                        value={myContent}
                        placeholder="write your content ...."
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
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TextEditor;