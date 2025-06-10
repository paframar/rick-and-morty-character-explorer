import type { Character } from "../types";
import { Card } from "antd";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <>
      <Card size="small" title={character.name}>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <img
            src={character.image}
            style={{ height: "50%", width: "50%" }}
            alt={character.name}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
            <p>Location: {character.location.name}</p>
          </div>
        </div>
      </Card>
    </>
  );
};

export default CharacterCard;
