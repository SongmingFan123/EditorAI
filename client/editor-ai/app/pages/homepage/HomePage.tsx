"use client"
//import url=("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");

import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import Head from 'next/head';
import ProjectSection from './ProjectSection';
import SearchBar from './SearchBar';
import ActionButton from './ActionButton';
import DocumentModal from '@/components/DocumentModal';
import { Modal } from 'reactstrap';
import { useRouter } from 'next/navigation';
import { handleCreateDocument } from '../../api/document_functions';
//import { useRouter } from 'next/router';
import Link from 'next/link';

const HomePage = () => {

  const [documentName, setDocumentName] = useState('');
  const [documentContent, setDocumentContent] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [open, setOpen] = useState<boolean>(false);
  const [createDocumentFailed, setCreateDocumentFailed] = useState(false);




  const { user } = useAuth();
  const userId = user?.uid as string;
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handlePopupSubmit = async () => {
    const documentId = await handleCreateDocument(userId, documentName, "");
    console.log('DocumentId:', documentId);
    setShowPopup(false);

    if (documentId == true) {
      setCreateDocumentFailed(false);
      setShowPopup(false);
    } else {
      setCreateDocumentFailed(true);
    }
  };   




  const handleModal = async () => {
    router.push("/pages/texteditor");
  }

  return (
    <div className="p-0">
      <SearchBar onSearchQueryChange={handleSearchQueryChange} />
      <div className="flex" style={{fontFamily:'Poppins'}}>
        <ActionButton text="Create Document" onClick={() => setOpen(true)} icon1="/+.png"/>
        <ActionButton text="Upload Document" onClick={() => setShowPopup(true)} icon2="/Vector.png" />
      </div>
      { <DocumentModal open={open} onClose={()=> setOpen(false)}> 
        <div className="flex flex-col gap-4" > 
        <h1 className="text-4xl font-newsreader mb-6" style={{ textAlign: 'center', fontSize: '46px' , marginTop: '28px'}}>What would you like help with?</h1>
      <hr className="border-t-solid border-1 border-grey" /> 
      <div className="flex flex-row justify-center"> 
        <button 
          className="border border-neutral-300 py-1.5 px-10 
          bg-main-color hover:bg-red-800 text-white " style={{fontFamily:'Poppins', width: '338px',
          height: '239px',
          left:'269px',
          top:'375px',
          borderRadius: '50px 50px 50px 50px',
          cursor: 'pointer', marginTop: '50px', margin: '40px', boxShadow: "3px 3px 7.5px 4px rgba(0, 0, 0, 0.25)", fontSize: '37px' }}
          onClick={handleModal}
        > 
          Edit an article 
        </button>
        <button 
          className="border border-neutral-300 rounded-lg py-1.5 px-10 
          bg-main-color hover:bg-red-800 text-white text-xl " style={{fontFamily:'Poppins', width: '338px',
          height: '239px',
          top:'375px',
          left:'672px',
          borderRadius: '50px 50px 50px 50px',
          cursor: 'pointer', marginTop: '50px', margin: '40px', boxShadow: "3px 3px 7.5px 4px rgba(0, 0, 0, 0.25)" , fontSize: '37px'}}
          onClick={() => setOpen(false)}
        > 
    
          Promote an article 

        </button>
      </div>
      </div> 
      </DocumentModal> }
        <div className= 'mb4 max-w-full m-4 mx-auto divider-line' 
          style={{ height: '1.5px', background: 'rgba(128, 18, 18, 1)', opacity: open ? 0.5 : 1, width: '96%', position: 'relative', top: '10px', font: 'Bold'}}>
          </div>
        <div className="flex font-newsreader font-bold">
        <ProjectSection title={"Priority Projects"}/>
        <ProjectSection title={"Recent Projects"}/>
      </div>
    </div>
    
  );
};

export default HomePage;

