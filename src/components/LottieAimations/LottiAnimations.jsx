import React from "react";
import runRobo from "../../assets/Animation - 1741947094273.json";
import Lottie from "lottie-react";

function LottiAnimations() {
  return (
    <Lottie
      animationData={runRobo}
      height={"60px"}
      width={"60px"}
      loop={true}
    />
  );
}

export default LottiAnimations;
