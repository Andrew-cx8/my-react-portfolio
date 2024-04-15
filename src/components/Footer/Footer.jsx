import React from "react";
import "../Footer/Footer.css";

function Footer() {
  return (
    <div>
      <footer>
        <span>
          <p>Made with</p>
          <p className="heart">❤</p>
          <p>by</p>
          <a href="https://github.com/Andrew-cx8" target="_blank">
            <strong> Andrew</strong>
          </a>
        </span>
      </footer>
    </div>
  );
}

export default Footer;
