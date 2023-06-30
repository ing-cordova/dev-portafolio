import React from "react";
import { infoSection } from "../../portfolio.js";
import CTA from "./header_components/CTA";
import HeaderSocials from "./header_components/HeaderSocials";
import "./header.css";

const Header = () => {
  if (!infoSection.display) {
    return null;
  }
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>{infoSection.name}</h1>
        <h5 className="text-light">{infoSection.career}</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={infoSection.photo} alt="profile-andres-cordova" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
