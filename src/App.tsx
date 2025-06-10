import { useEffect, useState } from "react";
import "./App.css";

import * as rickAndMortyApi from "./services/api";
import AppLayout from "./components/AppLayout";
import CharacterList from "./components/CharacterList";
import type { Character } from "./types";

function App() {
  const [characters, setCharacters] = useState<Character[] | null>(null);

  useEffect(() => {
    if (characters === null) {
      rickAndMortyApi.getAllCharacters().then((res) => {
        console.log("res", res.results);
        setCharacters(res.results);
      });
    }
  }, [characters]);

  return (
    <>
      <AppLayout>
        <CharacterList characters={characters as Character[]} />
      </AppLayout>
    </>
  );
}

export default App;
