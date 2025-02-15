import React from "react";
import "./style.css";

function Navbar() {
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
              <a href="#" className="add_fraction">
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
      <nav className="navbar_mobile mobile"></nav>
    </>
  );
}

export default Navbar;
