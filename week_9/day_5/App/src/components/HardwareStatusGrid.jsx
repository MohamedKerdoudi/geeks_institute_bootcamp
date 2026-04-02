import React from "react";

function HardwareStatusGrid() {
  return (
    <section style={{ flex: 2, backgroundColor: "#e8f0fe", padding: "1rem", borderRadius: "8px" }}>
      <h2>Hardware Status</h2>
      <ul>
        <li>Espresso Machine: Online</li>
        <li>Grinder: Online</li>
        <li>Milk Steamer: Offline</li>
      </ul>
    </section>
  );
}

export default HardwareStatusGrid;