import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Chatbot from "app/pages/texteditor/Chatbot"; // Adjust the path as necessary
import { generateAnswer } from "app/api/handle_ai"; // Ensure the path matches
import '@testing-library/jest-dom';

jest.mock("app/api/handle_ai", () => ({
  generateAnswer: jest.fn()
}));

describe("Chatbot Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();  // Clear mocks before each test
  });

  it("renders initial message and handles user interaction", async () => {
    const setShowAskAI = jest.fn();
    render(<Chatbot setShowAskAI={setShowAskAI} documentContent="Sample document content" />);

    expect(screen.getByText("Hi there! I'm EditorAI. How can I assist you today?")).toBeInTheDocument();
   
    const inputField = screen.getByPlaceholderText("Type your message...");
    
    // Ensure generateAnswer is mocked to resolve immediately
    generateAnswer.mockResolvedValue("I'm doing well, thank you!");

    // Simulate user typing a question and sending it
    await userEvent.type(inputField, "Hello, how are you?");
    fireEvent.keyDown(inputField, { key: "Enter", code: "Enter" });

    // Wait for the response to be displayed
    await screen.findByText("I'm doing well, thank you!"); // Using findByText which implicitly waits for the element

    // Interaction with the close button
    const closeButton = screen.getByText("X");
    await userEvent.click(closeButton); // Using await with userEvent.click to handle potential asynchronous updates
    expect(setShowAskAI).toHaveBeenCalledWith(false);
  });
});
