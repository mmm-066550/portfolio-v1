import Section from "../Section";
import ThebesLogo from "../ThebesLogo";
import "../../assets/styles/education-section.sass";
import _ from "lodash";
import React, { useState, useLayoutEffect } from "react";
import { ReactComponent as ReactLogo } from "../../assets/images/animated-line.svg";
export default function Education() {
  const [data, setData] = useState({});
  useLayoutEffect(() => {
    fetch("../../data/education.json", {
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
      <div id="education">
        <div data-aos className="d-none d-xl-block animated-connect-line">
          <ReactLogo />
        </div>
        <Section dir="ltr" head="education">
          <div data-aos="zoom-in-right" className="col-12 col-md-5">
            <div className="univ-logo mb-5">
              <ThebesLogo />
            </div>
          </div>
          <div
            data-aos="zoom-in-left"
            className="col-12  col-md-7 mb-xl-5 pb-xl-5"
          >
            <div className="about-me-area">
              <p className="sec-title">
                <span>02.</span>my education
              </p>
              <p>{data.degree}</p>
              <p className="univ">{data.university}</p>
              <p className="interval">
                <i className="fal me-3 fa-calendar"></i>
                {data.interval}
              </p>
            </div>
          </div>
        </Section>
      </div>
    );
  return <></>;
}
