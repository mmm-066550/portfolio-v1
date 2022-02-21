import React, { useRef } from "react";
import "../assets/styles/grid_test.sass";

export default function GridTest() {
  const ref = useRef();
  return (
    <>
      <input
        type="checkbox"
        id="grid-btn"
        onChange={() => {
          ref.current.classList.toggle("d-none");
        }}
      />
      <div id="grid" className="d-none" ref={ref}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="content"></div>
            </div>
            <div className="col">
              <div className="content"></div>
            </div>
            <div className="col">
              <div className="content"></div>
            </div>
            <div className="col">
              <div className="content"></div>
            </div>
            <div className="col">
              <div className="content"></div>
            </div>
            <div className="col">
              <div className="content"></div>
            </div>
            <div className="col">
              <div className="content"></div>
            </div>
            <div className="col">
              <div className="content"></div>
            </div>
            <div className="col">
              <div className="content"></div>
            </div>
            <div className="col">
              <div className="content"></div>
            </div>
            <div className="col">
              <div className="content"></div>
            </div>
            <div className="col">
              <div className="content"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
