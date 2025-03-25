import React from "react";
import "./Services.css";
import CustomButtons from "../../components/CustomButtons/CustomButtons";
import { ImWhatsapp } from "react-icons/im";

function Services({ services }) {
  const servicesData = [
    {
      title: "UI Design",
      description:
        "I create visually appealing, user-friendly, and responsive UI designs. By leveraging modern tools like Figma and Framer, I ensure seamless user experiences. My designs focus on usability, accessibility, and brand consistency.Let me know if you need further refinements! 🚀",
    },
    {
      title: "Front-end Development",
      description:
        "I develop high-performance, scalable web applications using React and Next.js. My focus is on clean code, responsiveness, and seamless user experience. I optimize performance, ensure smooth interactions, and enhance accessibility for all users.",
    },
    {
      title: "Web Developement",
      description:
        "I build fast, responsive, and user-friendly websites using modern technologies. My focus is on clean code, seamless navigation, and optimized performance. I develop scalable web solutions with React, Next.js, and other frameworks. Ensuring cross-browser compatibility and accessibility, I create websites that offer a great user experience. From front-end to back-end integration, I deliver fully functional and dynamic web applications.",
    },
  ];
  return (
    <section className="service_section">
      <p className="subtitle">How can I help you?</p>
      <h1 className="title">Services</h1>
      <div className="services_card_container">
        {servicesData.map((service, index) => (
          <div key={index} className="service_card">
            <div class="glow" />
            <div className="service_title">
              <p>{String(index + 1).padStart(2, "0")}</p>
              <h2>
                {service.title.split(" ")[0]} <br />
                {service.title.split(" ").slice(1).join(" ")}
              </h2>
            </div>
            <div>
              <p class="service_desc">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <CustomButtons
        islink
        hasIcon
        link_container={"link_container"}
        btntitle_style={"btn_title"}
        btn_title={"Happy to chat on Whatsapp"}
        btn_icon={<ImWhatsapp className="btn_icon" />}
        btnIcon_style={"btnIcon_style"}
      />
    </section>
  );
}

export default Services;
