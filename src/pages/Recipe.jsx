import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { atom, useAtom } from "jotai";
import _ from "lodash";
//api
import * as api from "../api/api";

//style
import { Wrapper, Button, Info } from "./Recipe.styles";

const recipeAtom = atom();
const activeTab = atom("instructions");

const Recipe = () => {
  let { id } = useParams();
  const [recipe, setRecipe] = useAtom(recipeAtom);
  const [active, setActive] = useAtom(activeTab);

  const fetchDetails = async () => {
    const data = await api.getRecipe(id);
    console.log(data);
    setRecipe(data);
    return data;
  };
  useEffect(() => {
    console.log("fetching recipe");
    fetchDetails();
  }, [id]);
  return (
    recipe && (
      <Wrapper>
        <div>
          <h2>{recipe.title}</h2>
          <img src={recipe.image} alt={recipe.title} />
        </div>
        <Info>
          <Button
            className={active && "instructions" ? "active" : ""}
            onClick={() => setActive("instructions")}
          >
            instructions
          </Button>
          <Button
            className={active && "ingredients" ? "active" : ""}
            onClick={() => setActive("ingredients")}
          >
            ingredients
          </Button>
          {active === "instructions" && (
            <div>
              <h3 dangerouslySetInnerHTML={{ __html: recipe.summary }}></h3>
              <h3
                dangerouslySetInnerHTML={{ __html: recipe.instructions }}
              ></h3>
            </div>
          )}
          {active === "ingredients" && (
            <ul>
              {_.map(recipe.extendedIngredients, (ingredient, index) => (
                <li key={index}>
                  {ingredient.original} - {ingredient.amount} {ingredient.unit}
                </li>
              ))}
            </ul>
          )}
        </Info>
      </Wrapper>
    )
  );
};

export default Recipe;
