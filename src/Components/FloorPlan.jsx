import React from "react";
import FloorPlanImage from "../Assets/Assembly_Floorplan.JPG";
import { FloorPlanStyled } from "../styles";

const FloorPlan = () => {
  return (
    <div>
      <h1 style={{ marginBottom: "0" }}>Floor Plan</h1>
      <FloorPlanStyled>
        <img src={FloorPlanImage} alt="Floor plan of accomodation" />
        <div className="text">
          <h1>Floor Plan of the Assembly</h1>
          <p>
            On the ground floor is a bathroom and very large social space, the
            first floor contains three bedrooms and triple shower room, the
            second floor is a kitchen and secondary living room.
          </p>
          <br></br>
          <p>
            All beds are set out as singles as standard but with notice the
            layout can be changed and some beds combined into doubles.
          </p>
        </div>
      </FloorPlanStyled>
    </div>
  );
};

export default FloorPlan;
