import React from "react";
import { useQuery } from "react-query";
import _ from "lodash";
import { Link } from "react-router-dom";
//slider
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
//
//apis to be used in the component
import * as api from "../api/api";
//styles to be used in the component
import { Wrapper, Card } from "./Popular.styles";
const Popular = () => {
  const { data, isLoading, error } = useQuery(["popular"], api.getRandomRecipe);

  isLoading && <div>Loading...</div>;
  error && <div>Error!</div>;

  return (
    <div>
      <Wrapper>
        <h3>Popular Picks</h3>
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "3rem",
          }}
        >
          {data &&
            _.map(data.recipes, (recipe, index) => {
              return (
                <SplideSlide key={index}>
                  <Card>
                    <Link to={`/recipe/${recipe.id}`}>
                      <p>{recipe.title}</p>
                      <img src={recipe.image} alt={recipe.title} />
                    </Link>
                  </Card>
                </SplideSlide>
              );
            })}
        </Splide>
      </Wrapper>
    </div>
  );
};

export default Popular;
