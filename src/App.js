import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [data, setNumber] = useState(null);
  const [print, setPrint] = useState(false);

  function getNumber(val) {
    console.warn(val.target.value);
    setNumber(val.target.value);
    setPrint(false);
  }
  return (
    <div className="App">
      {print ? <h1> {data}</h1> : null}
      <input type="text" onChange={getNumber} />
      <button onClick={() => setPrint(true)}>Print Number</button>
    </div>
  );
}

export default App;
