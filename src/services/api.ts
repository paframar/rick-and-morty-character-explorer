import axios from "axios";
import type { Character } from "../types";

const BASE_URL = "https://rickandmortyapi.com/api";

export interface ApiResponse<T> {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: T[];
}

const getAllCharacters = async () => {
  const response = await fetch(`${BASE_URL}/character`);
  return response.json();
};

const getCharacterById = async (id: number): Promise<Character> => {
  try {
    const response = await axios.get(`${BASE_URL}/character/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Error fetching character: ${error.message}`);
    }
    throw new Error("An unexpected error occurred");
  }
};

const getCharacterByName = async (
  name: string
): Promise<ApiResponse<Character>> => {
  try {
    const response = await axios.get(`${BASE_URL}/character/?name=${name}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        return {
          info: { count: 0, pages: 0, next: null, prev: null },
          results: [],
        };
      }
      throw new Error(`Error fetching character: ${error.message}`);
    }
    throw new Error("An unexpected error occurred");
  }
};

const getCharactersByStatus = async (
  status: string
): Promise<ApiResponse<Character>> => {
  try {
    const response = await axios.get(`${BASE_URL}/character/?status=${status}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Error fetching characters: ${error.message}`);
    }
    throw new Error("An unexpected error occurred");
  }
};

const getCharactersByPage = async (
  page: number
): Promise<ApiResponse<Character>> => {
  try {
    const response = await axios.get(`${BASE_URL}/character/?page=${page}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Error fetching characters: ${error.message}`);
    }
    throw new Error("An unexpected error occurred");
  }
};

export {
  getAllCharacters,
  getCharacterById,
  getCharacterByName,
  getCharactersByStatus,
  getCharactersByPage,
};
