
import { useState } from "react";

export default function SessionBrewCounter() {

  const [brewCount, setBrewCount] = useState(0);

  const handleBrewComplete = () => {
    setBrewCount(brewCount + 1);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial", textAlign: "center" }}>
      <h2>Session Brew Counter</h2>
      <p>Coffees brewed since dashboard opened: <strong>{brewCount}</strong></p>
      <button onClick={handleBrewComplete} style={{ padding: "10px 20px", cursor: "pointer" }}>
        Brew Coffee
      </button>
    </div>
  );
}