import React, { useState } from "react";
import logo from "../images/logo.svg";
import hamIcon from "../images/icon-hamburger.svg";
import closeIcon from "../images/icon-close.svg";

const Header = () => {
  const [hamClick, setHamClick] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    return setWindowWidth(window.innerWidth);
  });
  return (
    <>
      <header>
        <img className="header-logo" src={logo} alt="Home." />
        <ul
          className={`${
            hamClick && windowWidth <= 500 ? "ham-menu" : "navbar-nav"
          }`}
        >
          <li className="nav-item">Product</li>
          <li className="nav-item">Features</li>
          <li className="nav-item">Pricing</li>
          <li className="nav-item">.</li>
          <li className="nav-item">Login</li>
        </ul>
        <img
          className="ham-icon"
          src={hamClick ? closeIcon : hamIcon}
          onClick={() => setHamClick(!hamClick)}
          alt="Hamburger menu."
        />
      </header>
    </>
  );
};

export default Header;
