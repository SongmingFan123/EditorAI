import React, { useState } from 'react';
import { generateAnswer } from '../../api/handle_ai';

interface ChatbotProps {
    setShowAskAI: (setShowAskAI: boolean) => void;
    documentContent: string;
};

const Chatbot = ({setShowAskAI,documentContent}:ChatbotProps) => {
  const [messages, setMessages] = useState([
    { id: 1, author:"editorai",text: "Hi there! I'm EditorAI. How can I assist you today?" },
  ]);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = async () => {
    if (inputText.trim() === '') return;
    const newMessage = { id: messages.length + 1, author:'user',text: inputText };
    setMessages([...messages, newMessage]);
    setInputText('');
  
    // Generate answer using the LLM
    const context = 'This is the document the user is asking about for context: ' + documentContent;
    const answer = await generateAnswer(inputText, context);
    
    // Add the generated answer to the messages
    const answerMessage = { id: messages.length + 2, author:'editorai',text: answer };
    setMessages([...messages, newMessage, answerMessage]);
  };

  const handleResetConversation = () => {
    setMessages([
      { id: 1, author:"editorai",text: "Hi there! I'm EditorAI. How can I assist you today?" },
    ]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="h-96 flex flex-col bg-gray-100 rounded p-4">
      <div className="flex flex-row justify-between">
        <h1 className='font-newsreader text-2xl'>Ask EditorAI</h1>
        <button className="mb-4 font-bold" onClick={() => setShowAskAI(false)} >X</button>
      </div>
      {messages.length>10 && <button onClick={handleResetConversation} > Reset</button>}
      <div className="flex-1 overflow-y-auto">
        {messages.map((message) => (
          message.author === 'editorai' 
          ?
            <div key={message.id} className="p-2 mb-2 bg-white rounded shadow">
              {message.text}
            </div>
          :
            <div key={message.id} className="p-2 mb-2 bg-brand-red text-white rounded shadow">
              {message.text}
            </div>
        ))}
      </div>
      
      <div className="flex items-center mt-4">
        <input
          type="text"
          placeholder="Type your message..."
          value={inputText}
          onChange={handleInputChange}
          className="flex-1 rounded-l p-2"
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleSendMessage}
          className="px-4 py-2 bg-brand-red text-white rounded-r"
        >
          Send
        </button>
        
      </div>
    </div>
  );
};

export default Chatbot;
