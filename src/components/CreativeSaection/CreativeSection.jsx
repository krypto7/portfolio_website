import React from "react";
import GradientCircle from "../GradientCirlcle/GradientCircle";
import "./creativeSection.css";
import { SiGoogleearth } from "react-icons/si";
import Chips from "../commonComponets/chips/Chips";
import Marquee from "../Marquee/Marquee";

function CreativeSection() {
  return (
    <div>
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

        <Chips />
      </div>
      <Marquee />
    </div>
  );
}

export default CreativeSection;
