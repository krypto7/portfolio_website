import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Lenis from "lenis";
import React, { useEffect } from "react";

function LenisScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 500);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove((time) => lenis.raf(time * 1000)); // optional cleanup
    };
  }, []);

  return <div>{children}</div>;
}

export default LenisScroll;
