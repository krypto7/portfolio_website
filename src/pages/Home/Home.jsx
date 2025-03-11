import React from "react";
import "./Home.css";
import TopNavabar from "../../components/TopNavbar/TopNavabar";
import GradientCircle from "../../components/GradientCirlcle/GradientCircle";
import { ImWhatsapp } from "react-icons/im";
import { CiHeart } from "react-icons/ci";
import CustomButtons from "../../components/CustomButtons/CustomButtons";
import img1 from "../../assets/desktop_img1.png";
// import img2 from "../../assets/mobile_img.JPG";

function Home() {
  return (
    <div className="home_section">
      <TopNavabar />
      <GradientCircle className={"gradient_circle1"} />
      <GradientCircle className={"gradient_circle2"} />

      {/* -----------Home------------------- */}
      <div className="home_content">
        <div className="left_container">
          <div class="image_container">
            <img src={img1} alt="" srcset="" />
          </div>
          {/* <img src={img2} alt="" srcset="" /> */}
        </div>
        <div className="right_container">
          <p className="intro_subText">
            FRONTEND DEVELOPER & JAVASCRIPT EXPERT
          </p>
          <h1>Agency-level web development services at freelancer rates</h1>
          <p className="sub_text">
            My mission is to design and develop a website that you and your
            audience love{" "}
            <span className="heart_icon">
              <CiHeart />
            </span>
            .
          </p>

          <CustomButtons
            islink
            hasIcon
            link_container={"link_container"}
            btntitle_style={"btn_title"}
            btn_title={"Happy to chat on Whatsapp"}
            btn_icon={<ImWhatsapp className="btn_icon" />}
            btnIcon_style={"btnIcon_style"}
          />
        </div>
      </div>
      {/* -----------Home------------------- */}
    </div>
  );
}

export default Home;
