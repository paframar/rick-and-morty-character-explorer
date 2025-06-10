interface NameUrl {
  name: string;
  url: string;
}

export type CharacterStatus = "Alive" | "Dead" | "unknown";

export interface Character {
  id: number;
  name: string;
  location: NameUrl;
  gender: string;
  status: CharacterStatus;
  species: string;
  type: string;
  created: string;
  episode: string[];
  image: string;
  origin: NameUrl;
  url: string;
}
