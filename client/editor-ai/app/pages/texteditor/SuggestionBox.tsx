'use client'

import React, { useState } from 'react';
import SaveWorkModal from '@/components/SaveWorkModal';
import { useRouter } from 'next/router';
import SearchBar from '@/components/SearchBar';
import OptionButton from './Options';

interface SuggestionBoxProps {
  header: string;
  content: string;
  onShowAskAI?: () => void;
  onApply?: () => void;
}

const SuggestionBox: React.FC<SuggestionBoxProps> = ({ header, content, onShowAskAI, onApply }) => {
  //const router = useRouter();
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

  //const handleModal = () => {
   // router.push("/HomePage").catch(error => console.error('Failed to navigate:', error));
  //};
  

  const handleAskAIClick = () => {
    setShowAskAI(true);
    if (onShowAskAI) {
      onShowAskAI();  
    }
  };

  const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsClicked(false);
    setShowAskAI(false);
    setShowSaveContainer(false);  // Optionally reset this state here if you want the close button to also hide the new container
  };

  return (
    <div>
      {!showSaveContainer && (
        <div onClick={handleClick}>
          <div className="suggestion-header">
            <button className="close-button" onClick={handleClose}></button>
          </div>
          <div className="suggestion-content">
            <p>{content}</p>
          </div>
          {isClicked && (
            <div className="button-container" style={{backgroundColor: '#801212', alignItems: 'center', justifyContent: 'center', padding: '20px'}}>
              <div className="suggestion-actions" style={{fontFamily: 'Poppins'}}>
                <button onClick={handleApplyClick} style={{ width: '115.43px', height: '31px', backgroundColor: '#F5F0EF', border: '1px solid #F5F0EF', margin: '5px'}} className="action-button">Apply</button>
                <button style={{ width: '115.43px', height: '31px', backgroundColor: '#F5F0EF', border: '1px solid #F5F0EF', margin: '5px'}} className="action-button">Ignore</button>
                <button onClick={handleAskAIClick} style={{ width: '257px', height: '70px', backgroundColor: '#F5F0EF', border: '2px solid #F5F0EF'}} className="action-button">Ask AI</button>
              </div>
            </div>
          )}
        </div>
      )}

      {showSaveContainer && (
        <div className="button-container" style={{ alignItems: 'center', justifyContent: 'center', padding: '20px', background:"#FFFFFF"}}>
          <p style={{ fontSize: '28px', fontFamily: 'Newsreader, serif', textAlign: 'center'}}> Save Your Work</p>
                        <div className="button-container" >
                            <OptionButton text = "Save to Editor AI" onClick={handleOpenModal}/> 
                            <OptionButton text = "Download as..." /> 
                            <OptionButton text = "Save to Google Docs" onClick={handleAskAIClick}/> 
                        </div>
        </div>
      )}
            { <SaveWorkModal open={open} onClose={()=> setOpen(false)}> 
        <div className="flex flex-col gap-4" > 
        <h1 className="text-4xl font-newsreader mb-6 text-bold" style={{ textAlign: 'center', fontSize: '46px' , marginTop: '28px'}}>Save to Editor AI</h1>
      <hr className="border-t-solid border-1 border-grey" /> 
      <div className="flex flex-row justify-center"> 
        <p> Title:
        <SearchBar/> </p>
        <p> Tags:
        <SearchBar/> </p>
        <button style={{  backgroundColor: '#801212', margin: '5px',}} className="action-button">
        </button>
        

      </div>
      </div> 
      </SaveWorkModal> }
    </div>
  );
};

export default SuggestionBox;
