import React from "react";
import DataDisplay from "./DataDisplay";

const RobotArmStatus = () => {
  const temperature = "45°C";
  const task = "Moving to cup";

  return (
    <div>
      <h2>Robot Arm Status</h2>

      <DataDisplay
        label="Temperature"
        value={temperature}
      />

      <DataDisplay
        label="Current Task"
        value={task}
      />
    </div>
  );
};

export default RobotArmStatus;