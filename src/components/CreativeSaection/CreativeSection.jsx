import React from "react";
import GradientCircle from "../GradientCirlcle/GradientCircle";
import "./style.css";

function CreativeSection() {
  return (
    <div className="creatice_section">
      <div className="night">
        <h1>
          Experienced <br /> Web-Developer
        </h1>
      </div>
      <GradientCircle className={"gradient_circle2"} />
    </div>
  );
}

export default CreativeSection;
