import React from "react";
import gsap from "gsap";
import "./Marquee.css";
import { useGSAP } from "@gsap/react";

const MarqueeDetails = () => {
  return (
    <div className="marquee">
      <h1>Thrive Beyond Limit</h1>
      <img
        src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
        alt="Arrow"
      />
    </div>
  );
};

const Marquee = () => {
  useGSAP(() => {
    const handleWheel = (e) => {
      if (e.deltaY > 0) {
        gsap.to(".marquee img", { rotate: 180 });
        gsap.to(".marquee", {
          x: "-200%",
          duration: 6,
          ease: "none",
          repeat: -1,
        });
      } else {
        gsap.to(".marquee img", { rotate: 0 });
        gsap.to(".marquee", {
          x: "0%",
          duration: 6,
          ease: "none",
          repeat: -1,
        });
      }
    };

    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div>
      <div id="move">
        {[...Array(15)].map((_, index) => (
          <MarqueeDetails key={index} />
        ))}
      </div>
    </div>
  );
};

export default Marquee;
