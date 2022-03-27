import React from "react";
import styles from "./navbar.module.sass";
import { RandomReveal } from "react-random-reveal";
import Glitch from "../glitch";
import Link from "next/link";

export default function Navbar({ data }) {
  return (
    <nav id="app-navbar" className={styles.app_navbar}>
      <div className="container py-4">
        <div className={` ${styles.row} row py-4 g-0`}>
          <div className="text-center text-sm-start col-12 col-md-4 py-md-2">
            <ul className={styles.left_nav_list}>
              {data.sections.length &&
                data.sections
                  ?.filter((el) => el.i <= data.sections.length * 0.5)
                  .map((el) => {
                    return (
                      <li
                        data-aos="fade-down"
                        data-aos-delay={el.i * 500}
                        key={el.i}
                        className={styles.nav_list_item}
                      >
                        <a href={el.path} className={styles.app_nav_link}>
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
            <div
              data-aos="zoom-in"
              className={`${styles.app_logo} personal-logo-brand}`}
            >
              <Link href="/">
                <a>
                  <Glitch>
                    <RandomReveal
                      isPlaying
                      duration={3}
                      characters={data.name}
                    />
                  </Glitch>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-4 py-md-2">
            <ul
              className={`${styles.left_nav_list} align-items-center align-items-sm-end`}
            >
              {data.sections.length &&
                data.sections
                  ?.filter((el) => el.i > data.sections.length * 0.5)
                  .map((el) => {
                    return (
                      <li
                        data-aos="fade-down"
                        data-aos-delay={el.i * 500}
                        key={el.i}
                        className={styles.nav_list_item}
                      >
                        <a href={el.path} className={styles.app_nav_link}>
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
