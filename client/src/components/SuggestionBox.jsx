import React, { useState } from 'react';
import '../styles/SuggestionBox.css';

const SuggestionBox = ({ header, content }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  const handleClose = (event) => {
    event.stopPropagation(); 
    setIsClicked(false);
  };
  


  return (
    <div className="suggestion-box" onClick={handleClick}>
      <div className="suggestion-header">
        <span>{header}</span>
        <button className="close-button" onClick={handleClose}>×</button>
      </div>
      <div className="suggestion-content">
        <p>{content}</p>
      </div>
      {isClicked && (
        <div className="suggestion-actions">
          <button className="action-button">Apply</button>
          <button className="action-button">Ignore</button>
          <button className="action-button">Ask AI</button>
        </div>
      )}
    </div>
  );
}

export default SuggestionBox;
