function BrewButton({ disabled, onClick }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        marginTop: "20px",
        padding: "15px",
        width: "100%",
        fontSize: "18px",
        borderRadius: "8px",
        border: "none",
        backgroundColor: disabled ? "#ccc" : "#28a745",
        color: "white",
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      Brew My Coffee 
    </button>
  );
}

export default BrewButton;