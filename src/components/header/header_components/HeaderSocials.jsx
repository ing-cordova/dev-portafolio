import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { ImGithub } from "react-icons/im";
import { socialmedia } from "../../../portfolio.js";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href={socialmedia.linkedin} target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href={socialmedia.github} target="_blank" rel="noreferrer">
        <ImGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
