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
                <>
                <div className="button-container flex flex-col items-center">
                    <OptionButton text="Grammar/Spell Check" />
                    <OptionButton text="Generate New Source(s)" />
                    <OptionButton text="Create Headline" />
                    <OptionButton text="AP Style Check" />
                    <SubmitButton text="Submit" onClick={handleSubmit} />
                </div>
                </>
            ) : (

                <div className="flex justify-center mt-4">
                <button onClick={handleToggleFilters} className="button-container bg-blue-500 font-poppins custon-border border-4 px-4 py-2 bg-brand-red text-white rounded-r shadow-md">
                Show Filters</button>
                </div>
            )}
            
        </div>
    );
};

export default Filters;
