import React from "react";
import NightLifeImage from "../Assets/Assembly_Photo_5.png";

const LocalArea = () => {
  return (
    <div>
      <h1>Local Area</h1>
      <p>
        Within walking distance of the racecourse and in the centre of the city
        centre nightlife, The Assembly really is the perfect place to assemble!{" "}
      </p>
      <img src={NightLifeImage} style={{ width: "100%", height: "auto" }} />
    </div>
  );
};

export default LocalArea;
