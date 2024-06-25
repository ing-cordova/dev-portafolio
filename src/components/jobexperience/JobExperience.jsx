import React from "react";
import "./jobexperiencestyle.css";
import { jobExperience } from "../../portfolio";

const JobExperience = () => {
  if (!jobExperience.display) {
    return null;
  }
  return (
    <section id="jobexperience">
      <h5>Where I have worked</h5>
      <h2>Job Career</h2>
      <div className="container jobexperience__container">
        {jobExperience.jobs.slice().reverse().map((job) => {
          return (
            <div className="jobexperience__content" key={job.id}>
              <div className="div__image">
                <img src={job.image} alt={job.company} />
              </div>
              <div className="div__data">
                <h3>{job.title}</h3>
                <h4>{job.company}</h4>
                <h5>{job.description}</h5>
                <h5>
                  {job.dateTo} - {job.dateFrom === '-' ? 'Present' : job.dateFrom}
                </h5>
                <h5 className={job.location === 'remote' ? 'location' : 'onsite'}>{job.location.charAt(0).toUpperCase() + job.location.slice(1)}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default JobExperience;
