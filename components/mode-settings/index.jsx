import React, { useState, useEffect } from "react";
import styles from "./mode-settings.module.sass";
import { ImCog } from "react-icons/im";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useTheme } from "next-themes";

export default function ModeSettings() {
  const [open, setopen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [color, setColor] = useState("blue");

  useEffect(() => {
    document.body.setAttribute("data-color", color);
  }, [color]);

  const colors = ["blue", "red", "green"];
  return (
    <div id="mode-settings-area" className={styles.mode_settings_area}>
      <div className="container">
        <div className={styles.container}>
          <div data-aos="fade-right" className={styles.color_select}>
            <div className={`${styles.colors} ${!open ? "d-none" : ""} `}>
              {colors.map((color) => {
                return (
                  <div
                    onClick={() => {
                      setColor(color);
                      setopen(false);
                    }}
                    key={color}
                    className={`${styles.color} ${color}`}
                  ></div>
                );
              })}
            </div>
            <button
              onClick={() => {
                setopen(!open);
              }}
              className={styles.color_change_btn}
            >
              <ImCog />
            </button>
          </div>
          <div data-aos="fade-left" className={styles.mode}>
            {theme && (
              <button
                onClick={() => {
                  if (theme === "dark") {
                    setTheme("light");
                  } else {
                    setTheme("dark");
                  }
                }}
                className={styles.mode_change_btn}
                title={theme === "dark" ? "Light Mode" : "Dark Mode"}
              >
                {theme && theme === "dark" ? (
                  <BsFillSunFill />
                ) : (
                  <BsMoonStarsFill />
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
