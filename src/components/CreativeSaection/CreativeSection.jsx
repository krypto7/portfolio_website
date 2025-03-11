import React from "react";
import GradientCircle from "../GradientCirlcle/GradientCircle";
import "./style.css";
import { SiGoogleearth } from "react-icons/si";

function CreativeSection() {
  return (
    <div className="creatice_section desktop">
      <div className="night">
        <h1>
          Experienced <br /> Web-Developer
        </h1>
      </div>
      <GradientCircle className={"gradient_circle2 desktop"} />

      <div className="circle">
        {/* <div className="sub_circle"> */}
        <SiGoogleearth className="sub_circle" />
        {/* </div> */}
      </div>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </div>
  );
}

export default CreativeSection;
