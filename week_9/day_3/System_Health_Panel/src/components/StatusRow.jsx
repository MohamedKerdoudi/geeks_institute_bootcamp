import React from "react";

const StatusRow = ({ deviceName, status, indicatorColor }) => {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      marginBottom: "8px",
    }}>
      <div style={{
        width: "12px",
        height: "12px",
        borderRadius: "50%",
        backgroundColor: indicatorColor,
        marginRight: "8px",
      }} />
      <div>
        <strong>{deviceName}</strong>: {status}
      </div>
    </div>
  );
};

export default StatusRow;