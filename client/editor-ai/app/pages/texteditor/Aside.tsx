import React, { useState } from "react";
import SuggestionBox from "./SuggestionBox";
import Filters from "./Filters";
import Chatbot from "./Chatbot";
import SuggestionsContainer from "./SuggestionsContainer";
import { generateSuggestion } from "@/api/handle_ai";
interface AsideProps {
  documentContent: string;
  setDocumentContent: (content: string) => void;
}

const Aside = ({ documentContent, setDocumentContent }: AsideProps) => {
  const [showFilters, setShowFilters] = useState(true);
  const [showSuggestionContainer, setShowSuggestionContainer] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const [suggestions, setSuggestions] = useState<
    Array<{
      header: string;
      content: string;
      incorrectLine: string;
      correctLine: string;
    }>
  >([]);

  const handleSubmit = async () => {
    console.log("Generating new suggestions...");

    const newSuggestions = await generateSuggestion(documentContent);
    if (newSuggestions !== null) {
      setSuggestions(newSuggestions);
      console.log(newSuggestions);
    } else {
      setSuggestions([]); // Set suggestions to an empty array if newSuggestions is null
      console.log("No suggestions generated.");
    }
  };

  return (
    <div
      className="flex flex-col flex-colflex-grow ml-5 p-4"
      style={{ flexBasis: "30%" }}
    >
      {showFilters ? (
        <Filters
          documentContent={documentContent}
          setShowOptions={setShowFilters}
          setShowAskAI={setShowChatbot}
          setShowSuggestions={setShowSuggestionContainer}
          onSubmit={handleSubmit}
        />
      ) : (
        <button
          onClick={() => setShowFilters(true)}
          className="shadow-md mb-4 px-6 py-1 text-lg border-4 border-brand-red text-brand-red bg-white rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:bg-brand-red hover:text-white"
        >
          Show Filters{" "}
        </button>
      )}

      {showSuggestionContainer ? (
        <SuggestionsContainer
          setShowSuggestionContainer={setShowSuggestionContainer}
          suggestions={suggestions}
          documentContent={documentContent}
          setDocumentContent={setDocumentContent}
        />
      ) : (
        // <SuggestionsContainer documentContent={documentContent} setShowSuggestionContainer={setShowSuggestionContainer} setDocumentContent={setDocumentContent}/>
        <button
          onClick={() => setShowSuggestionContainer(true)}
          className="shadow-md mb-4 px-6 py-1 text-lg border-4 border-brand-red text-brand-red bg-white rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:bg-brand-red hover:text-white"
        >
          Show Suggestions
        </button>
      )}

      {/* chatbot */}
      {showChatbot ? (
        <Chatbot
          setShowAskAI={setShowChatbot}
          documentContent={documentContent}
        />
      ) : (
        <button
          onClick={() => setShowChatbot(true)}
          className="shadow-md mb-4 px-6 py-1 text-lg border-4 border-brand-red text-brand-red bg-white rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:bg-brand-red hover:text-white"
        >
          Show Chatbot
        </button>
      )}
    </div>
  );
};

export default Aside;
