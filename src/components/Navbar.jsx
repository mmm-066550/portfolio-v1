import React, { useState, useLayoutEffect } from "react";
import "../assets/styles/navbar.sass";
import { RandomReveal } from "react-random-reveal";
import Glitch from "react-glitch-text/dist/index";
import _ from "lodash";

export default function Navbar() {
  const [data, setData] = useState([]);
  useLayoutEffect(() => {
    fetch("../../data/sections.json", {
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
      <nav id="app-navbar" className="">
        <div className="container py-4">
          <div className="row py-4 g-0">
            <div className="text-center text-sm-start col-12 col-md-4 py-md-2">
              <ul className="left-nav-list">
                {data.sections
                  ?.filter((el) => el.i <= data.sections.length * 0.5)
                  .map((el) => {
                    return (
                      <li
                        data-aos="fade-down"
                        data-aos-delay={el.i * 500}
                        key={el.i}
                        className="nav-list-item"
                      >
                        <a href={el.path} className="app-nav-link">
                          <span>
                            <span>/</span>/0{el.i}.{" "}
                          </span>
                          {
                            <RandomReveal
                              isPlaying
                              duration={3}
                              characters={`<${el.name}/>`}
                            />
                          }
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="col-12 col-md-4 py-md-2 d-flex justify-content-center align-items-center">
              <div data-aos="zoom-in" className="app-logo personal-logo-brand">
                <a href="/">
                  <Glitch>
                    {
                      <RandomReveal
                        isPlaying
                        duration={3}
                        characters={data.name}
                      />
                    }
                  </Glitch>
                </a>
              </div>
            </div>
            <div className="col-12 col-md-4 py-md-2">
              <ul className="right-nav-list align-items-center align-items-sm-end">
                {data.sections
                  ?.filter((el) => el.i > data.sections.length * 0.5)
                  .map((el) => {
                    return (
                      <li
                        data-aos="fade-down"
                        data-aos-delay={el.i * 500}
                        key={el.i}
                        className="nav-list-item"
                      >
                        <a href={el.path} className="app-nav-link">
                          <span>
                            <span>/</span>/0{el.i}.{" "}
                          </span>
                          {
                            <RandomReveal
                              isPlaying
                              duration={3}
                              characters={`<${el.name}/>`}
                            />
                          }
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  return <></>;
}
