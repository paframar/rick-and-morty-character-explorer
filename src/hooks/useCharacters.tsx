import { useEffect, useState, createContext, useContext } from "react";
import * as rickAndMortyApi from "../services/api";
import type { Character, CharacterStatus } from "../types";

interface CharactersProviderProps {
  children: React.ReactNode;
}

interface CharacterContextValue {
  allCharacters: Character[] | null;
  filteredCharacters: Character[] | null;
  statusFilter: CharacterStatus[];
  setStatusFilter: React.Dispatch<React.SetStateAction<CharacterStatus[]>>;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const CharactersContext = createContext<CharacterContextValue>({
  allCharacters: null,
  filteredCharacters: null,
  statusFilter: ["Alive", "Dead", "unknown"],
  setStatusFilter: () => {},
  setSearchTerm: () => {},
});

export const CharactersProvider = ({ children }: CharactersProviderProps) => {
  const [allCharacters, setAllCharacters] = useState<Character[] | null>(null);
  const [filteredCharacters, setFilteredCharacters] = useState<
    Character[] | null
  >(null);
  const [statusFilter, setStatusFilter] = useState<CharacterStatus[]>([
    "Alive",
    "Dead",
    "unknown",
  ]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filterCharacters = () => {
    if (!filterCharacters) return;
    const filteredCharacters: Character[] = allCharacters
      ?.filter((char) => statusFilter.includes(char.status))
      .filter(
        (char) =>
          searchTerm === "" ||
          char.name.toLowerCase().includes(searchTerm.toLowerCase())
      ) as Character[];

    setFilteredCharacters(filteredCharacters);
  };

  useEffect(() => filterCharacters(), [statusFilter]);
  useEffect(() => filterCharacters(), [searchTerm]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const { results: characters } = await rickAndMortyApi.getAllCharacters();
      setAllCharacters(characters);
      setFilteredCharacters(characters);
    };

    if (allCharacters === null) {
      fetchCharacters();
    }
  }, [allCharacters]);

  if (filteredCharacters) {
    return (
      <CharactersContext.Provider
        value={{
          allCharacters,
          filteredCharacters,
          statusFilter,
          setStatusFilter,
          setSearchTerm,
        }}
      >
        {children}
      </CharactersContext.Provider>
    );
  }
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCharacters = () => {
  const {
    allCharacters,
    filteredCharacters,
    statusFilter,
    setStatusFilter,
    setSearchTerm,
  } = useContext<CharacterContextValue>(CharactersContext);
  return {
    allCharacters,
    filteredCharacters,
    statusFilter,
    setStatusFilter,
    setSearchTerm,
  };
};

// eslint-disable-next-line react-refresh/only-export-components
export default useCharacters;
