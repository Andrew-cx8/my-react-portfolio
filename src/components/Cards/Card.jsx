import React from "react";
import "../Cards/Card.css";
import eye from "../../assets/eye.svg";
import github from "../../assets/github.svg";

function Card(props) {
  return (
    <div className="cardsmain">
      <div className="position">
        <img id="pimage" src={props.image} alt={props.alt} srcset="" />
        <h2 id="psub">{props.title}</h2>
        <p id="pp">{props.p}</p>

        <div className="buttons">
          <a target="_blank" href={props.live}>
            <button className="live">
              Live <img src={eye} alt="eye icon" />
            </button>
          </a>
          <a target="_blank" href={props.code}>
            <button className="code">
              Code <img src={github} alt="octocat" />{" "}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
