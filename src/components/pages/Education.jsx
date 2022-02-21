import Section from "../Section";
import ThebesLogo from "../ThebesLogo";
import "../../assets/styles/education-section.sass";
import { ReactComponent as ReactLogo } from "../../assets/images/animated-line.svg";
export default function Education() {
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
            <p>Bachelor's degree in Computer & Electronics Engineering</p>
            <p className="univ">
              Thebes Academy Higher Institute of Computer & Electronics
              Engineering
            </p>
            <p className="interval">
              <i className="fal fa-calendar"></i> SEP 2016 - AUG 2021
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
