import React from "react";
import "./marquee.css";
import reactIcon from "../../../assets/icon_img/react-icon.svg";
import JsIcon from "../../../assets/icon_img/js_icon.svg";

function Marquee() {
  return (
    <div className=" main__container">
      <section className="enable-animation">
        <div className="marquee">
          <ul className="marquee__content">
            <div className=" marquee__item">
              <img src={reactIcon} alt="" />
            </div>
            <div className=" marquee__item">
              <img src={JsIcon} alt="" />
            </div>
            <div className=" marquee__item">
              <img src={reactIcon} alt="" />
            </div>
            <div className=" marquee__item">
              <img src={reactIcon} alt="" />
            </div>
            <div className=" marquee__item">
              <img src={reactIcon} alt="" />
            </div>
            <div className=" marquee__item">
              <img src={reactIcon} alt="" />
            </div>
          </ul>

          <ul aria-hidden="true" className="marquee__content">
            <div className=" marquee__item">
              <img src={reactIcon} alt="" />
            </div>
            <div className=" marquee__item">
              <img src={reactIcon} alt="" />
            </div>
            <div className=" marquee__item">
              <img src={reactIcon} alt="" />
            </div>
            <div className=" marquee__item">
              <img src={reactIcon} alt="" />
            </div>
            <div className=" marquee__item">
              <img src={reactIcon} alt="" />
            </div>
            <div className=" marquee__item">
              <img src={reactIcon} alt="" />
            </div>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Marquee;
