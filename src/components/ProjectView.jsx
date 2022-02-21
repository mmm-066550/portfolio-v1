import React from "react";
import "../assets/styles/project-view.sass";
import netflix from "../assets/images/projects/netflix.png";

export default function ProjectView() {
  return (
    <div className="project-view py-5 mb-5 row g-0">
      <span className="connect-line"></span>
      <div className="col-6">
        <div data-aos="fade-up" className="project-info">
          <p className="project-number">
            Project <span>#01</span>
          </p>
          <p className="project-name">Netflix Clone</p>
          <p className="project-overview">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            similique, fugiat incidunt cum ullam, harum ratione nisi cupiditate
          </p>
          <div className="project-tools d-flex">
            <span>React</span>
            <span>Swiper</span>
            <span>Bootstrap</span>
            <span>TMDB api</span>
            <span>2embed api</span>
          </div>
          <div className="project-links">
            <a href="/" target="_blank">
              <i class="fal fa-external-link"></i>
            </a>
            <a href="/" target="_blank">
              <i class="fal fa-code-branch"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="col-6">
        <div data-aos="fade-down" className="project-thumbnail">
          <img src={netflix} alt="project-thumbnail" />
        </div>
      </div>
    </div>
  );
}
