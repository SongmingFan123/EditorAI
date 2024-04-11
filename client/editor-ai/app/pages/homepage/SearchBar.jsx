import React from "react";
import Image from 'next/image';
import { useState } from "react";

const SearchBar = ({onSearchQueryChange}) => {


  const handleQueryChange = (e) => {
    const text = e.target.value;
    console.log(`Query: ${text}`)
    onSearchQueryChange(text);
  };

  return (<div className="flex items-center m-4 relative">
      <input
        type="text" 
        placeholder="       Search Documents and Files" 
        onChange={handleQueryChange}
        className="w-full p-2 border-4 custom-border-color rounded-search-bar placeholder-brand-red bg-brand-tan" style={{fontFamily: 'Poppins'}}
    />
    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
      <Image src="/Vector (1).png" alt="Search Icon" width={15.99} height={15.99} />
    </div>
</div>)
};
//add function for handling search bar 
export default SearchBar 

