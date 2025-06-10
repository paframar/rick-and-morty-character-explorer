import CharacterList from "../components/CharacterList";
import useCharacters from "../hooks/useCharacters";

const CharactersListPage = () => {
  const { characters } = useCharacters();
  return (
    <div>
      {" "}
      <CharacterList characters={characters} />
    </div>
  );
};

export default CharactersListPage;
