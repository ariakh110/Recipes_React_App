import axios from "axios";

const key = process.env.REACT_APP_API_KEY;
const server = axios.create({
  baseURL: `https://api.spoonacular.com/recipes/random?apiKey=${key}`,
});

const getRandomRecipe = async () => {
  const data = await await fetch(
    `httpa://api.spoonacular.com/recipes/random?apiKey=${key}`
  ).json;
  console.log(data);

  //const { data } = await server.get();
  return data;
};

export { getRandomRecipe };
