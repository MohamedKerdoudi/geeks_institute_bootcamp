
import React from "react";

const DataDisplay = ({ label, value }) => {
  return (
    <div>
      <strong>{label}:</strong> {value}
    </div>
  );
};

export default DataDisplay;