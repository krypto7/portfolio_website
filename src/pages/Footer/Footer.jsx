import React from "react";
import "./Footer.css";
import Marquee from "react-fast-marquee";

function Footer() {
  return (
    <div className="footer_container">
      <div className="connect_marquee">
        <Marquee className="footer_marquee" loop={0}>
          {[...Array(10)].map((_, index) => (
            <div className="footer_marquee_items" key={index}>
              <h1>LET'S TALK -</h1>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Footer;
