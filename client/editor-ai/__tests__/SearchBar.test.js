import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "app/pages/homepage/SearchBar";

describe("SearchBar", () => {
  it("updates search query correctly", () => {
    // Mock setSearchQuery function
    const setSearchQueryMock = jest.fn();

    // Render SearchBar component with mocked setSearchQuery
    render(
      <SearchBar searchQuery="" setSearchQuery={setSearchQueryMock} />
    );

    // Find input field
    const input = screen.getByPlaceholderText("Search Documents and Files...");

    // Type into the input field
    fireEvent.change(input, { target: { value: "Test query" } });

    // Ensure that setSearchQuery is called with the correct value
    expect(setSearchQueryMock).toHaveBeenCalledWith("Test query");
  });

  // You can add more test cases as needed
});
