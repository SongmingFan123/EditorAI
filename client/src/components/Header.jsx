import React from "react";
import '../styles/Header.css';
import SearchBar from '../components/SearchBar';
import ActionButton from '../components/ActionButton';

const Header = () => (
    <header>
        <div className="title-div">
            <h1>Editor AI</h1>
            <button className="menu-icon">☰</button>
        </div>
        <SearchBar/>
        <div>
            <ActionButton text="Create Document" onClick={() => {}} />
            <ActionButton text="Upload Document" onClick={() => {}} />
        </div>
    </header>
);
export default Header