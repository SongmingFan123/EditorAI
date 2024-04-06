'use client'


import React, { useState } from 'react';

interface SuggestionBoxProps {
  header: string;
  content: string;
}

const SuggestionBox: React.FC<SuggestionBoxProps> = ({ header, content }) => {

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
    <div onClick={handleClick}>
      <div className="suggestion-header">
        <span>{header}</span>
        <button className="close-button" onClick={handleClose}>×</button>
      </div>
      <div className="suggestion-content">
        <p>{content}</p>
      </div>
      {isClicked && (
        <div className="suggestion-actions" style={{color: '#801212', fontFamily: 'poppins'}}>
          <button style={{ width: '115.43px', borderRadius: '4px 4px 4px 4px', height: '31px' , backgroundColor: ' #F5F0EF',border : '1px solid #F5F0EF',margin:'5px'}} className="action-button">Apply</button>
          <button style={{ width: '115.43px', borderRadius: '4px 4px 4px 4px', height: '31px' , backgroundColor: ' #F5F0EF',border : '1px solid #F5F0EF',margin:'5px'}}  className="action-button">Ignore</button>
          <button style={{ width: '115.43px', borderRadius: '4px 4px 4px 4px', height: '31px' , backgroundColor: ' #F5F0EF',border : '1px solid #F5F0EF',margin:'5px'}}  className="action-button">Ask AI</button>
        </div>
      )}
    </div>
  );
}

export default SuggestionBox;
