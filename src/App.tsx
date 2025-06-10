import { useEffect, useState } from "react";
import "./App.css";

import * as rickAndMortyApi from "./services/api";
import AppLayout from "./components/AppLayout";
import CharacterList from "./components/CharacterList";
import type { Character } from "./types";

function App() {
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
    <>
      <AppLayout>
        <CharacterList characters={characters} />
      </AppLayout>
    </>
  );
}

export default App;
