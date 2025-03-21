import React, { useRef } from "react";
import "./AboutMe.css";
import { motion, useScroll, useTransform } from "framer-motion";

function AboutMe() {
  const aboutMe = [
    "Experienced front-end developer specializing in building responsive and user-friendly web applications using modern JavaScript frameworks like React.",
    "Deep understanding of JavaScript, ES6+, and front-end technologies, ensuring high-performance and interactive UI development.",
    "Familiar with backend technologies, enabling seamless integration between front-end and server-side functionalities.",
    "Hands-on experience in mobile development, creating cross-platform and native applications for enhanced user experiences.",
    "Constantly exploring new technologies and best practices to build scalable, efficient, and visually appealing digital solutions.",
  ];

  // const containerRef = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   offset: ["start start", "end end"],
  // });

  // Map scroll progress to height (0% at start, 100% at end)
  // const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="about-me" id="about">
      <div className="highlight-line-wrapper">
        <div className="highlight-line-blue">
          <motion.div className="highlight"></motion.div>
        </div>
      </div>
      <div className="about-list">
        <ol>
          {aboutMe.map((item, index) => (
            <li>
              <div className="custom-marker">{index + 1}</div>
              {item}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default AboutMe;
