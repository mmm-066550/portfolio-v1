import React from "react";
import styles from "./project-view.module.sass";
import { HiOutlineExternalLink } from "react-icons/hi";
import { BiGitRepoForked } from "react-icons/bi";
import Image from "next/image";

export default function ProjectView({ project, slider }) {
  return (
    <div
      className={`${styles.project_view} py-4 py-lg-5 mb-lg-3 row g-0 ${
        !slider && project.index % 2 === 0 ? styles.invert : ""
      }`}
    >
      <span className="connect-line"></span>
      <div className="col-12 col-lg-6">
        <div data-aos="zoom-in-left" className={styles.project_info}>
          <p className={styles.project_number}>
            Project <span>#0{project.index}</span>
          </p>
          <p className={styles.project_name}>{project.title}</p>
          <div className={`my-4 d-lg-none ${styles.project_img}`}>
            <Image
              src={project.thubmnail}
              alt="project-thumbnail"
              layout="responsive"
              width={100}
              height={65}
              loading="eager"
              quality={100}
              objectFit="cover"
              objectPosition={"center"}
            />
          </div>
          <p className={styles.project_overview}>{project.overview}</p>
          <div className={`${styles.project_tools} d-flex`}>
            {project.tools.map((tool, i) => {
              return <span key={i}>{tool}</span>;
            })}
          </div>
          <div className={styles.project_links}>
            <a href={project.live_preview} target="_blank" rel="noreferrer">
              <HiOutlineExternalLink />
            </a>
            <a href={project.repo} target="_blank" rel="noreferrer">
              <BiGitRepoForked />
            </a>
          </div>
        </div>
      </div>
      <div className="col-6 d-none d-lg-flex">
        <div data-aos="zoom-in-right" className={styles.project_thumbnail}>
          <Image
            src={project.thubmnail}
            alt="project-thumbnail"
            layout="fill"
            loading="eager"
            quality={100}
            objectFit="cover"
            objectPosition={"center"}
          />
        </div>
      </div>
    </div>
  );
}
