// src/components/Dashboard.jsx
import React, { useState } from "react";

export default function Dashboard() {
  const [inventoryLevel, setInventoryLevel] = useState(10);
  const [machineStatus, setMachineStatus] = useState("Idle");

  const handleSimulateOrder = () => {
    if (inventoryLevel === 0) return;

    setInventoryLevel(prev => prev - 1);

    setMachineStatus("Brewing");
    setTimeout(() => {
      setMachineStatus("Delivering");

      setTimeout(() => setMachineStatus("Idle"), 2000);
    }, 3000);
  };

  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Machine Status: {machineStatus}</h2>
      <h3>Inventory Level: {inventoryLevel} cups</h3>

      {inventoryLevel > 0 ? (
        <button
          onClick={handleSimulateOrder}
          style={{ padding: "1rem 2rem", marginTop: "1rem", fontSize: "1rem" }}
        >
          Simulate Order
        </button>
      ) : (
        <p style={{ color: "red", fontWeight: "bold" }}>
          Out of Cups! Please Restock.
        </p>
      )}
    </main>
  );
}