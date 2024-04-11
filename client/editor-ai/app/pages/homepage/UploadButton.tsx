
"use client"

import React, { useState, ChangeEvent } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { useAuth } from '../../context/AuthContext';


// function UploadButton({ setContent,setSelectedFile }) {
function UploadButton({ createDocument }) {

    

    const { user } = useAuth();
    const userId = user?.uid as string;

    const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] as File
        const fileName = file.name;

        // setSelectedFile(fileName);
        const fileContent = readContents(file);

        createDocument(userId, fileName, fileContent)
    };

    const readContents = async (file: File) => {
        const reader = new FileReader();
        reader.onload = async (e) => {
            const text = e.target?.result as string;
            console.log(text);

            return text
            // setContent(text);
        };
        const text = reader.readAsText(file);
        return text;
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