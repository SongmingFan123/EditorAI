import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom";

import Aside from 'app/pages/texteditor/Aside';

describe('Aside component', () => {
 

  test('renders show suggestions button by default', () => {
    const { getByText } = render(<Aside documentContent="" setDocumentContent={() => {}} />);
    const showSuggestionsButton = getByText(/show suggestions/i); // Use regular expression for case-insensitive match
    expect(showSuggestionsButton).toBeInTheDocument();
  });

  test('renders show chatbot button by default', () => {
    const { getByText } = render(<Aside documentContent="" setDocumentContent={() => {}} />);
    const showChatbotButton = getByText(/show chatbot/i); // Use regular expression for case-insensitive match
    expect(showChatbotButton).toBeInTheDocument();
  });


  test('clicking show suggestions button toggles suggestions visibility', () => {
    const { getByText, queryByText } = render(<Aside documentContent="" setDocumentContent={() => {}} />);
    const showSuggestionsButton = getByText(/show suggestions/i); // Use regular expression for case-insensitive match
    fireEvent.click(showSuggestionsButton);
    expect(queryByText(/show suggestions/i)).toBeNull(); // Suggestions should disappear
  });

  test('clicking show chatbot button toggles chatbot visibility', () => {
    const { getByText, queryByText } = render(<Aside documentContent="" setDocumentContent={() => {}} />);
    const showChatbotButton = getByText(/show chatbot/i); // Use regular expression for case-insensitive match
    fireEvent.click(showChatbotButton);
    expect(queryByText(/show chatbot/i)).toBeNull(); // Chatbot should disappear
  });
});
