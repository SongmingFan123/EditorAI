"use client"

import React, { useState } from 'react';
import { useAuthContext } from '@/context/AuthContext';
import Head from 'next/head';
import ProjectSection from './ProjectSection';
import SearchBar from './SearchBar';
import ActionButton from './ActionButton';

const HomePage = () => {
  const priorityProjects = [{ name: 'Project 1' }, { name: 'Project 2' }];
  const recentProjects = [{ name: 'Project 3' }, { name: 'Project 4' }];

  const [documentName, setDocumentName] = useState('');
  const [documentContent, setDocumentContent] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const { user } = useAuthContext();
  const userId = user.uid;

  const handleCreateDocument = async () => {
    console.log("creating document")
    try {

      const response = await fetch('http://127.0.0.1:4000/documents/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: userId,
          document_name: documentName,
          document: documentContent,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create document');
      }

      // Document created successfully, handle accordingly (e.g., show a success message)
      console.log('Document created successfully');
      console.log(response);
      
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error('Error creating document:', error);
    }

    console.log("document created")

    

  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handlePopupSubmit = () => {
    // Perform any validation or additional logic here before creating the document
    handleCreateDocument();
    setShowPopup(false);
  };

  return (
    <div className="p-0">
      <SearchBar />
      <div className="flex">
        <ActionButton text="Create Document" onClick={() => setShowPopup(true)} />
        <ActionButton text="Upload Document" />
      </div>
      {showPopup && (
        <div className="bg-slate-200">
          <div className="popup-content flex flex-col">
            <input
              type="text"
              placeholder="Enter document name"
              value={documentName}
              onChange={(e) => setDocumentName(e.target.value)}
              className="rounded-lg p-2 m-2"
            />
            <div className='flex flex-row'>
              <button
                onClick={handlePopupSubmit}
                className="bg-brand-red text-white rounded-full p-2 m-2"
              >
                Submit
              </button>
              <button
                onClick={handlePopupClose}
                className="bg-brand-red text-white rounded-full p-2 m-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
        )}
        <div className= 'mb4' style={{ height: '1.5px', background: 'rgba(128, 18, 18, 1)', width: '100%', position: 'relative', top: '-10px', font: 'Bold'}}></div>
        <div className="flex font-newsreader">
        <ProjectSection title={"Priority Projects"}/>
        <ProjectSection title={"Recent Projects"}/>
      </div>
    </div>
  );
};

export default HomePage;