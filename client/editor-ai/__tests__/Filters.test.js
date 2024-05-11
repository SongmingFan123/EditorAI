import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Filters from "app/pages/texteditor/Filters";


describe("Filters", () => {
    const mockSetShowOptions = jest.fn();
    const mockSetShowAskAI = jest.fn();
    const mockSetShowSuggestions = jest.fn();
    const mockOnSubmit = jest.fn();
  
    beforeEach(() => {
      render(
        <Filters
          documentContent=""
          setShowOptions={mockSetShowOptions}
          setShowAskAI={mockSetShowAskAI}
          setShowSuggestions={mockSetShowSuggestions}
          onSubmit={mockOnSubmit}
        />
      );
    });
  
    it("renders correctly and handles submit", () => {
      expect(screen.getByText("I need help with:")).toBeInTheDocument();
      expect(screen.getByText("Submit")).toBeInTheDocument();
      fireEvent.click(screen.getByText("Submit"));
      expect(mockOnSubmit).toHaveBeenCalled();
    });

  });
  