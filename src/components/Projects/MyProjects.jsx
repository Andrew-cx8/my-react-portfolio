import React from "react";
import "../Projects/MyProjects.css";
import soren from "../../assets/Gallery/soren.png";
import Card from "../Cards/Card";

function MyProjects() {
  return (
    <div className="contenido">
      <h1 className="projects">My Projects</h1>
      <Card
        title="Soren"
        image={soren}
        p="My first landing page made with vanilla HTML5 & CSS"
        live="https://soren-coral.vercel.app/"
        code="https://github.com/Andrew-cx8/Soren-Disney-landing-Page"
      />

      <Card title="13" />
    </div>
  );
}

export default MyProjects;
