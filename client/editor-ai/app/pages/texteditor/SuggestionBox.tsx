import React, { useState } from 'react';
import SaveWorkModal from '@/components/CreateDocumentModal';
import { useRouter } from 'next/router';
import OptionButton from './Options';
import SaveButton from './SaveFile';

interface SuggestionBoxProps {
  header: string;
  content: string;
  onShowAskAI?: () => void;
  incorrectLine?: string;
  correctLine?: string;
  documentContent: string;
  setDocumentContent: (content: string) => void;  
}

const SuggestionBox: React.FC<SuggestionBoxProps> = ({
  header,
  content,
  onShowAskAI,
  incorrectLine,
  correctLine,
  documentContent,
  setDocumentContent
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [showSaveContainer, setShowSaveContainer] = useState(false);
  const [open, setOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState(true); // Add this state variable

  const handleClick = () => {
    setIsClicked(true);
  };

  const handleApplyClick = () => {
    if (incorrectLine && correctLine) {
      const regex = new RegExp(incorrectLine, 'g');
      const newContent = documentContent.replace(regex, correctLine);
      setDocumentContent(newContent);
      setIsVisible(false); // Set isVisible to false when handleApplyClick is called
    }
  };

  const handleOpenModal = () => {
    setOpen(true); // Open the modal
  };

  const handleShowAskAI = () => {

  };

  const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsClicked(false);
    setIsVisible(false); // Set isVisible to false when handleClose is called
  };

  if (!isVisible) {
    return null; // Render nothing if isVisible is false
  }

  return (
    <div>
      {!showSaveContainer && (
        <div onClick={() => setIsClicked(true)} className="button-container bg-brand-red rounded-lg p-2 m-2 flex-col">
          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <h1 className="font-newsreader text-2xl text-white underline">{header}</h1>
            </div>
          </div>

          {isClicked && (
            <div className="suggestion-actions">
              <p className="font-newsreader flex-1 text-white">{content}</p>
              <br />
              <p className="font-newsreader flex-1 text-white">Incorrect line: &quot;{incorrectLine}&quot;</p>
              <button
                onClick={handleApplyClick}
                className="action-button text-sm font-poppins text-brand-red rounded-md w-24 h-8 bg-white shadow-md m-2"
              >
                Apply
              </button>
              <button
                className="close-button font-poppins text-sm text-brand-red rounded-md w-24 h-8 bg-white shadow-md m-2"
                onClick={handleClose}
              >
                Ignore
              </button>
              <div className="flex justify-center w-full">
              <button
                onClick={handleShowAskAI}
                className="action-button font-poppins text-brand-red rounded-md w-52 h-14 bg-white shadow-md"
              >
                Ask AI
              </button>
              </div>
            </div>
          )}
        </div>
      )}


    </div>
  );
};

export default SuggestionBox;