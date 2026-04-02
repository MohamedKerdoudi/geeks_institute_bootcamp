import React from "react";
import Card from "./components/Card";
import StatusRow from "./components/StatusRow";

function App() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "#f5f5f5"
    }}>
      <Card title="Hardware Health">
        <StatusRow deviceName="Dobot Arm" status="Online" indicatorColor="green" />
        <StatusRow deviceName="Tuya Fingerbot" status="Asleep" indicatorColor="yellow" />
        <StatusRow deviceName="Coffee Machine" status="Offline" indicatorColor="red" />
      </Card>
    </div>
  );
}

export default App;