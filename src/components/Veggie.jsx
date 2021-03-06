import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useQuery } from "react-query";
import _ from "lodash";
import { Link } from "react-router-dom";
//api to be used in the component
import * as api from "../api/api";
//styles to be used in the component
import { Wrapper, Card } from "./Veggie.styles";

const Veggie = () => {
  const { data, isLoading, error } = useQuery(["veggie"], api.getVeggie);
  isLoading && <div>Loading...</div>;
  error && <div>Error!</div>;
  return (
    <div>
      <Wrapper>
        <h3>Our Vegetarian Picks</h3>
        <Splide
          options={{
            perPage: 3,
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

export default Veggie;
