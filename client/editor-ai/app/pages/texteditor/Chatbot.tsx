import React, { useState } from "react";
import { generateAnswer } from "../../api/handle_ai";

interface ChatbotProps {
  setShowAskAI: (setShowAskAI: boolean) => void;
  documentContent: string;
}

interface Message {
  id: number;
  author: string;
  text: string;
}

const Chatbot = ({ setShowAskAI, documentContent }: ChatbotProps) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      author: "editorai",
      text: "Hi there! I'm EditorAI. How can I assist you today?",
    },
  ]);
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = async () => {
    if (inputText.trim() === "") return;
    const newMessage = {
      id: messages.length + 1,
      author: "user",
      text: inputText,
    };
    setMessages([...messages, newMessage]);
    setInputText("");

    // Generate answer using the LLM
    const context =
      "This is the document the user is asking about for context: " +
      documentContent;
    const answer = await generateAnswer(inputText, context);
    const answerText = answer || "Sorry, I couldn't generate a reesponse";

    // Add the generated answer to the messages
    const answerMessage: Message = {
      id: messages.length + 2,
      author: "editorai",
      text: answerText,
    };
    setMessages([...messages, newMessage, answerMessage]);
  };

  const handleResetConversation = () => {
    setMessages([
      {
        id: 1,
        author: "editorai",
        text: "Hi there! I'm EditorAI. How can I assist you today?",
      },
    ]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="h-96 flex flex-col bg-white rounded-xl p-4 shadow-md">
      <div className="flex flex-row justify-between p-2">
        <h1 className="font-newsreader text-2xl">Ask EditorAI</h1>
        <button className="mb-4s" onClick={() => setShowAskAI(false)}>
          X
        </button>
      </div>
      {messages.length > 10 && (
        <button onClick={handleResetConversation}> Reset</button>
      )}
      <div className="flex-1 overflow-y-auto">
        {messages.map((message) =>
          message.author === "editorai" ? (
            <div
              key={message.id}
              className="p-2 mb-2 bg-brand-red rounded-xl shadow text-white poppins-thin"
            >
              {message.text}
            </div>
          ) : (
            <div
              key={message.id}
              className="p-2 mb-2 bg-brand-tan text-brand-red rounded-xl shadow text-brand-red poppins-thin"
            >
              {message.text}
            </div>
          ),
        )}
      </div>

      <div className="h-10 flex border-brand-red border-2 rounded-xl items-center mt-4 shadow-md rounded-lg poppins-thin">
        <input
          type="text"
          placeholder="Type your message..."
          value={inputText}
          onChange={handleInputChange}
          className="flex-1 p-2 rounded-xl h-8"
          style={{ outline: "none", border: "none" }}
          onKeyDown={handleKeyDown}
        />
        <button
          style={{ marginRight: "5px" }}
          onClick={handleSendMessage}
          type="button"
          className="w-8 h-8 bg-brand-red text-white rounded-xl shadow-md flex items-center justify-center overflow-hidden p-1"
        >
          <img src="/chatupload.png" alt="Chat Upload Button" />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
