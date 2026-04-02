import React from "react";
import HardwareStatusGrid from "./HardwareStatusGrid";
import OrderQueue from "./OrderQueue";

function DashboardLayout() {
  return (
    <main style={{ padding: "1rem", display: "flex", gap: "1rem", flex: 1, overflowY: "auto" }}>
      <HardwareStatusGrid />
      <OrderQueue />
    </main>
  );
}

export default DashboardLayout;