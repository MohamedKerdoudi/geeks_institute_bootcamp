function RobotStatus({ status }) {
  const isBusy = status === "Busy";

  return (
    <div style={{ margin: "10px 0" }}>
      <strong>Robot Status: </strong>
      <span style={{ color: isBusy ? "red" : "green" }}>
        {status}
      </span>
    </div>
  );
}

export default RobotStatus;