import React, { useRef } from "react";

type ActionButtonProps = {
    text: string;
    onClick?: () => void;

};

const ActionButton = ({ text, onClick}: ActionButtonProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    // Trigger the file input dialog when the button is clicked
    console.log("clicked");
  };



  const buttonClasses = "font-poppins h-36 inline-block m-4 px-4 py-2 border-4 custom-border-color rounded bg-brand-tan text-black cursor-pointer text-base transition-colors duration-300 ease-in-out mr-2 hover:bg-red-700 hover:text-white";

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}

      />


        <button onClick={handleButtonClick} className={buttonClasses}>
          {text}
        </button>

    </div>
  );
};

export default ActionButton;