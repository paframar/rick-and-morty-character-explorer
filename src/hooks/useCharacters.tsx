import { useEffect, useState, createContext, useContext } from "react";
import * as rickAndMortyApi from "../services/api";
import type { Character } from "../types";

interface CharactersProviderProps {
  children: React.ReactNode;
}

const CharactersContext = createContext<Character[] | null>(null);
export const CharactersProvider = ({ children }: CharactersProviderProps) => {
  const [characters, setCharacters] = useState<Character[] | null>(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      const { results: characters } = await rickAndMortyApi.getAllCharacters();
      setCharacters(characters);
    };

    if (characters === null) {
      fetchCharacters();
    }
  }, [characters]);

  if (characters) {
    return (
      <CharactersContext.Provider value={characters}>
        {children}
      </CharactersContext.Provider>
    );
  }
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCharacters = () => {
  const characters = useContext(CharactersContext);
  return { characters };
};

// eslint-disable-next-line react-refresh/only-export-components
export default useCharacters;
