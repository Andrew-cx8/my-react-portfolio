import React from "react";
import "../Cards/Card.css";

function Card(props) {
  return (
    <div className="cardsmain">
      <div className="position">
        <img id="pimage" src={props.image} alt={props.alt} srcset="" />
        <h2 id="psub">{props.title}</h2>
        <p id="pp">{props.p}</p>
        <div className="buttons">
          <button className="live">Live</button>
          <button className="code">Code</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
