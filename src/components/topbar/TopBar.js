import React from "react";
import "./topBar.css";
import profileImg from "../../img/profile-img.jpg";

export const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topleft">
          <span className="logo">
            <i className="bx bxs-rocket"></i>
            ReactAdmin
          </span>
        </div>
        <div className="topright">
          <div className="topbarIconContainer">
            <i className="bx bx-bell"></i>
            <span className="topIconBaged">2</span>
          </div>
          <div className="topbarIconContainer">
            <i className="bx bx-world"></i>
            <span className="topIconBaged">5</span>
          </div>
          <div className="topbarIconContainer">
            <i className="bx bx-cog"></i>
            {/* <span className="topIconBaged">2</span> */}
          </div>
          <img className="topAvatar" src={profileImg} alt="Profile Img" />
        </div>
      </div>
    </div>
  );
};
