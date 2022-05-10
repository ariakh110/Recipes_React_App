import axios from "axios";

const server = axios.create({
  baseURL: "GET https://api.spoonacular.com/recipes/random",
});
