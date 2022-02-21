import React from "react";
import "../assets/styles/social-list.sass";

export default function SocialList() {
  return (
    <div id="social-lists-container">
      <div className="container">
        <ul className="social-list left-list" data-aos="fade-right">
          <li className="social-list-item">
            <a
              href="https://github.com/mmm-066550"
              target={"_blank"}
              title="Github"
              className="social-link"
              rel="noreferrer"
            >
              <i className="fab fa-github-alt"></i>
            </a>
          </li>
          <li className="social-list-item">
            <a
              href="https://www.linkedin.com/in/mmm066550/"
              target={"_blank"}
              title="Linkedin"
              className="social-link"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li className="social-list-item">
            <a
              href="https://www.fb.com/MOUSTAPHAMAHMMOUD/"
              target={"_blank"}
              title="Facebook"
              className="social-link"
              rel="noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li className="social-list-item">
            <a
              href="https://wa.me/201099617776"
              target={"_blank"}
              title="Whatsapp"
              className="social-link"
              rel="noreferrer"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </li>
        </ul>
        <ul className="social-list right-list" data-aos="fade-left">
          <li className="social-list-item">
            <a
              href="mailto:mmm066550@gmail.com"
              target={"_blank"}
              title="Gmail"
              className="social-link"
              rel="noreferrer"
            >
              mmm066550@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
