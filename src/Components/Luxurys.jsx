import React from "react";
import { LuxurysStyled } from "../styles";
import DiningImage from "../Assets/Assembly_Photo_2.png";
import HotTubImage from "../Assets/Assembly_Hot_Tub_Night.jpg";

const Luxurys = () => {
  return (
    <LuxurysStyled>
      <h1>Luxurys</h1>
      <div className="Luxarys">
        <div className="Luxary">
          <h2>Dining Area</h2>
          <p>
            Get the benefit of this large duplex apartment together with the
            ground floor comfortable space for dining, relaxing and getting
            together for the duration of your stay.{" "}
          </p>
          <img src={DiningImage} style={{ width: "auto", height: "25vw" }} />
        </div>
        <div className="Luxary">
          <h2>Hot Tub</h2>
          <p>
            Add the benefit of an outdoor hot-tub area, a fully stocked bar and
            optional private chef.
          </p>
          <img src={HotTubImage} style={{ width: "auto", height: "25vw" }} />
        </div>
      </div>
    </LuxurysStyled>
  );
};

export default Luxurys;
