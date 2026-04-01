
import React from "react";

export default function SidebarItem({ icon, label }) {
  return (
    <div className="sidebar-item">
      <span style={{ marginRight: "0.8rem" }}>{icon}</span>
      <span>{label}</span>
    </div>
  );
}