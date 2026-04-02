import React from "react";

function Sidebar() {
  return (
    <aside style={{ width: "200px", backgroundColor: "#333", color: "#fff", padding: "1rem" }}>
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>Dashboard</li>
          <li>Orders</li>
          <li>Machines</li>
          <li>Settings</li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;