'use client'

import React from "react";
import dynamic from 'next/dynamic';
import 'quill/dist/quill.snow.css'
import SuggestionBox from './SuggestionBox'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from "react";
import OptionButton from "./Options";


const ReactQuillNoSSR = dynamic(
  () => import('react-quill'), 
  { ssr: false }
);



const TextEditor = () => {
    const [showSuggestions, setShowSuggestions] = useState(true);
    const [showOptions, setShowOptions] = useState(true);



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
        console.log("content---->", content);
    };
    const handleShowSuggestions = () => {
        setShowOptions(false);
  
    
    };
    return (
        <div>
            <h1 className="text-center"></h1>
            <Link href="./homepage" legacyBehavior> 
                <a className="text-main-color font-bold font-newsreader flex items-center">
                    <Image src="/Vector (2).png" alt="logo" width={20} height={20} />
                    <span> Back </span> </a>

              </Link>
            <div className='flex justify-between p-5 h-full font-newsreader'>
                <div className='bg-white flex-grow mr-5 p-4' style={{ flexBasis: '70%' }}>
                    <ReactQuillNoSSR
                        modules={modules}
                        formats={formats}
                        placeholder="write your content ...."
                        onChange={handleProcedureContentChange}
                        className='h-[80vh] rounded-lg'
                    />
                </div>
                <div className=' flex-grow ml-5 p-4 'style={{ flexBasis: '30%'}}>
                    {showOptions ? ( <> 
                        <p style={{ fontSize: '28px', fontFamily: 'Newsreader, serif', textAlign: 'center'}}> I need help with: </p>
                        <div className="button-container" >
                            <OptionButton text = "Grammer/Spell Check" /> 
                            <OptionButton text = "Generate New Source(s)" /> 
                            <OptionButton text = "Create Headline" /> 
                            <OptionButton text = "Ap Style Check" /> 
                            <OptionButton text = "Submit" onClick={handleShowSuggestions} /> 
                        </div>
                    </>
                    ) : (
                        <> Suggestions  <SuggestionBox header='content' content='content' /> </>
                    )}
                    
                </div>
            </div>
        </div>
    );
};

export default TextEditor;
  