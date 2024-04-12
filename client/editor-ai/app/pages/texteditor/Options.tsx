'use client';

import { Poppins } from "next/font/google";
import React, { useRef } from "react";


type OptionButtonProps = {
    text: string;
    onClick?: () => void;

};

const OptionButton = ({ text, onClick}: OptionButtonProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    // Trigger the file input dialog when the button is clicked
    console.log("clicked");
  };



  const buttonClasses = "font-poppins inline-block m-4 px-6 py-3 text-lg border-4 custom-border-color rounded bg-brand-tan text-black cursor-pointer transition-colors duration-300 ease-in-out mr-2 hover:bg-red-800 hover:text-white flex items-center justify-center"

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        
        style={{ display: 'none' }}

      />


        <button onClick={onClick} className={buttonClasses}>
        {text}
        </button>
    </div>
    
  );
};

export default OptionButton;