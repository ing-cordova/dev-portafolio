import React from "react";
import CTA from "./header_components/CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./header_components/HeaderSocials";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Andres Córdova</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="profile-andres-cordova" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
