import React from "react";
import "../Projects/MyProjects.css";
import soren from "../../assets/Gallery/soren.png";
import two from "../../assets/Gallery/2.png";
import three from "../../assets/Gallery/3.png";
import four from "../../assets/Gallery/4.png";
import five from "../../assets/Gallery/5.png";
import Card from "../Cards/Card";

function MyProjects() {
  return (
    <div className="contenido">
      <h1 className="projects">My Projects</h1>
      <Card
        title="Soren"
        image={soren}
        p="My first landing page made with vanilla HTML5 & CSS"
      />
    </div>
  );
}

export default MyProjects;
