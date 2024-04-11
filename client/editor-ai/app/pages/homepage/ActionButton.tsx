import { Poppins } from "next/font/google";
import React, { useRef } from "react";


type ActionButtonProps = {
    text: string;
    onClick?: () => void;

};

const ActionButton = ({ text, onClick, icon1, icon2}: ActionButtonProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    // Trigger the file input dialog when the button is clicked
    console.log("clicked");
  };



  const buttonClasses = "font-poppins h-48 w-36 inline-block m-4 px-4 py-2 border-4 custom-border-color rounded bg-brand-tan text-black cursor-pointer text-base transition-colors duration-300 ease-in-out mr-2 hover:bg-red-800 hover:text-white flex flex-col items-center justify-center";

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        
        style={{ display: 'none' }}

      />


        <button onClick={onClick} className={buttonClasses}>
        {icon1 && <img src="/+.png" className="icon-class mb-8" alt="icon 1" style={{ width: '26px', height: '26px' }} />}
        {icon2 && <img src={"/Vector.png"} alt="icon 2" className="icon-class mb-8" style={{ width: '26px', height: '26px' }} />}
        <span > {text} </span>
        </button>

    </div>
  );
};

export default ActionButton;