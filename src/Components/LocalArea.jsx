import React from "react";
import NightLifeImage from "../Assets/citycentre.jpg";
import RaceCourse from "../Assets/racecourse.jpg";
import { LocalAreaStyled } from "../styles";

const LocalArea = () => {
  return (
    <LocalAreaStyled>
      <h1>Local Area</h1>
      <p>
        Within walking distance of the racecourse and in the centre of the city
        centre nightlife, The Assembly really is the perfect place to assemble!{" "}
      </p>
      <div className="img-container">
        <img src={NightLifeImage} />
        <img src={RaceCourse} />
      </div>
    </LocalAreaStyled>
  );
};

export default LocalArea;
