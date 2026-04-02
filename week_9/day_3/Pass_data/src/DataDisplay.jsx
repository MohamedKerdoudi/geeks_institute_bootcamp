import React from "react";

const DataDisplay = ({ label, value }) => {
  return (
    <div style={styles.card}>
      <h3 style={styles.label}>{label}</h3>
      <p style={styles.value}>{value}</p>
    </div>
  );
};

const styles = {
  card: {
    padding: "16px",
    borderRadius: "8px",
    backgroundColor: "#f5f5f5",
    marginBottom: "10px",
    width: "250px"
  },
  label: {
    margin: 0,
    fontSize: "14px",
    color: "#555"
  },
  value: {
    margin: "5px 0 0",
    fontSize: "18px",
    fontWeight: "bold"
  }
};

export default DataDisplay;