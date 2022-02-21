import React, { useLayoutEffect, useState } from "react";
import Section from "../Section";
import "../../assets/styles/about-section.sass";
import { ReactComponent as ReactLogo } from "../../assets/images/animated-line.svg";
import _ from "lodash";
export default function About() {
  const [data, setData] = useState({});
  useLayoutEffect(() => {
    fetch("../../data/about.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  if (!_.isEmpty(data))
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
                {data.facts.map((fact) => {
                  return <p key={fact}>{fact}</p>;
                })}
                <p>
                  Here are a few technologies I have been working with recently:
                </p>
                <div className="skills mb-5">
                  <ul className="skills-list">
                    {data.skills
                      .filter((_, i) => {
                        return i <= data.skills.length / 2;
                      })
                      .map((skill) => {
                        return (
                          <li key={skill} className="skill-item">
                            {skill}
                          </li>
                        );
                      })}
                  </ul>
                  <ul className="skills-list">
                    {data.skills
                      .filter((_, i) => {
                        return i > data.skills.length / 2;
                      })
                      .map((skill) => {
                        return (
                          <li key={skill} className="skill-item">
                            {skill}
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
    );
  return <></>;
}
