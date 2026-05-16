import "./App.css";
import { useState } from "react";

function App() {
  const [count, setcount] = useState(0);
  const [light, setlight] = useState("OFF");
  return (
    <>
      <div>
        <h1>{light}</h1>
        <button
          onClick={() => {
            setlight(light === "ON" ? "OFF" : "ON");
          }}
        >
          {light === "ON" ? "끄기" : "켜기"}
        </button>
      </div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        +
      </button>
    </>
  );
}

export default App;
