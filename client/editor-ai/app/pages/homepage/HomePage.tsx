"use client"
//import url=("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");

import React, { useState } from 'react';
import { useAuthContext } from '@/context/AuthContext';
import Head from 'next/head';
import ProjectSection from './ProjectSection';
import SearchBar from './SearchBar';
import ActionButton from './ActionButton';
import DocumentModal from '@/components/DocumentModal';
import { Modal } from 'reactstrap';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const HomePage = () => {
  const priorityProjects = [{ name: 'Project 1' }, { name: 'Project 2' }];
  const recentProjects = [{ name: 'Project 3' }, { name: 'Project 4' }];

  const [documentName, setDocumentName] = useState('');
  const [documentContent, setDocumentContent] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [open, setOpen] = useState<boolean>(false)
  const { user } = useAuthContext();
  const userId = user.uid;
  const router = useRouter();

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

  const handleModal = async () => {
    router.push("pages/texteditor");
  }

  return (
    <div className="p-0">
      <SearchBar />
      <div className="flex" style={{fontFamily:'Poppins'}}>
        <ActionButton text="Create Document" onClick={() => setOpen(true)} icon1="/+.png"/>
        <ActionButton text="Upload Document" onClick={() => setShowPopup(true)} icon2="/Vector.png" />
      </div>
      {/* <DocumentModal open={open} onClose={()=> setOpen(false)}> 
        <div className="flex flex-col gap-4"  style={{ width: '80%', maxWidth: '800px', height: 'auto' }}> 
        <h1 className="text-4xl font-newsreader mb-6">What would you like help with?</h1>
      <hr className="border-t-solid border-1 border-grey" /> 
      <div className="flex flex-row justify-center"> 
        <button 
          className="border border-neutral-300 rounded-lg py-1.5 px-10 
          bg-main-color hover:bg-red-700 text-white" style={{fontFamily:'Poppins'}}
          onClick={handleModal}
        > 
          Edit an article 
        </button>
        <button 
          className="border border-neutral-300 rounded-lg py-1.5 px-10 
          bg-main-color hover:bg-red-700 text-white" style={{fontFamily:'Poppins'}}
          onClick={() => setOpen(false)}
        > 
          Promote an article 
        </button>
      </div>
      </div> 
      </DocumentModal> */}
        <div className= 'mb4 max-w-full m-4 mx-auto' style={{ height: '1.5px', background: 'rgba(128, 18, 18, 1)', width: '96%', position: 'relative', top: '10px', font: 'Bold'}}></div>
        <div className="flex font-newsreader font-bold">
        <ProjectSection title={"Priority Projects"}/>
        <ProjectSection title={"Recent Projects"}/>
      </div>
    </div>
    
  );
};

export default HomePage;

