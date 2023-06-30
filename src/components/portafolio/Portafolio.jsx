import React from "react";
import "./portafolio.css";
import { portfolioSection } from "../../portfolio";

const Portafolio = () => {
  if (!portfolioSection.display) {
    return null;
  }
  return (
    <section id="portafolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {portfolioSection.projects.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                {github !== null ? (
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                ) : null}
                {demo !== null ? (
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portafolio;
