import React from "react";
import { BedroomStyled } from "../styles";
import ImageCarousel from "./ImageCarousel";

const Bedroom = () => {
  return (
    <div className="bedroom">
      <div className="bedroom-text">
        <h3>
          Imagine a get together with friends or family in your own dedicated
          Bistro right in the City Centre!{" "}
        </h3>
        <h3>
          The Assembly is your perfect get together combination. A four-bedroom
          property capable of sleeping up to 20 in comfort.
        </h3>
      </div>
      <div className="bedroom-carousel">
        <ImageCarousel />
      </div>
    </div>
  );
};

export default Bedroom;
