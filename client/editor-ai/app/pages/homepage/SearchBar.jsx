import React from "react";
import Image from 'next/image';

const SearchBar = () => {
  const handleSearch = () => {
    // Implement your search logic here
    console.log("Search triggered");
  };

  return (
    <div className="max-w-full mx-auto px-4 py-4">
      <div className="flex w-full items-center border-4 custom-border-color rounded-search-bar bg-brand-tan">
        <button type='button' className="h-6 w-6 ml-2" onClick={handleSearch}>
          <Image src="/Vector (1).png" alt="Search Icon" width={15.99} height={15.99} />
        </button>
        <input
          type="text"
          placeholder="Search Documents and Files..."
          className="w-full bg-brand-tan pr-2 py-1 placeholder-brand-red" 
          style={{ fontFamily: 'Poppins' }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
