import { List } from "antd";
import CharacterCard from "./CharacterCard";
import type { Character } from "../types";

interface CharacterListProps {
  characters: Character[] | null;
}

const CharacterList = ({ characters }: CharacterListProps) => {
  if (characters === null)
    return (
      <>
        <h3>No characters to show</h3>
      </>
    );

  return (
    <>
      <List>
        {characters.map((char) => (
          <CharacterCard character={char} />
        ))}
      </List>
    </>
  );
};

export default CharacterList;
