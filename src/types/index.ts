interface NameUrl {
  name: string;
  url: string;
}

export interface Character {
  id: number;
  name: string;
  location: NameUrl;
  gender: string;
  status: string;
  species: string;
  type: string;
  created: string;
  episode: string[];
  image: string;
  origin: NameUrl;
  url: string;
}
