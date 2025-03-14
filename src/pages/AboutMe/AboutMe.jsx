import React from "react";
import "./AboutMe.css";

function AboutMe() {
  const aboutMe = [
    "Experienced front-end developer specializing in building responsive and user-friendly web applications using modern JavaScript frameworks like React.",
    "Deep understanding of JavaScript, ES6+, and front-end technologies, ensuring high-performance and interactive UI development.",
    "Familiar with backend technologies, enabling seamless integration between front-end and server-side functionalities.",
    "Hands-on experience in mobile development, creating cross-platform and native applications for enhanced user experiences.",
    "Constantly exploring new technologies and best practices to build scalable, efficient, and visually appealing digital solutions.",
  ];
  return (
    <div className="about-me">
      <div className="line"></div>
      <div className="about-list">
        <ol>
          {aboutMe.map((item, index) => (
            <li>{item}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default AboutMe;
