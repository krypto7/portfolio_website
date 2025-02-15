import React from "react";
import "./TopNavbar.css";
import OnlineMarquee from "../online_marquee/OnlineMarquee";
import nameLogo from "../../assets/name_logo.png";

function TopNavabar() {
  return (
    <div className="top_navabr desktop">
      <img src={nameLogo} alt="" srcset="" />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "4vh",
        }}
      >
        <div className="topbar_Menu">
          <p>FontEnd Developer</p>
        </div>
        <OnlineMarquee />
      </div>
    </div>
  );
}

export default TopNavabar;
