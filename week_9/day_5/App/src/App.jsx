import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DashboardLayout from "./components/DashboardLayout";

function App() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header />
        <DashboardLayout />
      </div>
    </div>
  );
}

export default App;