import React from "react";
import "./style.css";

function OnlineMarquee() {
  return (
    <div className="top_menus">
      <div className="online_status">
        <div className="online_dot">
          <div className="online_circle"></div>
        </div>
        <div className="online_marquee">
          <div className="top-button_blur"></div>
          <div className="top-button_blur is-right"></div>
          <div className="marquee_inner">
            <p>Available for work</p>
            <p>Available for work</p>
            <p>Available for work</p>
            <p>Available for work</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnlineMarquee;
