'use client';

import React from "react";
import '../styles/Header.css';
import SearchBar from '../components/SearchBar'; // Ensure this is a .tsx file with appropriate exports


// Assuming ActionButton is the component with onClick event handler

import dynamic from 'next/dynamic';

const ActionButtonClient = dynamic(() => import('../components/ActionButton'), {
  ssr: false, // This prevents server-side rendering of the component
});



const Header: React.FC = () => (
    <header>
        <div className="title-div">
            <h1>Editor AI</h1>
            <button className="menu-icon">☰</button>
        </div>
        <SearchBar />
        <div>
            <ActionButtonClient text="Create Document" onClick={() => {}} />
            <ActionButtonClient text="Upload Document" onClick={() => {}} />
        </div>
    </header>
);

export default Header;
