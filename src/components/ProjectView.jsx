import React from "react";
import "../assets/styles/project-view.sass";
import netflix from "../assets/images/projects/netflix.png";

export default function ProjectView({ project }) {
  return (
    <div className="project-view  py-4 py-lg-5 mb-lg-3 row g-0">
      <span className="connect-line"></span>
      <div className="col-12 col-lg-6">
        <div data-aos="fade-up" className="project-info">
          <p className="project-number">
            Project <span>#0{project.index}</span>
          </p>
          <p className="project-name">{project.title}</p>
          <div className="my-4 d-lg-none project-img">
            <img src={project.thubmnail} alt="project-thumbnail" />
          </div>
          <p className="project-overview">{project.overview}</p>
          <div className="project-tools d-flex">
            {project.tools.map((tool) => {
              return <span key={tool}>{tool}</span>;
            })}
          </div>
          <div className="project-links">
            <a href={project.live_preview} target="_blank">
              <i className="fal fa-external-link"></i>
            </a>
            <a href={project.repo} target="_blank">
              <i className="fal fa-code-branch"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="col-6 d-none d-lg-flex">
        <div data-aos="fade-down" className="project-thumbnail">
          <img src={project.thubmnail} alt="project-thumbnail" />
        </div>
      </div>
    </div>
  );
}
