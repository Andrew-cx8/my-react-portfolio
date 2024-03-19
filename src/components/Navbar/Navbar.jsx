import React from "react";
import "./Navbar.css";
import moon from "../../assets/moon.svg";
import sun from "../../assets/sun.svg";
import search_icon_light from "../../assets/search.svg";
import search_icon_dark from "../../assets/search_night.svg";

const Navbar = ({ theme, setTheme }) => {
  const toggle_mode = () => {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div className="navbar">
      <div className="logo">
        <div className="logo-bg">
          <h1>{theme == "light" ? "😎" : "😴"}</h1>
        </div>
      </div>
      <ul>
        <li>Home</li>
        <li>About Me</li>
        <li>Contact</li>
      </ul>

      <div className="search-box">
        <input type="text" placeholder="search" />
        <img
          src={theme == "light" ? search_icon_light : search_icon_light}
          alt=""
        />
      </div>

      <img
        onClick={() => {
          toggle_mode();
        }}
        src={theme == "light" ? moon : sun}
        alt=""
        className="toggle-icon"
      />
    </div>
  );
};

export default Navbar;
