import React from "react";
import styles from "./hero.module.sass";
import Glitch from "../glitch";
import AnimatedLine from "../animated-line";
import { RandomReveal } from "react-random-reveal";
import Link from "next/link";

export default function Hero({ data }) {
  return (
    <div id="app-hero" className={`${styles.app_hero} pb-md-5`}>
      <div data-aos className="d-none d-xl-block animated-connect-line">
        <AnimatedLine />
      </div>
      <div className="container pb-xl-5">
        <div className="row g-0 pb-5 align-items-center">
          <div
            data-aos="fade-up"
            className="pt-md-5 py-2 col-12 col-md-7 text-center text-sm-start"
          >
            <p className={`m-0 text-center text-sm-start ${styles.tag_placeholder}`}>
              <span className={styles.tag_span}>{" <p> "}</span>
              <RandomReveal isPlaying duration={3} characters={`Hey it's me`} />
              <span className={styles.tag_span}>{" </p> "}</span>
            </p>
            <div className={`py-3 text-center ${styles.name}`}>
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
            <p className={`m-0 text-center text-sm-start ${styles.tag_placeholder}`}>
              <span className={`d-none d-sm-inline ${styles.tag_span}`}>
                {" <p> "}
              </span>
              <RandomReveal isPlaying duration={3} characters={data.title} />
              <span className={`d-none d-sm-inline ${styles.tag_span}`}>
                {" </p> "}
              </span>
            </p>
          </div>
          <div
            className="py-2 pt-md-3 mt-5 col-12 col-md-5"
            data-aos="fade-down"
          >
            <div
              className={`${styles.download_resume_area} justify-content-center justify-content-md-end`}
            >
              <Link target="__blank" href={data.resume}>
                <a target="__blank" className={styles.resume_btn}>
                  <span className={styles.outer}>
                    <span className={styles.arch}></span>
                    <span className={styles.inner}>
                      <span className={styles.tag}>
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
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
