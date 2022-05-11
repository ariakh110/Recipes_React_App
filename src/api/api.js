import axios from "axios";
const key = process.env.REACT_APP_API_KEY;
const server = axios.create({
  baseURL: `https://api.spoonacular.com/recipes/random?apiKey=${key}&number=20`,
});

const getRandomRecipe = async () => {
  const { data } = await server.get();
  return data;
};

export { getRandomRecipe };
