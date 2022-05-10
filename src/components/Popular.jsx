import React, { useEffect } from "react";
import * as api from "../api/api";

const Popular = () => {
  useEffect(() => {
    const data = api.getRandomRecipe();
  }, []);

  return <div>Popular</div>;
};

export default Popular;
