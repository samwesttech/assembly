import React from "react";
import { NavStyled } from "../styles";

const Nav = () => {
  return (
    <NavStyled>
      <a href="#Home" class="underline" style={{ scrollBehavior: "smooth" }}>
        Home
      </a>
      <a
        href="#Luxuries"
        class="underline"
        style={{ scrollBehavior: "smooth" }}
      >
        Luxuries
      </a>
      <a
        href="#FloorPlan"
        class="underline"
        style={{ scrollBehavior: "smooth" }}
      >
        FloorPlan
      </a>
      <a
        href="#LocalArea"
        class="underline"
        style={{ scrollBehavior: "smooth" }}
      >
        Local Area
      </a>
      <a href="#Contact" class="underline" style={{ scrollBehavior: "smooth" }}>
        Contact
      </a>
    </NavStyled>
  );
};

export default Nav;
