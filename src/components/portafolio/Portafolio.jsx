import React from "react";
import "./portafolio.css";
import IMG1 from "../../assets/imag-one.webp";
import IMG2 from "../../assets/imag-two.webp";
import IMG3 from "../../assets/imag-three.webp";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Fintech Website Design",
    github: "https://www.github.com",
    demo: "https://dribbble.com/shots/21829847-Fintech-Website-Design",
  },
  {
    id: 2,
    image: IMG2,
    title: "Starch Branding",
    github: "https://www.github.com",
    demo: "https://dribbble.com/shots/21829847-Fintech-Website-Design",
  },
  {
    id: 3,
    image: IMG3,
    title: "Booking App",
    github: "https://www.github.com",
    demo: "https://dribbble.com/shots/21828682-Booking-App",
  },
];

const Portafolio = () => {
  return (
    <section id="portafolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {/* So far, we can replace this with a new component in order to avoid the repetition. */}
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portafolio;
