'use client'

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
  onClose?: ()=> void;
}

const SuggestionBox: React.FC<SuggestionBoxProps> = ({ header, content, onShowAskAI, onApply, onClose }) => {
  //const router = useRouter();
  const [isClicked, setIsClicked] = useState(false);
  const [showAskAI, setShowAskAI] = useState(false);
  const [showSaveContainer, setShowSaveContainer] = useState(false); 
  const [open, setOpen] = useState<boolean>(false);
  const [showSplitContainer, setShowSplitContainer] = useState(true);
  

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
    setShowSaveContainer(false);  // Optionally reset this state here if you want the close button to also hide the new container
  };

  return (
    <div>
      {!showSaveContainer && (
        <div onClick={() => setIsClicked(true)} className="button-container" style={{ borderRadius: '7px', backgroundColor: '#801212', alignItems: 'center', justifyContent: 'center', padding: '20px', flexDirection: 'column' }}>
          <div className="suggestion-header" style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <p style={{ fontFamily: 'Newsreader', flex: '1', color: '#FFFFFF' }}>{content}</p>
            <button className="close-button" onClick={handleClose} style={{ color: '#FFFFFF'}}>X</button>
          </div>
          {isClicked && (
            <div className="suggestion-actions">
              <button onClick={handleApplyClick} className="action-button" style={{fontFamily: 'Poppins', color: '#801212' , borderRadius: '5px', width: '115.43px', height: '31px', backgroundColor: '#F5F0EF', border: '1px solid #F5F0EF', margin: '5px'}}>Apply</button>
              <button className="close-button" onClick={handleClose} style={{ fontFamily: 'Poppins',color: '#801212' ,borderRadius: '5px',  width: '115.43px', height: '31px', backgroundColor: '#F5F0EF', border: '1px solid #F5F0EF', margin: '5px'}} >Ignore</button>
              {showAskAI && <p>AI is processing your request...</p>}
              <button onClick={handleShowAskAI} className="action-button" style={{fontFamily: 'Poppins',color: '#801212' ,  borderRadius: '5px', width: '257px', height: '70px', backgroundColor: '#F5F0EF', border: '2px solid #F5F0EF'}} >Ask AI</button>
            </div>
          )}
        </div>
      )}

      {showSaveContainer && (
        <div className="button-container" style={{ alignItems: 'center', justifyContent: 'center', padding: '20px', background:"#FFFFFF"}}>
          <p style={{ fontSize: '28px', fontFamily: 'Newsreader, serif', textAlign: 'center'}}> Save Your Work</p>
                        <div className="button-container" >
                            <SaveButton text = "Save to Editor AI" onClick={handleOpenModal}/> 
                            <SaveButton text = "Download as..." /> 
                            <SaveButton text = "Save to Google Docs"/> 
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
        <button style={{  backgroundColor: '#801212', margin: '5px',}} className="action-button"> Save
        </button>
        

      </div>
      </div> 
      </SaveWorkModal> }
    </div>
  );
};

export default SuggestionBox;
