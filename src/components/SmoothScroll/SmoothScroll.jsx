import Lenis from "lenis";
import React from "react";
import { useEffect, useRef } from "react";

function SmoothScroll({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1, // Adjust for smoothness
      direction: "vertical",
      smoothTouch: false, // Enable smooth scrolling on touch devices
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);

  return <div>{children}</div>;
}

export default SmoothScroll;
