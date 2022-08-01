import React, { useState } from "react";

function Square({ coordinate, setHistory }) {
  const [isActive, setIsActive] = useState(false);
  const handleEvent = () => {
    setIsActive(!isActive);
    setHistory((state) => [...state, coordinate]);
  };
  return (
    <div
      className={`board_col ${isActive ? "active" : ""}`}
      onMouseEnter={handleEvent}
    ></div>
  );
}

export default Square;
