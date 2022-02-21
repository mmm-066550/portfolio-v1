import React from "react";
import "../assets/styles/navbar.sass";
import { RandomReveal } from "react-random-reveal";
import Glitch from "react-glitch-text/dist/index";

export default function Navbar() {
  const nav_routes = [
    { i: 1, name: "about", path: "/#about" },
    { i: 2, name: "education", path: "/#education" },
    { i: 3, name: "projects", path: "/#portfolio" },
    { i: 4, name: "contact", path: "/#contact" },
  ];
  return (
    <nav id="app-navbar" className="">
      <div className="container py-4">
        <div className="row py-4 g-0">
          <div className="text-center text-sm-start col-12 col-md-4 py-md-2">
            <ul className="left-nav-list">
              {nav_routes
                ?.filter((el) => el.i % 2 !== 0)
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
                      characters="mmm066550"
                    />
                  }
                </Glitch>
              </a>
            </div>
          </div>
          <div className="col-12 col-md-4 py-md-2">
            <ul className="right-nav-list align-items-center align-items-sm-end">
              {nav_routes
                ?.filter((el) => el.i % 2 === 0)
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
}
