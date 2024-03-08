import React, { useRef } from "react";

type ActionButtonProps = {
    text: string;
    onClick?: () => void;
    onFileSelected?: (file: File) => void;
    href?: string;
};

const ActionButton = ({ text, onClick, onFileSelected, href }: ActionButtonProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    // Trigger the file input dialog when the button is clicked
    if (onFileSelected) {
      fileInputRef.current?.click();
    }
    // Call the onClick handler if provided
    if (onClick) {
      onClick();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Handle the file upload when a file is selected
    if (event.target.files?.length && onFileSelected) {
      onFileSelected(event.target.files[0]);
    }
  };

  const buttonClasses = "h-36 inline-block m-4 px-4 py-2 border-4 border-red-700 rounded bg-brand-tan text-black cursor-pointer text-base transition-colors duration-300 ease-in-out mr-2 hover:bg-red-700 hover:text-white";

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      {href ? (
        <a href={href} className={buttonClasses}>
          {text}
        </a>
      ) : (
        <button onClick={handleButtonClick} className={buttonClasses}>
          {text}
        </button>
      )}
    </div>
  );
};

export default ActionButton;