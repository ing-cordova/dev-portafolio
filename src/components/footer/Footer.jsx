import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import {
  socialmedia,
  infoSection,
  aboutSection,
  technologiesStack,
  servicesSection,
  portfolioSection,
  testimonialsSection,
  contactSection,
} from "../../portfolio";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Cordova
      </a>
      <ul className="permalinks">
        {!infoSection.display ? null : (
          <li>
            <a href="#home">Home</a>
          </li>
        )}
        {!aboutSection.display ? null : (
          <li>
            <a href="#about">About</a>
          </li>
        )}
        {!technologiesStack.display ? null : (
          <li>
            <a href="#experience">Experience</a>
          </li>
        )}
        {!servicesSection.display ? null : (
          <li>
            <a href="#services">Services</a>
          </li>
        )}
        {!portfolioSection.display ? null : (
          <li>
            <a href="#portafolio">Portfolio</a>
          </li>
        )}
        {!testimonialsSection.display ? null : (
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
        )}
        {!contactSection.display ? null : (
          <li>
            <a href="#contact">Contact</a>
          </li>
        )}
      </ul>

      <div className="footer__socials">
        {/* <a href={socialmedia.facebook} target="_blank" rel="noreferrer">
          <BsFacebook />
        </a> */}
        <a href={socialmedia.twitter} target="_blank" rel="noreferrer">
          <BsTwitter />
        </a>
      </div>

      <div className="footer__copyright">
      <small>&copy; {infoSection.name}. All rights reserved. {new Date().getFullYear()}</small>
      </div>
    </footer>
  );
};

export default Footer;
