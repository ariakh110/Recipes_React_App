import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";

//

//style
import { List } from "./Category.styles";

const Category = () => {
  return (
    <List>
      <NavLink to={"cuisine/italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </NavLink>

      <NavLink to={"cuisine/american"}>
        <FaHamburger />
        <h4>American</h4>
      </NavLink>

      <NavLink to={"cuisine/thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </NavLink>

      <NavLink to={"cuisine/japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </NavLink>
    </List>
  );
};

export default Category;
