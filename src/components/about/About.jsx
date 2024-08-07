import React from "react";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import "./about.css";
import { aboutSection } from "../../portfolio";

const About = () => {
  if (!aboutSection.display) {
    return null;
  }
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={aboutSection.photo} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            {/* So far, we can make this as an unique component with properties */}
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              {aboutSection.experience === 0 ? (
                <small>No experience yet</small>
              ) : aboutSection.experience === 1 ? (
                <small>1 Year Working Experience</small>
              ) : aboutSection.experience >= 1 && aboutSection.experience < 2 ? (
                <small>+1 Year Working Experience</small>
              ) : (
                <small>
                  {aboutSection.experience} Years Working Experience
                </small>
              )}
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              {aboutSection.clients === 0 ? (
                <small>No clients yet</small>
              ) : aboutSection.clients === 1 ? (
                <small>1 Worldwide</small>
              ) : (
                <small>{aboutSection.clients}+ Worldwide</small>
              )}
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              {aboutSection.projects === 0 ? (
                <small>No projects completed yet</small>
              ) : aboutSection.projects === 1 ? (
                <small>1 Completed</small>
              ) : (
                <small>{aboutSection.projects}+ Completed</small>
              )}
            </article>
          </div>

          <p>{aboutSection.desciption}</p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
