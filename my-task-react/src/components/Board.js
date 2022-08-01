import React, { useState } from "react";
import Square from "./Square";

function Board({ options, setHistory }) {
  const [count, setCount] = useState("");
  const [board, setBoard] = useState(null);

  const boardGenerate = () => {
    if (count) {
      return setBoard(
        Array(count)
          .fill(null)
          .map((el, rowIndex) => (
            <div key={rowIndex} className="board_row">
              {Array(count)
                .fill(null)
                .map((el, colIndex) => (
                  <Square
                    key={colIndex}
                    coordinate={{ row: rowIndex + 1, col: colIndex + 1 }}
                    setHistory={setHistory}
                  />
                ))}
            </div>
          ))
      );
    }
    setBoard(null);
  };
  return (
    <div className="board_container">
      <div className="board_control">
        <select
          className="custom_select"
          value={count}
          onChange={(e) => setCount(+e.target.value)}
        >
          <option value="">Pick mode</option>
          {options.length > 0 &&
            options.map((option, index) => (
              <option key={index} value={option.field}>
                {option.name}
              </option>
            ))}
        </select>
        <button className="button_blue" onClick={boardGenerate}>
          Start
        </button>
      </div>
      <div className="board_table">{board && board}</div>
    </div>
  );
}
export default Board;
