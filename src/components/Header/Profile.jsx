import React from "react";
import "./Profile.css";
import photo from "../../assets/Profile.png";

function Profile() {
  return (
    <div className="photo">
      <img id="pfp" src={photo} alt="" />
    </div>
  );
}

export default Profile;
