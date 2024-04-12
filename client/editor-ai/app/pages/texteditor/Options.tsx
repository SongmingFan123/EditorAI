'use client';

import { Poppins } from "next/font/google";
import React, { useState, useRef } from "react";


type OptionButtonProps = {
    text: string;
    onClick?: () => void;

};

const OptionButton = ({ text, onClick}: OptionButtonProps) => {
  //const fileInputRef = useRef<HTMLInputElement>(null);
  const [isActive, setIsActive] = useState(false); 

  const handleButtonClick = () => {
    setIsActive(current => !current);
    if (onClick){
      onClick()
    }
    console.log("clicked");
  };



  const buttonClasses = `font-newsreader inline-block m-4 px-6 py-3 text-lg border-4 custom-border-color 
  rounded-xl cursor-pointer transition-colors duration-300 ease-in-out mr-2 flex items-center justify-center 
  italic ${isActive ? 'bg-brand-red text-white' : 'bg-white text-brand-red hover:bg-brand-red hover:text-white'}`;



  return (
    <div>
      


        <button onClick={handleButtonClick} className={buttonClasses} style={{ border: '6.05px solid rgba(128, 18, 18, 1)', fontSize:'22.5px',
  boxShadow: '3.45px 3.45px 5.18px 0.86px rgba(0, 0, 0, 0.25)', width:'284.14px'
}}>
        {text}
        </button>
    </div>
    
  );
};

export default OptionButton;