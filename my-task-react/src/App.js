import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import History from "./components/History";
import Board from "./components/Board";

function App() {
  const [options, setOptions] = useState([]);
  const [history, setHistory] = useState([]);
  const oneTimeMount = useRef(true);

  const getOption = async () => {
    const header = {
      "Access-Control-Allow-Origin": "no-cors",
    };
    await fetch("http://demo7919674.mockable.io", { header })
      .then((res) => res.json())
      .then((res) => setOptions(res))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (oneTimeMount.current) {
      oneTimeMount.current = false;
      getOption();
    }
  }, []);

  return (
    <div className="App">
      <Board options={options} setHistory={setHistory} />
      <History history={history} />
    </div>
  );
}

export default App;
