import React from "react";
import Section from "../section";
import ProjectView from "../project-view";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import styles from "./portfolio.module.sass";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { BsChevronDoubleRight, BsChevronDoubleLeft } from "react-icons/bs";
import { BiSliderAlt } from "react-icons/bi";

export default function Portfolio({ slider, data, setSlider }) {
  return (
    <div
      data-aos
      id="portfolio"
      className={`${styles.portfolio} pt-xl-4 portfolio `}
    >
      {slider ? (
        <div className={`d-none d-xl-flex ${styles.fixed}`}>
          <div className={`${styles.projects_bullets}`}></div>
        </div>
      ) : (
        <></>
      )}

      <Section dir="rtl" head="my portfolio">
        <div className="col">
          <div className="works-area">
            <div className="d-flex justify-content-between">
              <p data-aos="fade-right" className="sec-title">
                <span>03.</span>What I’ve Built
              </p>
              <div className={styles.slider_toggle}>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    e.target.checked ? setSlider(true) : setSlider(false);
                  }}
                />
                <span className="d-none d-md-inline-block">Slider</span>
                <BiSliderAlt className="me-3 m-md-0" />
              </div>
            </div>
            <div
              id="portfolio-works-container"
              className={styles.portfolio_works_container}
            >
              {slider ? (
                <>
                  <Swiper
                    spaceBetween={50}
                    speed={2000}
                    modules={[Navigation, Pagination]}
                    navigation={{
                      nextEl: `.${styles.nav_btns} .${styles.next_work_btn}`,
                      prevEl: `.${styles.nav_btns} .${styles.prev_work_btn}`,
                    }}
                    pagination={{
                      el: `.${styles.projects_bullets}`,
                      clickable: true,
                    }}
                  >
                    {data.map((project) => {
                      return (
                        <SwiperSlide key={project.index}>
                          <ProjectView project={project} slider />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                  <div className={styles.nav_btns}>
                    <button
                      data-aos="fade-left"
                      className={styles.prev_work_btn}
                    >
                      <BsChevronDoubleLeft className="me-3" />

                      <p className="m-0">
                        <span className="d-none d-md-block txt">
                          Prev Project
                        </span>
                      </p>
                    </button>
                    <button
                      data-aos="fade-right"
                      className={styles.next_work_btn}
                    >
                      <p className="m-0">
                        <span className="d-none d-md-block txt">
                          Next Project
                        </span>
                      </p>
                      <BsChevronDoubleRight className="ms-3" />
                    </button>
                  </div>
                </>
              ) : (
                data.map((project) => {
                  return (
                    <SwiperSlide key={project.index}>
                      <ProjectView project={project} />
                    </SwiperSlide>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
