import Head from "next/head";
import styles from "./index.module.sass";
import { useEffect, useState } from "react";
import AOS from "aos";
import getAllData from "../utils/fetchAllData";
import { useTheme } from "next-themes";
import Script from "next/script";

// COMPONENT
import Navbar from "../components/navbar";
import SocialLists from "../components/social-lists";
import Hero from "../components/hero";
import About from "../components/about";
import Education from "../components/education";
import Portfolio from "../components/portfolio";
import ModeSettings from "../components/mode-settings";
import Contact from "../components/contact";

export default function App(props) {
  const [slider, setSlider] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    typeof window !== "undefined" &&
      new kursor({
        type: 4,
        color: "#fff",
        removeDefaultCursor: true,
      });
  }, []);

  useEffect(() => {
    AOS.init({ duration: 3000 });
    window.addEventListener("load", AOS.refresh);
    window.addEventListener("scroll", () => {
      AOS.refresh();
    });
  }, []);

  return (
    <>
      {/* Website Head Paet And Meta Tags Container */}
      <Head>
        <title>Moustapha&#39;s Portfolio • mmm066550</title>
        <meta
          name="theme-color"
          content={theme === "dark" ? "#111119" : "#fff"}
        ></meta>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="mmm066550 • I'm Moustapha Mahmoud, A Passionate Junior FullStack (MERN) Developer. Interested in ReactJs, NextJs, NodeJs, PostgresSQL and MongoDB, and this is my portfolio • mmm066550"
        />
        <meta
          name="keyword"
          content="moustapha.me, moustapha, mahmoud, mmm066550, MERN, fullstack, nextjs, reactjs, nodejs, expressjs, mongodb, portfolio, javascript, developer"
        ></meta>
        <meta
          property="og:title"
          content="Moustapha Mahmoud | MERN Stack Developer • NextJs | ReactJs | Typescript | NodeJs | ExpressJs | MongoDB | PostgresSQL"
        />
        <meta
          property="og:description"
          content="JavaScript, NextJs, NodeJs, ExpressJs, MongoDB"
        />
        <meta property="og:image" content="/me.jpg" />
        <meta property="og:url" content="https://moustapha.me" />
        <meta property="og:type" content="website" />
      </Head>
      <Script
        src="https://unpkg.com/kursor"
        strategy="beforeInteractive"
      ></Script>
      {/* Actual Page Components Wrapper Area */}
      <SocialLists data={props.links} />
      <ModeSettings />
      <main id="app-main" className={styles.container}>
        <div className="row g-0">
          <div className="offset-1 col-10">
            <Navbar data={props.sections} />
            <Hero data={props.info} />
            <About data={props.about} />
            <Education data={props.education} />
            <Portfolio
              data={props.projects}
              slider={slider}
              setSlider={setSlider}
            />
            <Contact data={props.links} />
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const data = getAllData();
  return {
    props: data,
  };
}
