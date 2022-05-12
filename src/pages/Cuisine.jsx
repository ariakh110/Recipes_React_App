import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import _ from "lodash";

//api call
import * as api from "../api/api";
//style
import { Card, Grid } from "./Cuisine.styles";

const Cuisine = () => {
  const { type } = useParams();
  const { data, isLoading, isError } = useQuery(
    ["cuisine", type],
    api.getCuisine(type)
  );

  console.log(data);
  isLoading && <p>Loading...</p>;
  isError && <p>Error...</p>;

  return (
    <>
      <Grid>
        {data &&
          _.map(data.results, (item, index) => (
            <Card key={item.id}>
              <Link to={`/recipe/${item.id}`}>
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
              </Link>
            </Card>
          ))}
      </Grid>
    </>
  );
};

export default Cuisine;
