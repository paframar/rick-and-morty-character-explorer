const BASE_URL = "https://rickandmortyapi.com/api";

const getAllCharacters = async () => {
  const response = await fetch(`${BASE_URL}/character`);
  return response.json();
};

const getCharacterById = async (id: string) => {
  const response = await fetch(`${BASE_URL}/character/${id}`);
  return response.json();
};

const getCharacterByName = async (name: string) => {
  const response = await fetch(`${BASE_URL}/character/?name=${name}`);
  return response.json();
};

const getCharactersByStatus = async (status: string) => {
  const response = await fetch(`${BASE_URL}/character/?status=${status}`);
  return response.json();
};

export {
  getAllCharacters,
  getCharacterById,
  getCharacterByName,
  getCharactersByStatus,
};
