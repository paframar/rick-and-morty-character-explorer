import { useEffect, useState } from "react";
import * as rickAndMortyApi from "../services/api";
import CharacterList from "../components/CharacterList";
import type { Character } from "../types";

const CharactersListPage = () => {
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
  return (
    <div>
      {" "}
      <CharacterList characters={characters} />
    </div>
  );
};

export default CharactersListPage;
