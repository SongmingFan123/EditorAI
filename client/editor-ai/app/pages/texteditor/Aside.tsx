import React, { useState } from 'react';
import SuggestionBox from './SuggestionBox';
import Filters from './Filters';
import Chatbot from './Chatbot';
import SuggestionsContainer from './SuggestionsContainer';
import { generateSuggestion } from '@/api/handle_ai';
interface AsideProps {
    documentContent: string;
    setDocumentContent: (content: string) => void;
}

const Aside = ({documentContent,setDocumentContent}:AsideProps) => {
    const [showFilters, setShowFilters] = useState(true);
    const [showSuggestionContainer, setShowSuggestionContainer] = useState(false);
    const [showChatbot, setShowChatbot] = useState(false);
    const [suggestions, setSuggestions] = useState([]); // Add this state variable to store suggestions

    const handleSubmit = async () => {
        // Trigger the generation of new suggestions here
        // You can call the generateSuggestion function or any other logic
        console.log('Generating new suggestions...');

        const newSuggestions= await generateSuggestion(documentContent);
        console.log(newSuggestions);
        // setSuggestions(newSuggestions);


    };

    return (
        <div className='flex flex-col flex-colflex-grow ml-5 p-4' style={{ flexBasis: '30%' }}>
            {showFilters ? 
                <Filters documentContent={documentContent} setShowOptions={setShowFilters} setShowAskAI={setShowChatbot} setShowSuggestions={setShowSuggestionContainer} onSubmit={handleSubmit}/>
                : <button onClick={() => setShowFilters(true)}>Show Filters</button>
            }
            
            {showSuggestionContainer ? 
                <SuggestionsContainer setShowSuggestionContainer={setShowSuggestionContainer} suggestions={suggestions} documentContent={documentContent} setDocumentContent={setDocumentContent} />

                // <SuggestionsContainer documentContent={documentContent} setShowSuggestionContainer={setShowSuggestionContainer} setDocumentContent={setDocumentContent}/>
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