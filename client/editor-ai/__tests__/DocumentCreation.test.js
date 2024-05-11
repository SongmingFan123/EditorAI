import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import DocumentCreation from "app/pages/homepage/DocumentCreation"; 
import { useRouter } from "next/navigation"; 
import { useAuth } from "app/context/AuthContext";


jest.mock('next/navigation', () => ({
  useRouter: jest.fn()
}));

jest.mock('app/context/AuthContext', () => ({
  useAuth: jest.fn()
}));

describe("DocumentCreation", () => {
  const mockPush = jest.fn();
  const mockSetDocumentName = jest.fn();
  const mockHandleCreateDocument = jest.fn();
  const mockSetShowPopup = jest.fn();

  beforeEach(() => {
    useRouter.mockImplementation(() => ({
      push: mockPush
    }));
    useAuth.mockImplementation(() => ({
      user: { uid: 'testUserId' }
    }));

    render(
      <DocumentCreation
        setDocumentName={mockSetDocumentName}
        handleCreateDocument={mockHandleCreateDocument}
        setShowPopup={mockSetShowPopup}
        documentName=""
      />
    );
  });
  
  it("renders correctly", () => {
    expect(screen.getByPlaceholderText("Enter document name")).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();
    expect(screen.getByText("Cancel")).toBeInTheDocument();
  });



  
  it("handles document creation failure", async () => {
    fireEvent.change(screen.getByPlaceholderText("Enter document name"), { target: { value: 'Existing Document' } });
    mockHandleCreateDocument.mockResolvedValue(null); 
    fireEvent.click(screen.getByText("Submit"));

    await waitFor(() => {
      expect(screen.getByText("That document name already exists")).toBeInTheDocument();
    });
  });

  it("closes the popup on cancel", () => {
    fireEvent.click(screen.getByText("Cancel"));
    expect(mockSetShowPopup).toHaveBeenCalledWith(false);
  });
});
