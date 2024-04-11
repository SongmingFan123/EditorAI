
"use client"

import React, { useState, ChangeEvent } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';


function UploadButton({ setContent,setSelectedFile }) {

    const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] as File
        const fileName = file.name;

        setSelectedFile(fileName);
        readContents(file);
        console.log(file);
    };

    const readContents = async (file: File) => {
        const reader = new FileReader();
        reader.onload = async (e) => {
            const text = e.target?.result as string;
            console.log(text);
            setContent(text);
        };
        reader.readAsText(file);
    }




    return (
        <div>
            <input 
                type="file" 
                className="font-poppins h-36 inline-block m-4 px-4 py-2 border-4 custom-border-color rounded bg-brand-tan text-black cursor-pointer text-base transition-colors duration-300 ease-in-out mr-2 hover:bg-red-700 hover:text-white" 
                onChange={handleFileUpload} 
                accept=".txt" 
            />
        </div>
    );
}

export default UploadButton;