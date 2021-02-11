import React from "react";
import { NavStyled } from "../styles";

const Nav = () => {
  return (
    <NavStyled>
      <a href="#Home" class="underline">
        Home
      </a>
      <a href="#Luxurys" class="underline">
        Luxuries
      </a>
      <a class="underline">FloorPlan</a>
      <a class="underline">Local Area</a>
      <a class="underline">Contact</a>
    </NavStyled>
  );
};

export default Nav;
