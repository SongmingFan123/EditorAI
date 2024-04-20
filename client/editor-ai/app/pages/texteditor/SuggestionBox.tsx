'use client'

import React, { useState } from 'react';
import SaveWorkModal from '@/components/SaveWorkModal';
import { useRouter } from 'next/router';

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
        <div style={{backgroundColor: '#801212', alignItems: 'center', justifyContent: 'center', padding: '20px'}}>
          <p> 
          <button onClick={handleOpenModal} style={{ width: '115.43px', height: '31px', backgroundColor: '#F5F0EF', border: '1px solid #F5F0EF', margin: '5px'}} className="action-button">Apply</button>
                <button style={{ width: '115.43px', height: '31px', backgroundColor: '#F5F0EF', border: '1px solid #F5F0EF', margin: '5px'}} className="action-button">Ignore</button>
                <button onClick={handleAskAIClick} style={{ width: '257px', height: '70px', backgroundColor: '#F5F0EF', border: '2px solid #F5F0EF'}} className="action-button">Ask AI</button>
          </p>
        </div>
      )}
            { <SaveWorkModal open={open} onClose={()=> setOpen(false)}> 
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
          //onClick={handleModal}
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
      </SaveWorkModal> }
    </div>
  );
};

export default SuggestionBox;
