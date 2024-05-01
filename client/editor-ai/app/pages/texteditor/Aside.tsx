import React, { useState } from 'react';
import SuggestionBox from './SuggestionBox';
import Filters from './Filters';
import Chatbot from './Chatbot';
import SuggestionsContainer from './SuggestionsContainer';
interface AsideProps {
    documentContent: string;
}

const Aside = ({documentContent}:AsideProps) => {
    const [showFilters, setShowFilters] = useState(true);
    const [showSuggestionContainer, setShowSuggestionContainer] = useState(false);
    const [showChatbot, setShowChatbot] = useState(false);

    return (
        <div className='flex flex-col flex-colflex-grow ml-5 p-4' style={{ flexBasis: '30%' }}>
            {showFilters ? 
                <Filters documentContent={documentContent} setShowOptions={setShowFilters} setShowAskAI={setShowChatbot} setShowSuggestions={setShowSuggestionContainer}/>
                : <button onClick={() => setShowFilters(true)}>Show Filters</button>
            }
            
            {showSuggestionContainer ? 
                <SuggestionsContainer setShowSuggestionContainer={setShowSuggestionContainer}/>
                : <button onClick={() => setShowSuggestionContainer(true)}>Show Suggestions</button>
            }
            
            {/* chatbot */}
            {showChatbot 
                ? <Chatbot setShowAskAI={setShowChatbot} documentContent={documentContent} />
                : <button onClick={() => setShowChatbot(true)}>Show Chatbot</button>
            }
        </div>
    );
};

export default Aside;