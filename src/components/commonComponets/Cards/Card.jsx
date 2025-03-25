import React from "react";
import "./Card.css";

function Card({ services }) {
  return (
    <div className="services_card_container">
      {services.map((service, index) => (
        <div key={index} className="service_card">
          <div className="service_title">
            <p>{String(index + 1).padStart(2, "0")}</p>
            <h2>{service.title}</h2>
          </div>
          <div>
            <p>{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
