import React, { useState } from 'react';
import OptionButton from './Options';
import SubmitButton from './Submit';

interface FiltersProps {
    documentContent: string;
    setShowOptions: (showOptions: boolean) => void;
    setShowAskAI: (showAskAI: boolean) => void;
    setShowSuggestions: (showSuggestions: boolean) => void;
    onSubmit: () => void;
}

const Filters: React.FC<FiltersProps> = ({documentContent, setShowOptions, setShowAskAI, setShowSuggestions, onSubmit}: FiltersProps) => {    const [showFilters, setShowFilters] = useState(true);

    const handleSubmit = async () => {
        setShowOptions(false);
        setShowAskAI(true);
        setShowSuggestions(true);
        onSubmit(); // Call the onSubmit prop
    };

    const handleToggleFilters = () => {
        setShowFilters(!showFilters);
    };

    
    return (
        <div className=' flex-grow mr-5 p-5 pb-5'style={{ flexBasis: '30%'}}>
            <p style={{ marginTop: '30px', marginBottom: '10px',fontSize: '28px', fontFamily: 'Newsreader', textAlign: 'center' }}>I need help with:</p>
            {showFilters ? (
                <div className="button-container flex flex-col items-center">
                    <OptionButton text="Grammar/Spell Check" />
                    <OptionButton text="Generate New Source(s)" />
                    <OptionButton text="Create Headline" />
                    <OptionButton text="AP Style Check" />
                    <SubmitButton text="Submit" onClick={handleSubmit} />
                </div>
            ) : (
                <div className="button-container flex flex-col items-center">
                <button onClick={handleToggleFilters} className="mt-4 mx-auto px-6 py-3 text-lg border-4 border-brand-red font-bold rounded-xl cursor-pointer transition-colors duration-300 ease-in-out hover:bg-brand-red hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-opacity-50">
                Show Filters</button>
                </div>
            )}
            
        </div>
    );
};

export default Filters;
