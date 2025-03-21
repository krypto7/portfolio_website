import React from "react";
import "./Services.css";

function Services() {
  return (
    <section class="service_section">
      <p class="subtitle">How can i help you?</p>
      <h1 className="title">Services</h1>
      <div className="services_card_container">
        <div className="service_card">
          <div className="service_title">
            <p>01</p>
            <h2>UI Design</h2>
          </div>
          <div>
            <p>
              I specialize in crafting visually appealing, user-friendly, and
              responsive UI designs that enhance user engagement. By leveraging
              modern design principles and tools like Figma, Adobe XD, and
              Framer, I create intuitive interfaces that ensure seamless user
              experiences. My designs focus on usability, accessibility, and
              brand consistency to deliver high-quality digital experiences that
              captivate users and drive conversions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
