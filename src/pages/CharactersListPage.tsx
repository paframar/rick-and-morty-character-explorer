import CharacterList from "../components/CharacterList";
import useCharacters from "../hooks/useCharacters";

const CharactersListPage = () => {
  const { filteredCharacters } = useCharacters();
  return (
    <div>
      <CharacterList characters={filteredCharacters} />
    </div>
  );
};

export default CharactersListPage;
