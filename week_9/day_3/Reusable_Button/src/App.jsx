import React from "react";
import BaseButton from "./components/BaseButton";

function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    
    <div style={{ padding: "20px" }}>
      <h1>Reusable Button Demo</h1>

      <BaseButton
        text="Click Me"
        color="green"
        action={handleClick}
      />
      

      <br /><br />

      <BaseButton
        text="Delete"
        color="red"
        action={() => console.log("Deleted")}
      />
      <div>
      <RobotArmStatus />
    </div>
    </div>
    
  );
}

export default App;