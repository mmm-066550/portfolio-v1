import React from "react";
import "../assets/styles/thebes-logo.sass";
export default function ThebesLogo() {
  return (
    <div id="thebes-logo">
      <div className="outer-circle">
        <div className="inner-circle">
          <div className="rectangle">
            <div className="triangle"></div>
            <div className="square">
              <div className="t"></div>
              <div className="shape">
                <div className="left"></div>
                <div className="right"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
