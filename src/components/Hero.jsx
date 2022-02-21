import React, { useLayoutEffect, useState } from "react";
import "../assets/styles/hero.sass";
import Glitch from "react-glitch-text";
import { ReactComponent as ReactLogo } from "../assets/images/animated-line.svg";
import _ from "lodash";

import { RandomReveal } from "react-random-reveal";

export default function Hero() {
  const [data, setData] = useState({});
  useLayoutEffect(() => {
    fetch("../../data/info.json", {
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
      <div id="app-hero" className="pb-md-5">
        <div data-aos className="d-none d-xl-block animated-connect-line">
          <ReactLogo />
        </div>
        <div className="container pb-xl-5">
          <div className="row g-0 pb-5 align-items-center">
            <div
              data-aos="fade-up"
              className="pt-md-5 py-2 col-12 col-md-7 text-center text-sm-start"
            >
              <p className="m-0 tag-placeholder">
                <span className="tag-span">{"<p>"}</span>
                <RandomReveal
                  isPlaying
                  duration={3}
                  characters={`Hey it's me`}
                />
                <span className="tag-span">{"</p>"}</span>
              </p>
              {/* NAME */}
              <div className="py-3 text-center name">
                <Glitch>
                  {
                    <RandomReveal
                      isPlaying
                      duration={3}
                      characters={data.firstName}
                    />
                  }
                </Glitch>
                <Glitch>
                  {
                    <RandomReveal
                      isPlaying
                      duration={3}
                      characters={data.lastName}
                    />
                  }
                </Glitch>
              </div>
              <p className="m-0 tag-placeholder">
                <span className="d-none d-sm-inline tag-span">{"<p>"}</span>
                <RandomReveal isPlaying duration={3} characters={data.title} />
                <span className="d-none d-sm-inline tag-span">{"</p>"}</span>
              </p>
            </div>
            <div
              className="py-2 pt-md-3 mt-5 col-12 col-md-5"
              data-aos="fade-down"
            >
              <div className="download-resume-area justify-content-center justify-content-md-end">
                <a href="/#" className="resume-btn">
                  <span className="outer">
                    <span className="arch"></span>
                    <span className="inner">
                      <span className="tag">
                        {
                          <RandomReveal
                            isPlaying
                            duration={3}
                            characters="Download CV"
                          />
                        }
                      </span>
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  return <></>;
}
