import React from "react";

function History({ history }) {
  return (
    <div className="history_container">
      <h1>Hover squares</h1>
      {history.length > 0 &&
        history.map((coordinate, index) => (
          <div
            className="history_block"
            key={index}
          >{`row ${coordinate.row} col ${coordinate.col}`}</div>
        ))}
    </div>
  );
}
export default History;
