import React, { useEffect, useState } from "react";

export default function Dots() {
  const [length, setLength] = useState(1);
  const [dots, setDots] = useState("");
  useEffect(() => {
    setTimeout(() => {
      if (length < 3) {
        setLength(length + 1);
      } else {
        setLength(0);
      }
    }, 300);
  }, [length]);

  useEffect(() => {
    const arr = [".", ".", "."];
    arr.length = length;
    setDots(arr.join(""));
  }, [length]);

  return (
    <div className="d-flex">
      <div>LOADING</div>
      <div>{dots}</div>
    </div>
  );
}
