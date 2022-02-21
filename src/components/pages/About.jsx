import React from "react";
import Section from "../Section";
import "../../assets/styles/about-section.sass";
import { ReactComponent as ReactLogo } from "../../assets/images/animated-line.svg";
export default function About() {
  return (
    <div id="about" className="pb-xl-1 pt-xl-5">
      <div
        data-aos
        className="d-none d-xl-block animated-right animated-connect-line"
      >
        <ReactLogo />
      </div>
      <Section dir="rtl" head="About">
        <div data-aos="fade-right" className="col col-xl-10">
          <div className="about-me-area">
            <p className="sec-title">
              <span>01.</span>About me
            </p>
            <div className="overview">
              <p>
                Hello! I am Moustapha a Fresh Graduate Computer Enginnering
                Student.
              </p>
              <p>
                I have a strong interest in Full stack development and I am
                looking for opportunities that would help me grow professionally
                while being resourceful for the organization.
              </p>
              <p>
                Here are a few technologies I have been working with recently:
              </p>
              <div className="skills mb-5">
                <ul className="skills-list">
                  <li className="skill-item">Javascript (+ES6)</li>
                  <li className="skill-item">React js</li>
                  <li className="skill-item">Node js</li>
                </ul>
                <ul className="skills-list">
                  <li className="skill-item">Express js</li>
                  <li className="skill-item">Mongodb</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
