import React from "react";
import { NavStyled } from "../styles";

const Nav = () => {
  return (
    <NavStyled>
      <h1 class="underline">Home</h1>
      <h1 class="underline">Luxuries</h1>
      <h1 class="underline">FloorPlan</h1>
      <h1 class="underline">Local Area</h1>
      <h1 class="underline">Contact</h1>
    </NavStyled>
  );
};

export default Nav;
