import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Chatbot from "app/pages/texteditor/Chatbot"; 
import { generateAnswer } from "app/api/handle_ai"; 
import '@testing-library/jest-dom';

jest.mock("app/api/handle_ai", () => ({
  generateAnswer: jest.fn()
}));

describe("Chatbot Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();  
  });

  it("renders initial message and handles user interaction", async () => {
    const setShowAskAI = jest.fn();
    render(<Chatbot setShowAskAI={setShowAskAI} documentContent="Sample document content" />);

    expect(screen.getByText("Hi there! I'm EditorAI. How can I assist you today?")).toBeInTheDocument();
   
    const inputField = screen.getByPlaceholderText("Type your message...");
    

    generateAnswer.mockResolvedValue("I'm doing well, thank you!");


    await userEvent.type(inputField, "Hello, how are you?");
    fireEvent.keyDown(inputField, { key: "Enter", code: "Enter" });


    await screen.findByText("I'm doing well, thank you!"); 


    const closeButton = screen.getByText("X");
    await userEvent.click(closeButton); 
    expect(setShowAskAI).toHaveBeenCalledWith(false);
  });
});
