import React from "react";
import Section from "../section";
import styles from "./about.module.sass";
import AnimatedLine from "../animated-line";

export default function About({ data }) {
  return (
    <div id="about" className={`pb-xl-1 pt-xl-5 ${styles.about}`}>
      <div
        data-aos
        className="d-none d-xl-block animated-right animated-connect-line"
      >
        <AnimatedLine />
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
              <div className={`${styles.skills} mb-5`}>
                <ul className={styles.skills_list}>
                  {data.skills
                    .filter((_, i) => {
                      return i <= data.skills.length / 2;
                    })
                    .map((skill) => {
                      return (
                        <li key={skill} className={styles.skill_item}>
                          {skill}
                        </li>
                      );
                    })}
                </ul>
                <ul className={styles.skills_list}>
                  {data.skills
                    .filter((_, i) => {
                      return i > data.skills.length / 2;
                    })
                    .map((skill) => {
                      return (
                        <li key={skill} className={styles.skill_item}>
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
}
