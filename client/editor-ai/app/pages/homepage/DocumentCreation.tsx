import React from 'react';

interface Props {
    documentName: string;
    setDocumentName: (name: string) => void;
    handlePopupSubmit: () => void;
    handlePopupClose: () => void;
}

const DocumentCreation: React.FC<Props> = ({ documentName, setDocumentName,handlePopupSubmit, handlePopupClose}) => {
    return (
        <div className="bg-slate-200">
          <div className="popup-content flex flex-col">
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
    );
};

export default DocumentCreation;