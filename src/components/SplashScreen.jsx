import React from "react";
import "../assets/styles/splash-screen.sass";
import Glitch from "react-glitch-text";
import Dots from "./Dots";

export default function SplashScreen() {
  return (
    <div id="app-splash-screen">
      <Glitch fontSize="2.25rem">
        <Dots />
      </Glitch>
    </div>
  );
}
