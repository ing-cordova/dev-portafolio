import React from "react";
import { BiCheck } from "react-icons/bi";
import "./services.css";
import { servicesSection } from "../../portfolio";

const Services = () => {
  if (!servicesSection.display) {
    return null;
  }
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        {servicesSection.services.map((service, index) => {
          return (
            <article className="service" key={index}>
              <div className="service__head">
                <h3>{service.type}</h3>
              </div>
              <ul className="service__list">
                {service.offers.map((offer, index) => {
                  return (
                    <li key={index}>
                      <BiCheck className="service__list-icon" />
                      <p>{offer}</p>
                    </li>
                  );
                })}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
