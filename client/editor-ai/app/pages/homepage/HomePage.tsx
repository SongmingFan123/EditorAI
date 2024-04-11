import React, { useEffect, useState, useRef } from 'react';
import { useAuth } from '../../context/AuthContext';
import Head from 'next/head';
import ProjectSection from './ProjectSection';
import SearchBar from './SearchBar';
import ActionButton from './ActionButton';
import { useRouter } from 'next/navigation';
import { handleCreateDocument } from '../../api/document_functions';
import UploadButton from './UploadButton';

const HomePage = () => {
  const [documentName, setDocumentName] = useState('');
  const [documentContent, setDocumentContent] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [createDocumentFailed, setCreateDocumentFailed] = useState(false);

  const isMounted = useRef(false);

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
    if (documentId == true) {
      setCreateDocumentFailed(false);
      setShowPopup(false);
    } else {
      setCreateDocumentFailed(true);
    }
  };

  return (
    <div className="p-0">
      <SearchBar onSearchQueryChange={handleSearchQueryChange} />
      <div className="flex">
        <ActionButton text="Create Document" onClick={() => setShowPopup(true)} />
        {/* <UploadButton setContent={setDocumentContent} setSelectedFile={setDocumentName} /> */}
        <UploadButton createDocument={handleCreateDocument} />

      </div>
      {showPopup && (
        <div className="bg-slate-200">
          <div className="popup-content flex flex-col">
            {createDocumentFailed && <h1>That document name already exists. Select a new name.</h1>}
            <>
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
            </>
            
          </div>
        </div>
      )}
      <div className= 'mb4' style={{ height: '1.5px', background: 'rgba(128, 18, 18, 1)', width: '100%', position: 'relative', top: '-10px', font: 'Bold'}}></div>
      <div className="flex font-newsreader">
        <ProjectSection title={"Priority Projects"} searchQuery={searchQuery} />
      </div>
    </div>
  );
};

export default HomePage;
