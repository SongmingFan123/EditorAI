'use client'


import React, { useState } from 'react';


interface SuggestionBoxProps {
  header: string;
  content: string;
}

interface AskAIBoxProps {
  header: string;
  content: string;
}

const AskAIBox: React.FC<AskAIBoxProps> = ({ header, content}) => {

  'use client'

  const [isClicked, setIsClicked] = useState(false);
  
  const handleClick = () => {
    setIsClicked(true);
  };

  const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation(); 
    setIsClicked(false);
  };
  return (
    <div onClick={handleClick} className={`ai-container ${ai-container}`}>
    </div>
  );
};

const SuggestionBox: React.FC<SuggestionBoxProps> = ({ header, content, onShowEditorAI }) => {

  'use client'

  const [isClicked, setIsClicked] = useState(false);
  const [showAIContainer, setShowAIContainer] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  const handleAIClick = () => {
    setShowAIContainer(true);
  };

  const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation(); 
    setIsClicked(false);

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
        <div className="button-container" style={{backgroundColor: '#801212', height:'auto', alignItems:'center',justifyContent: 'center', padding: '20px'}}> <> Tone Change </>
        <div className="suggestion-actions" style={{color: '#801212', fontFamily: 'poppins'}}>
          <button style={{ width: '115.43px', borderRadius: '4px 4px 4px 4px', height: '31px' , backgroundColor: '#F5F0EF',border : '1px solid #F5F0EF',margin:'5px'}} className="action-button">Apply</button>
          <button style={{ width: '115.43px', borderRadius: '4px 4px 4px 4px', height: '31px' , backgroundColor: '#F5F0EF',border : '1px solid #F5F0EF',margin:'5px'}}  className="action-button">Ignore</button>
          <button onClick={handleAIClick} style={{ width: '257px', borderRadius: '6px 6px 6px 6px', height: '70px', backgroundColor:'#F5F0EF' , border: '2px solid #F5F0EF'}}  className="action-button">Ask AI</button>
        </div>
        </div>
      )}
      {showAIContainer && (
        <div className="ai-container">
          < AskAIBox className='bg-white p-4 rounded-lg font-newsreader' />
        </div>
      )}
    </div>
  );
}

export default SuggestionBox;