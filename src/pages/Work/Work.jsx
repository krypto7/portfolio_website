import React from "react";
import "./work.css";
import ProjectCard from "../../components/commonComponets/ProjectCard/ProjectCard";

function Work() {
  return (
    <div className="work-container">
      <p>Recent Work</p>
      <div className="work-section">
        <ProjectCard
          imagePreview={
            "https://images.unsplash.com/photo-1586810724476-c294fb7ac01b?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          workDetails={"Hello"}
          workTitle={"Blog-App"}
        />
        <ProjectCard
          imagePreview={
            "https://images.unsplash.com/photo-1586810724476-c294fb7ac01b?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          workDetails={"Hello"}
          workTitle={"Blog-App"}
        />
        <ProjectCard
          imagePreview={
            "https://images.unsplash.com/photo-1586810724476-c294fb7ac01b?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          workDetails={"Hello"}
          workTitle={"Blog-App"}
        />
        <ProjectCard
          imagePreview={
            "https://images.unsplash.com/photo-1586810724476-c294fb7ac01b?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          workDetails={"Hello"}
          workTitle={"Blog-App"}
        />
        <ProjectCard
          imagePreview={
            "https://images.unsplash.com/photo-1586810724476-c294fb7ac01b?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          workDetails={"Hello"}
          workTitle={"Blog-App"}
        />
        <ProjectCard
          imagePreview={
            "https://images.unsplash.com/photo-1586810724476-c294fb7ac01b?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          workDetails={"Hello"}
          workTitle={"Blog-App"}
        />
      </div>
    </div>
  );
}

export default Work;
