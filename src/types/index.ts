export interface Character {
  id: number;
  name: string;
  location: {
    name: string;
    url: string;
  };
  gender: string;
  status: string;
  species: string;
  type: string;
  created: string;
  episode: string[];
  image: string;
  origin: {
    name: string;
    url: string;
  };
  url: string;
}
