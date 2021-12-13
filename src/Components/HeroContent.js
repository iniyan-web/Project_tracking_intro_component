import React from "react";
import deviceImg from "../images/illustration-devices.svg";

const HeroContent = () => {
  return (
    <>
      <div className="hero-content">
        <div className="hero-text">
          <div className="ht-heading">
            <div className="new">
              <span>New</span>
            </div>
            <h3>Monograph Dashboard</h3>
          </div>
          <h1 className="ht-title">Powerful insights into your team</h1>
          <p className="ht-info">
            Project planning and time tracking for agile teams
          </p>
          <div className="btn-grp">
            <button className="btn demo-btn">Schedule a demo</button>
            <button className="btn preview-btn">to see a preview</button>
          </div>
        </div>
        <img
          className="hero-img"
          src={deviceImg}
          alt="Illustration of a mobile and laptop."
        />
      </div>
    </>
  );
};

export default HeroContent;
