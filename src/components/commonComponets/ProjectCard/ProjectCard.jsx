import React from "react";
import "./ProjectCard.css";
import { FaArrowRight } from "react-icons/fa";

function ProjectCard({ workTitle, workDetails, imagePreview }) {
  return (
    <div className="project-card">
      <div className="image-preview">
        <img
          // src="https://images.unsplash.com/photo-1586810724476-c294fb7ac01b?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          src={imagePreview}
          alt=""
          srcSet=""
        />
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
