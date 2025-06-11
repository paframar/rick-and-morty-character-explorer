import { createContext, useContext, useState, ReactNode } from "react";

interface CharactersContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const CharactersContext = createContext<CharactersContextType | undefined>(
  undefined
);

export const useCharacters = () => {
  const context = useContext(CharactersContext);
  if (!context) {
    throw new Error("useCharacters must be used within a CharactersProvider");
  }
  return context;
};

interface CharactersProviderProps {
  children: ReactNode;
}

export const CharactersProvider = ({ children }: CharactersProviderProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <CharactersContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </CharactersContext.Provider>
  );
};
