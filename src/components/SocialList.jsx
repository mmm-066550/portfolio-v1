import React, { useLayoutEffect, useState } from "react";
import "../assets/styles/social-list.sass";
import _ from "lodash";

export default function SocialList() {
  const [data, setData] = useState({});
  useLayoutEffect(() => {
    fetch("../../data/links.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  if (!_.isElement(data))
    return (
      <div id="social-lists-container">
        <div className="container">
          <ul className="social-list left-list" data-aos="fade-right">
            <li className="social-list-item">
              <a
                href={data.github}
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
                href={data.linkedin}
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
                href={data.facebook}
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
                href={data.whatsapp}
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
                href={`mailto:${data.email}`}
                target={"_blank"}
                title="Gmail"
                className="social-link"
                rel="noreferrer"
              >
                {data.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  return <></>;
}
