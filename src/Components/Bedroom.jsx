import React from "react";
import BedroomPhoto from "../Assets/Assembly_Photo_1.JPG";
import { BedroomStyled } from "../styles";

const Bedroom = () => {
  return (
    <div>
      <BedroomStyled src={BedroomPhoto} />
      <h1>Bedrooms</h1>
      <p>
        The Assembly is your perfect get together combination. A four-bedroom
        property capable of sleeping up to 20 in comfort.
      </p>
    </div>
  );
};

export default Bedroom;
