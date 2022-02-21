import React from "react";
import { RandomReveal } from "react-random-reveal";
import "../assets/styles/section.sass";

export default function Section({ head, children, dir }) {
  return (
    <section
      className={`app-section ${head} ${dir === "ltr" ? "right-bg" : ""}`}
    >
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="heading">
              <h2 data-aos="zoom-in" className="section-heading pt-3 pb-4 mb-4">
                <RandomReveal isPlaying duration={3} characters={head} />
              </h2>
            </div>
          </div>
        </div>
        <div className="row mb-5 section-content position-relative">
          {children}
        </div>
      </div>
    </section>
  );
}
