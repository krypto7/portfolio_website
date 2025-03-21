import React from "react";
import Marquee from "../../components/commonComponets/marquee/Marquee";
import GradientCircle from "../../components/GradientCirlcle/GradientCircle";
import "./Skills.css";
import { Accordion, Placeholder } from "rsuite";

function Skills() {
  return (
    <div className="service_container">
      <GradientCircle className={"service_gradient_circle2"} />
      <div className="service_gradient_circle"></div>
      <Marquee />
      <div className="accordion"></div>
      {/* <LottiAnimations /> */}
    </div>
  );
}

export default Skills;
