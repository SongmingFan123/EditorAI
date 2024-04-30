import React, { useState } from 'react';
import OptionButton from './Options';
import SubmitButton from './Submit';
import SuggestionBox from './SuggestionBox';
import { textGeneration } from '@huggingface/inference'

interface AsideProps {
    documentContent: string;
}

const Aside = ({documentContent}:AsideProps) => {
    const [showOptions, setShowOptions] = useState(true);
    const [showButtonContainer, setShowButtonContainer] = useState(true);
    const [showSaveContainer, setShowSaveContainer] = useState(false);
    const [generatedText, setGeneratedText] = useState('');

    const handleShowSuggestions = () => {
        setShowOptions(false);
    };
    
    const handleSubmit= async () => {
        handleAskEditorAI(documentContent);
        handleShowSuggestions();
    }

    const handleAskEditorAI = async (content: string) => {
        const accessToken = process.env.NEXT_PUBLIC_HF_ACCESS_TOKEN;
    
        const modelName = 'meta-llama/Meta-Llama-3-8B';
        const prompt = 'Please provide 3-4 grammar suggestions and corrections for the following text in json format with the following headers type, description of error, incorrect text, corrected text';
        const input = `PROMPT: ${prompt}\nCONTENT: ${content}\nSUGGESTIONS:`;
        console.log(content);
    
        const output = await textGeneration({
            accessToken: accessToken,
            model: modelName,
            inputs: input
        });

        console.log(output.generated_text);
    
        const regex = /SUGGESTIONS: (.+)/s;
        const matches = output.generated_text.match(regex);
        const suggestions = matches ? matches[1] : null;
        
        console.log(suggestions);
    
    };


    return (
        <div className='flex-grow ml-5 p-4' style={{ flexBasis: '30%' }}>
            {showOptions && (
                <>
                    <p style={{ fontSize: '28px', fontFamily: 'Newsreader', textAlign: 'center' }}>I need help with:</p>
                    <div className="button-container">
                        <OptionButton text="Grammar/Spell Check" />
                        <OptionButton text="Generate New Source(s)" />
                        <OptionButton text="Create Headline" />
                        <OptionButton text="AP Style Check" />
                        <SubmitButton text="Submit" onClick={handleSubmit} />
                    </div>
                </>
            )}
            {!showOptions && (
                <>
                    {showButtonContainer && (
                        <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: '5px' }}>
                            {/* This is the background button container */}
                            <SuggestionBox header='content' content='Example Suggestion' onApply={() => setShowSaveContainer(true)} onShowAskAI={() => setShowButtonContainer(false)} />
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Aside;