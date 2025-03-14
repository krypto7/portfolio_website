import ReactLenis from "lenis/react";
import React from "react";

function SmoothScroll({ children }) {
  const lenisOptions = {
    lerp: 0.1, // control how smooth the scroll is
    duration: 1.5, // slow down or speed up the scrolling
    smoothTouch: false,
    smooth: true,
  };
  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
