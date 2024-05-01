import React, { useState } from 'react';
import SaveWorkModal from '@/components/SaveWorkModal';
import { useRouter } from 'next/router';
import SearchBar from '@/components/SearchBar';
import OptionButton from './Options';
import SaveButton from './SaveFile';

interface SuggestionBoxProps {
  header: string;
  content: string;
  onShowAskAI?: () => void;
  onApply?: () => void;
  onClose?: () => void;
}

const SuggestionBox: React.FC<SuggestionBoxProps> = ({ header, content, onShowAskAI, onApply, onClose }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [showAskAI, setShowAskAI] = useState(false);
  const [showSaveContainer, setShowSaveContainer] = useState(false);
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  const handleApplyClick = () => {
    setShowSaveContainer(true);
    setIsClicked(false);
    setShowAskAI(false);
  };

  const handleOpenModal = () => {
    setOpen(true); // Open the modal
  };

  const handleShowAskAI = () => {
    setShowAskAI(true);
    setIsClicked(true);
    if (onShowAskAI) {
      onShowAskAI();
    }
  };

  const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsClicked(false);
    setShowAskAI(false);
    setShowSaveContainer(false);
  };

  return (
    <div>
      {!showSaveContainer && (
        <div
          onClick={() => setIsClicked(true)}
          className="button-container bg-brand-red rounded-lg p-1 flex-col"
        >
          <div className='flex flex-col'>
            <div className="flex flex-row justify-between">
              <h1 className="font-newsreader text-2xl text-white underline">{header}</h1>
              <button className="close-button text-white font-bold" onClick={handleClose}>X</button>
            </div>
            <p className="font-newsreader flex-1 text-white">{content}</p>

          </div>
          
          {isClicked && (
            <div className="suggestion-actions">
              <button
                onClick={handleApplyClick}
                className="action-button font-poppins text-red-700 rounded-md w-28 h-8 bg-white border border-red-700 m-2"
              >
                Apply
              </button>
              <button
                className="close-button font-poppins text-red-700 rounded-md w-28 h-8 bg-white border border-red-700 m-2"
                onClick={handleClose}
              >
                Ignore
              </button>
              {showAskAI && <p>AI is processing your request...</p>}
              <button
                onClick={handleShowAskAI}
                className="action-button font-poppins text-red-700 rounded-md w-64 h-16 bg-white border-2 border-red-700"
              >
                Ask AI
              </button>
            </div>
          )}
        </div>
      )}

      {showSaveContainer && (
        <div className="button-container flex items-center justify-center p-4 bg-white">
          <p className="text-4xl font-newsreader text-center">
            Save Your Work
          </p>
          <div className="button-container">
            <SaveButton text="Save to Editor AI" onClick={handleOpenModal} />
            <SaveButton text="Download as..." />
            <SaveButton text="Save to Google Docs" />
          </div>
        </div>
      )}

      {open && (
        <SaveWorkModal open={open} onClose={() => setOpen(false)}>
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-newsreader mb-6 text-bold text-center">
              Save to Editor AI
            </h1>
            <hr className="border-t-solid border-1 border-grey" />
            <div className="flex flex-row justify-center">
              <p>
                Title:
                <SearchBar />
              </p>
              <p>
                Tags:
                <SearchBar />
              </p>
              <button
                style={{ backgroundColor: '#801212', margin: '5px' }}
                className="action-button"
              >
                Save
              </button>
            </div>
          </div>
        </SaveWorkModal>
      )}
    </div>
  );
};

export default SuggestionBox;
