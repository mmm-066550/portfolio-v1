import React from "react";
import Section from "../Section";
import ProjectView from "../ProjectView";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../../assets/styles/portfolio-section.sass";
export default function Portfolio() {
  return (
    <div className="pt-xl-4" data-aos="fade" id="portfolio">
      <div className="d-none d-xl-flex fixed">
        <div className="projects-bullets"></div>
      </div>
      <Section dir="rtl" head="my portfolio">
        <div className="col">
          <div className="works-area">
            <p data-aos="fade-right" className="sec-title">
              <span>03.</span>Somethings I’ve Built
            </p>
            <div id="portfolio-works-container">
              <Swiper
                spaceBetween={50}
                speed={2000}
                modules={[Navigation, Pagination]}
                navigation={{
                  nextEl: ".nav-btns .next-work-btn",
                  prevEl: ".nav-btns .prev-work-btn",
                }}
                pagination={{
                  el: ".projects-bullets",
                  clickable: true,
                }}
              >
                <SwiperSlide>
                  <ProjectView />
                </SwiperSlide>
                <SwiperSlide>
                  <ProjectView />
                </SwiperSlide>
                <SwiperSlide>
                  <ProjectView />
                </SwiperSlide>
                <SwiperSlide>
                  <ProjectView />
                </SwiperSlide>
              </Swiper>
              <div className="nav-btns">
                <button className="prev-work-btn">
                  <i className="fad fa-chevron-double-left me-3"></i>
                  <p className="m-0">
                    <span className="d-none d-md-block txt">Prev Project</span>
                  </p>
                </button>
                <button className="next-work-btn">
                  <p className="m-0">
                    <span className="d-none d-md-block txt">Next Project</span>
                  </p>
                  <i className="fad fa-chevron-double-right ms-3"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
