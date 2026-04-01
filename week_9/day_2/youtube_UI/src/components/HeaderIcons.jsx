
import React from "react";

export default function HeaderIcons() {
  return (
    <div className="header-icons">

      <button
        className="btn btn-sm"
        style={{ background: "transparent", color: "#e5e5e5" }}
        title="Créer"
      >
        ➕
      </button>

      <button
        className="btn btn-sm"
        style={{ background: "transparent", color: "#e5e5e5" }}
        title="Notifications"
      >
        🔔
      </button>


      <div
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          background: "#555",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "0.9rem"
        }}
        title="My profile"
      >
        U
      </div>
    </div>
  );
}