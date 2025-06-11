import { useCharacters as useCharactersContext } from "../context/CharactersContext";

const useCharacters = () => {
  const { searchTerm, setSearchTerm } = useCharactersContext();
  return { searchTerm, setSearchTerm };
};

export default useCharacters;
