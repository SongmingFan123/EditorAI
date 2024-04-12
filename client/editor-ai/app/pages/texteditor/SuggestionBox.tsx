'use client'


import React, { useState } from 'react';


interface SuggestionBoxProps {
  header: string;
  content: string;
  onShowAskAI?: () => void;
}


const SuggestionBox: React.FC<SuggestionBoxProps> = ({ header, content, onShowAskAI }) => {

  'use client'

  const [isClicked, setIsClicked] = useState(false);
  const [showAskAI, setShowAskAI] = useState(false);
  const [ShowSaveWork, setShowSaveWork] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };
  const handleSaveWorkClick = () => {
    setIsClicked(true);
    setShowSaveWork(true);
  };
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
    setShowSaveWork(false); 

  };
  
  return (
    <div onClick={handleClick}>
      <div className="suggestion-header">
        <span></span>
        <button className="close-button" onClick={handleClose}></button>
      </div>
      <div className="suggestion-content">
        <p></p>
      </div>
      {isClicked && (
        <div className="button-container" style={{backgroundColor: '#801212', height:'auto', alignItems:'center',justifyContent: 'center', padding: '20px'}}> <> {header} </>
        <div className="suggestion-actions" style={{color: '#801212', fontFamily: 'poppins'}}>
          <button onClick={handleSaveWorkClick}style={{ width: '115.43px', borderRadius: '4px 4px 4px 4px', height: '31px' , backgroundColor: '#F5F0EF',border : '1px solid #F5F0EF',margin:'5px'}} className="action-button">Apply</button>
          <button style={{ width: '115.43px', borderRadius: '4px 4px 4px 4px', height: '31px' , backgroundColor: '#F5F0EF',border : '1px solid #F5F0EF',margin:'5px'}}  className="action-button">Ignore</button>
          <button onClick={handleAskAIClick} style={{ width: '257px', borderRadius: '6px 6px 6px 6px', height: '70px', backgroundColor:'#F5F0EF' , border: '2px solid #F5F0EF'}}  className="action-button">Ask AI</button>
        </div>
        </div>
      )}
      {showAskAI && (
        <div className="ask-ai-container" style={{backgroundColor: '#801212', height:'auto', alignItems:'center',justifyContent: 'center', padding: '20px'}}>
          <p>suggestiosn</p>
          </div>
      )}
    </div>
  );
}

export default SuggestionBox;