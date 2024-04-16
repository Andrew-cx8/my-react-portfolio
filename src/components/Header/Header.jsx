import React from "react";
import "./Header.css";
import miCV from "../../assets/Resume.pdf";

function Header() {
  return (
    <section id="home" className="hi">
      <h3>Hello,</h3>
      <h1>I am Andres Chaverra</h1>
      <h5>Front-end developer and designer</h5>
      <p>Hello world, I'm just a curious guy who loves to do things</p>
      <a href={miCV} download="Resume - Adolfo Chaverra">
        <button className="CV">Download CV</button>
      </a>
    </section>
  );
}

export default Header;
