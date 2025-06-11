import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchByName from "../components/SearchByName";
import { CharactersProvider } from "../context/CharactersContext";
import { describe, it, expect, vi, beforeEach } from "vitest";

const mockSetSearchTerm = vi.fn();

// Mock the useCharacters hook
vi.mock("../hooks/useCharacters", () => ({
  default: () => ({
    setSearchTerm: mockSetSearchTerm,
  }),
}));

describe("SearchByName", () => {
  beforeEach(() => {
    // Reset all mocks before each test
    vi.clearAllMocks();
  });

  it("should call setSearchTerm when user inputs some data", () => {
    render(
      <CharactersProvider>
        <SearchByName />
      </CharactersProvider>
    );

    const searchInput = screen.getByPlaceholderText("Search by name");
    fireEvent.change(searchInput, { target: { value: "Rick" } });

    expect(mockSetSearchTerm).toHaveBeenCalledWith("Rick");
  });

  it("should call setSearchTerm when user presses enter or clicks into the search button", () => {
    render(
      <CharactersProvider>
        <SearchByName />
      </CharactersProvider>
    );

    const searchInput = screen.getByPlaceholderText("Search by name");
    const searchButton = screen.getByRole("button");

    // Test pressing enter
    fireEvent.change(searchInput, { target: { value: "Morty" } });
    fireEvent.keyDown(searchInput, { key: "Enter" });
    expect(mockSetSearchTerm).toHaveBeenCalledWith("Morty");

    // Test clicking search button
    fireEvent.change(searchInput, { target: { value: "Summer" } });
    fireEvent.click(searchButton);
    expect(mockSetSearchTerm).toHaveBeenCalledWith("Summer");
  });
});
