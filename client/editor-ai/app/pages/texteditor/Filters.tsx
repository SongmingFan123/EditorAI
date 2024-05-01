import React, { useState } from 'react';
import OptionButton from './Options';
import SubmitButton from './Submit';

interface FiltersProps {
    documentContent: string;
    setShowOptions: (showOptions: boolean) => void;
    setShowAskAI: (showAskAI: boolean) => void;
    setShowSuggestions: (showSuggestions: boolean) => void;
}

const Filters: React.FC<FiltersProps> = ({documentContent, setShowOptions, setShowAskAI, setShowSuggestions}: FiltersProps) => {
    const [showFilters, setShowFilters] = useState(true);

    const handleSubmit= async () => {
        setShowOptions(false);
        setShowAskAI(true)
        setShowSuggestions(true);
    }

    const handleToggleFilters = () => {
        setShowFilters(!showFilters);
    };

    
    return (
        <div>
            <p style={{ fontSize: '28px', fontFamily: 'Newsreader', textAlign: 'center' }}>I need help with:</p>
            {showFilters ? (
                <div className="button-container">
                    <OptionButton text="Grammar/Spell Check" />
                    <OptionButton text="Generate New Source(s)" />
                    <OptionButton text="Create Headline" />
                    <OptionButton text="AP Style Check" />
                    <SubmitButton text="Submit" onClick={handleSubmit} />
                </div>
            ) : (
                <button onClick={handleToggleFilters}>Show Filters</button>
            )}
        </div>
    );
};

export default Filters;
