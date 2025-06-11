import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CharacterCard from "../components/CharacterCard";
import type { Character } from "../types";

const mockCharacter: Character = {
  id: 1,
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Male",
  origin: {
    name: "Earth (C-137)",
    url: "https://rickandmortyapi.com/api/location/1",
  },
  location: {
    name: "Citadel of Ricks",
    url: "https://rickandmortyapi.com/api/location/3",
  },
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  episode: [
    "https://rickandmortyapi.com/api/episode/1",
    "https://rickandmortyapi.com/api/episode/2",
  ],
  url: "https://rickandmortyapi.com/api/character/1",
  created: "2017-11-04T18:48:46.250Z",
};

describe("CharacterCard", () => {
  it("should render character information correctly", () => {
    render(<CharacterCard character={mockCharacter} />);

    // Check if the character name is rendered in the card title
    expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();

    // Check if all character details are rendered
    expect(screen.getByText("Status: Alive")).toBeInTheDocument();
    expect(screen.getByText("Species: Human")).toBeInTheDocument();
    expect(screen.getByText("Gender: Male")).toBeInTheDocument();
    expect(screen.getByText("Location: Citadel of Ricks")).toBeInTheDocument();

    // Check if the character image is rendered with correct alt text
    const characterImage = screen.getByAltText("Rick Sanchez");
    expect(characterImage).toBeInTheDocument();
    expect(characterImage).toHaveAttribute("src", mockCharacter.image);
  });
});
