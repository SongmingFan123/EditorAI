import React from 'react';
import SuggestionBox from './SuggestionBox';

interface SuggestionsContainerProps {
    // Add props here
    setShowSuggestionContainer: (showSuggestionContainer: boolean) => void;
}

const SuggestionsContainer: React.FC<SuggestionsContainerProps> = ({ setShowSuggestionContainer }) => {

    const handleApply = () => {
        console.log('Apply clicked');
    }

    const handleShowAskAI = () => {
        console.log('Ask AI clicked');
    }


    return (
        <div>
            <div className='flex flex-row justify-between font-bold'>
                <h1 className='font-newsreader text-2xl'>Suggestions</h1>
                <button onClick={()=>setShowSuggestionContainer(false)}>X</button>
            </div>
            <div>
                <SuggestionBox header='content' content='Example Suggestion' onApply={handleApply} onShowAskAI={handleShowAskAI} />
                <SuggestionBox header='content' content='Example Suggestion' onApply={handleApply} onShowAskAI={handleShowAskAI} />
                <SuggestionBox header='content' content='Example Suggestion' onApply={handleApply} onShowAskAI={handleShowAskAI} />
                <SuggestionBox header='content' content='Example Suggestion' onApply={handleApply} onShowAskAI={handleShowAskAI} />
            </div>
            
        </div>
    );
};

export default SuggestionsContainer;