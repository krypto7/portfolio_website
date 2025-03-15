import React, { useState } from "react";
import "./style.css";

function Navbar() {
  const [isClicked, setClicked] = useState(false);

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <nav className="navbar desktop">
        <div className="navbar_container">
          <ul>
            <li>
              <a href="#" className="add_fraction home">
                HOME
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="add_fraction"
                onClick={(e) => handleScroll(e, "about")}
              >
                ABOUT ME
              </a>
            </li>
            <li>
              <a href="#" className="add_fraction">
                WORK
              </a>
            </li>
            <li>
              <a href="#">SERVICES</a>
            </li>
            {/* <li>
              <a href="#"></a>
            </li> */}
          </ul>
        </div>
      </nav>

      {/* ------------------ mobile-navabr------------- */}
      <nav className="navbar_mobile mobile">
        <div>Hello</div>
        <div onClick={() => setClicked(!isClicked)}>Menu</div>
        <div
          className="nav_mobile_menu"
          style={{ right: isClicked ? "0%" : "-100%" }}
        >
          {isClicked && (
            <ul>
              <li>Home</li>
              <li>Work</li>
              <li>Servies</li>
              <li>Contact Me</li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
