import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./experience.css";
import { technologiesStack } from "../../portfolio";

const Experience = () => {
  if (!technologiesStack.display) {
    return null;
  }
  return (
    <section id="experience">
      <h5>The Skills I have</h5>
      <h2>Stack of Technologies</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {technologiesStack.frontend.map(({ title, level }, index) => {
              return (
                <article className="experience__details" key={index}>
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{title}</h4>
                    <small>{level}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {technologiesStack.backend.map(({ title, level }, index) => {
              return (
                <article className="experience__details" key={index}>
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{title}</h4>
                    <small>{level}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
