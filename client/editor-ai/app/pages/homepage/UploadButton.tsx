"use client"

import React, { useState, ChangeEvent } from 'react';
//import { Document, Page, pdfjs } from 'react-pdf';
import { useAuth } from '../../context/AuthContext';

function UploadButton({ createDocument }) {
    const { user } = useAuth();
    const userId = user?.uid as string;

    const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] as File;

        const fileName = file.name as string;
        const fileContent = await readContents(file) as string;

        console.log("User ID: ", userId);
        console.log("File Name: ", fileName);
        console.log("File Content: ", fileContent);
        createDocument(userId, fileName, fileContent);
    };

    const readContents = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const res = e.target?.result as string;
                resolve(res);
            };
            reader.onerror = (error) => {
                reject(error);
            };
            reader.readAsText(file);
        });
    };

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