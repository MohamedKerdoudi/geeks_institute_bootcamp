
import React from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";

export default function MainLayout() {
  return (
    <div className="main-layout">
      <Sidebar />
      <Content />
    </div>
  );
}