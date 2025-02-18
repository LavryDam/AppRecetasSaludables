import axios from "axios";

const API_BASE_URL =
  "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";
const API_KEY = "1";

const api = axios.create({
  baseURL: API_BASE_URL,
  params: {
    apiKey: API_KEY,
  },
});

export const fetchRecipes = async (query: any) => {
  try {
    const response = await api.get("/complexSearch", { params: { query } });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
};
