import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import {
  infoSection,
  aboutSection,
  technologiesStack,
  servicesSection,
  contactSection,
} from "../../portfolio";

const Nav = () => {
  const [active, setActive] = useState("#");

  return (
    <nav>
      {!infoSection.display ? null : (
        <a
          href="#home"
          onClick={() => setActive("#home")}
          className={active === "#home" ? "active" : ""}
        >
          <AiOutlineHome />
        </a>
      )}
      {!aboutSection.display ? null : (
        <a
          href="#about"
          onClick={() => setActive("#about")}
          className={active === "#about" ? "active" : ""}
        >
          <AiOutlineUser />
        </a>
      )}
      {!technologiesStack.display ? null : (
        <a
          href="#experience"
          onClick={() => setActive("#experience")}
          className={active === "#experience" ? "active" : ""}
        >
          <BiBook />
        </a>
      )}
      {!servicesSection.display ? null : (
        <a
          href="#services"
          onClick={() => setActive("#services")}
          className={active === "#services" ? "active" : ""}
        >
          <RiServiceLine />
        </a>
      )}
      {!contactSection.display ? null : (
        <a
          href="#contact"
          onClick={() => setActive("#contact")}
          className={active === "#contact" ? "active" : ""}
        >
          <BiMessageSquareDetail />
        </a>
      )}
    </nav>
  );
};

export default Nav;
