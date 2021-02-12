import React from "react";
import { BedroomStyled } from "../styles";
import ImageCarousel from "./ImageCarousel";

const Bedroom = () => {
  return (
    <div className="bedroom" id="Bedroom">
      <div className="bedroom-text">
        <p>
          <i>
            <strong>Imagine</strong> a get together with friends or family in
            your own dedicated Bistro right in the City Centre!{" "}
          </i>
        </p>
        <p>
          <i>
            The Assembly is your perfect get together combination. A
            four-bedroom property capable of sleeping up to 20 in comfort.
          </i>
        </p>
      </div>
      <div className="bedroom-carousel">
        <ImageCarousel />
      </div>
    </div>
  );
};

export default Bedroom;
