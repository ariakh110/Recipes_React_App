import axios from "axios";
const key = process.env.REACT_APP_API_KEY;
const server = axios.create({
  baseURL: "https://api.spoonacular.com/recipes/",
});

const getRandomRecipe = async () => {
  const { data } = await server.get("random", {
    params: { apiKey: key, number: 20 },
  });
  return data;
};
const getVeggie = async () => {
  const { data } = await server.get("random", {
    params: { apiKey: key, number: 20, tags: "vegetarian" },
  });
  return data;
};
const getCuisine = async (name) => {
  const { data } = await server.get("complexSearch", {
    params: { apiKey: key, cuisine: `${name}` },
  });
  return data;
};
const getSearchResult = async (name) => {
  const { data } = await server.get("complexSearch", {
    params: { apiKey: key, number: 20, query: `${name}` },
  });
  return data;
};
const getRecipe = async (id) => {
  const { data } = await server.get(`/${id}/information`, {
    params: { apiKey: key },
  });
  return data;
};
export { getRandomRecipe, getVeggie, getCuisine, getSearchResult, getRecipe };
