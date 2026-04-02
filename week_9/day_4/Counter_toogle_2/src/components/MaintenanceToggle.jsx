import { useState } from "react";
import "./MaintenanceToggle.css"; 
export default function MaintenanceToggle() {
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  const handleToggle = () => {
    setMaintenanceMode(!maintenanceMode);
  };

  return (
    <div
      className="container"
      style={{ backgroundColor: maintenanceMode ? "orange" : "white" }}
    >
      <h1>Robotic Arm Control</h1>
      <div className="toggle-container">
        <label className="switch">
          <input type="checkbox" checked={maintenanceMode} onChange={handleToggle} />
          <span className="slider"></span>
        </label>
        <span className="status-text">
          Maintenance Mode: {maintenanceMode ? "ON" : "OFF"}
        </span>
      </div>

      <button disabled={maintenanceMode} className="order-button">
        Place New Order
      </button>
      {maintenanceMode && <p className="warning">New orders are disabled in Maintenance Mode.</p>}
    </div>
  );
}