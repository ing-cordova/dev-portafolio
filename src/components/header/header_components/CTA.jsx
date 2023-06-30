import React from "react";
import { infoSection } from "../../../portfolio.js";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href={infoSection.cvLink}
        target="_blank"
        className="btn"
        rel="noreferrer"
      >
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
