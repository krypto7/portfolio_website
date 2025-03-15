import React from "react";
import "./ProjectCard.css";
import { FaArrowRight } from "react-icons/fa";

function ProjectCard({ workTitle, workDetails, imagePreview }) {
  return (
    <div className="project-card">
      <div className="image-preview">
        <img src={imagePreview} alt="" />
      </div>
      <div className="card-details">
        <div className="text-icon-container">
          <div className="text-box">
            <span className="text text1">{workTitle}</span>
            <span className="text text2">{workTitle}</span>
          </div>
          <div className="arrow-svg">
            <FaArrowRight className="card-arrow-icon" />
          </div>
        </div>
        <div className="work-description">{workDetails}</div>
      </div>
    </div>
  );
}

export default ProjectCard;
