import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

interface Props {
  setDocumentName: (name: string) => void;
  handleCreateDocument: (userId: string, documentName: string, documentContent: string) => Promise<string | null>;
  setShowPopup: (showPopup: boolean) => void;
  documentName: string;
}

const DocumentCreation: React.FC<Props> = ({ setDocumentName, handleCreateDocument, setShowPopup, documentName }) => {
  const [createDocumentFailed, setCreateDocumentFailed] = useState(false);

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const router = useRouter();
  const { user } = useAuth();
  const userId = user?.uid as string;

  const handlePopupSubmit = async () => {
    const documentId = await handleCreateDocument(userId, documentName, "");
    console.log('DocumentId:', documentId);
    if (documentId == null) {
      setCreateDocumentFailed(true);
      console.log('Document creation failed');
    } else {
      router.push(`/pages/texteditor?documentid=${documentId}`);
    }
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="popup-content flex flex-col">
          {createDocumentFailed && <h1 className="text-red-500 mb-4">That document name already exists</h1>}
          <>
            <input
              type="text"
              placeholder="Enter document name"
              value={documentName}
              onChange={(e) => setDocumentName(e.target.value)}
              className="rounded-lg p-2 m-2 bg-transparent"
            />
            <div className="flex flex-row">
              <button onClick={handlePopupSubmit} className="bg-brand-red text-white rounded-full p-2 m-2">
                Submit
              </button>
              <button onClick={handlePopupClose} className="bg-brand-red text-white rounded-full p-2 m-2">
                Cancel
              </button>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default DocumentCreation;
