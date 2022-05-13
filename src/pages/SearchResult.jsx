import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import _ from "lodash";
//api call
import * as api from "../api/api";
//style
import { Card, Grid } from "./SearchResult.styles";

const SearchResult = () => {
  let { query } = useParams();
  const { data, isLoading, isError } = useQuery(
    ["querySearch", query],
    api.getSearchResult(query)
  );
  isLoading && <p>Loading...</p>;
  isError && <p>Error...</p>;
  return (
    <>
      <Grid>
        {data &&
          _.map(data, (item, index) => (
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

export default SearchResult;
