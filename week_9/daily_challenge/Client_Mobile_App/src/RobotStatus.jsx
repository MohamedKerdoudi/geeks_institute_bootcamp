function RobotStatus({ status }) {
  const isReady = status === "Ready";

  return (
    <div
      style={{
        margin: "15px 0",
        padding: "10px",
        borderRadius: "8px",
        backgroundColor: isReady ? "#d4edda" : "#f8d7da",
        color: isReady ? "#155724" : "#721c24",
        fontWeight: "bold",
      }}
    >
      Robot Status: {status}
    </div>
  );
}

export default RobotStatus;