import React from "react";
import FloatingBox from "../components/FloatingBox";
import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects-container">
      <FloatingBox><h2>Python Projects</h2></FloatingBox>
      <FloatingBox><h2>Java Projects</h2></FloatingBox>
      <FloatingBox><h2>JavaScript Projects</h2></FloatingBox>
    </div>
  );
}

export default Projects;
