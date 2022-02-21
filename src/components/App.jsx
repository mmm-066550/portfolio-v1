import React, { useLayoutEffect, useEffect, useState } from "react";
import SplashScreen from "./SplashScreen";
// import Dots from "./Dots";
import { reactLocalStorage } from "reactjs-localstorage";
import DetectDarkMode from "detect-dark-mode";
import Hero from "./Hero";
import Navbar from "./Navbar";
import SocialList from "./SocialList";
import "../assets/styles/app-main.sass";
import About from "./pages/About";
import Education from "./pages/Education";
import AOS from "aos";
import GridTest from "./GridTest";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import ModeSettings from "./ModeSettings";

// STYLES
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "../assets/styles/fonts.sass";
import "../assets/styles/index.sass";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
    window.addEventListener("load", AOS.refresh);
    document.getElementById("root").addEventListener("scroll", () => {
      AOS.refresh();
    });
  }, []);
  const isDarkMode = DetectDarkMode.isDark;
  const [mode, setmode] = useState(
    reactLocalStorage.get("mode")
      ? reactLocalStorage.get("mode")
      : isDarkMode
      ? "dark"
      : "light"
  );
  const [color, setcolor] = useState(reactLocalStorage.get("color") || "blue");
  useLayoutEffect(() => {
    document.body.classList.remove("dark");
    document.body.classList.remove("light");
    document.body.classList.add(mode);
  }, [mode]);
  useLayoutEffect(() => {
    document.body.classList.remove("red");
    document.body.classList.remove("green");
    document.body.classList.remove("blue");
    document.body.classList.add(color);
  }, [color]);
  const [loaded, setloaded] = useState(false);
  useLayoutEffect(() => {
    setTimeout(() => {
      setloaded(true);
    }, 3000);
  }, []);
  if (!loaded) return <SplashScreen />;
  if (loaded)
    return (
      <>
        <SocialList />
        <ModeSettings
          mode={mode}
          color={color}
          setmode={setmode}
          setcolor={setcolor}
        />
        {/* <GridTest /> */}
        <main id="app-main" className="container">
          <div className="row g-0">
            <div className="offset-1 col-10">
              <Navbar />
              <Hero />
              <About />
              <Education />
              <Portfolio />
              <Contact />
            </div>
          </div>
        </main>
      </>
    );
}
