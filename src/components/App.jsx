import React, { useLayoutEffect, useState } from "react";
// import SplashScreen from "./SplashScreen";
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
// import Portfolio from "./pages/Portfolio";
// import Contact from "./pages/Contact";
import ModeSettings from "./ModeSettings";

// STYLES
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "../assets/styles/fonts.sass";
import "../assets/styles/index.sass";

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 3000, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

export default function App() {
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
  const [loaded, setloaded] = useState(true);
  useLayoutEffect(() => {
    setTimeout(() => {
      setloaded(true);
    }, 3000);
  }, []);
  // if (!loaded) return <SplashScreen />;
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
        <GridTest />
        <main id="app-main" className="container">
          <div className="row g-0">
            <div className="offset-1 col-10">
              <Navbar />
              <Hero />
              <About />
              <Education />
              {/* <Portfolio /> */}
              {/* <Contact /> */}
            </div>
          </div>
        </main>
      </>
    );
}
