function BrewButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        marginTop: "20px",
        padding: "15px",
        width: "100%",
        fontSize: "16px",
        backgroundColor: "#6f4e37",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
      }}
    >
      Brew My Coffee 
    </button>
  );
}

export default BrewButton;