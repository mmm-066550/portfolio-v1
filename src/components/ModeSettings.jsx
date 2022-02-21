import React, { useState } from "react";
import "../assets/styles/mode-settings.sass";
import { reactLocalStorage } from "reactjs-localstorage";

export default function ModeSettings({ mode, setmode, setcolor }) {
  const [open, setopen] = useState(false);
  const colors = ["blue", "red", "green"];
  return (
    <div id="mode-settings-area">
      <div className="container">
        <div data-aos="fade-right" className="color-select">
          <div className={`colors ${!open ? "d-none" : ""} `}>
            {colors.map((color) => {
              return (
                <div
                  onClick={() => {
                    setcolor(color);
                    setopen(false);
                    reactLocalStorage.set("color", color);
                  }}
                  key={color}
                  className={`color ${color}`}
                ></div>
              );
            })}
          </div>
          <button onClick={() => setopen(!open)} className="color-change-btn">
            <i className="fal fa-cog"></i>
          </button>
        </div>
        <div data-aos="fade-left" className="mode">
          <button
            onClick={() => {
              if (mode === "dark") {
                setmode("light");
                reactLocalStorage.set("mode", "light");
              } else {
                setmode("dark");
                reactLocalStorage.set("mode", "dark");
              }
            }}
            className="mode-change-btn"
            title={mode === "dark" ? "Light Mode" : "Dark Mode"}
          >
            {mode === "dark" ? (
              <i className="fas fa-sun"></i>
            ) : (
              <i className="fas fa-moon"></i>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
