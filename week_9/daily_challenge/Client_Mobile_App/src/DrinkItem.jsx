function DrinkItem({ name, isSelected, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        padding: "10px",
        margin: "8px 0",
        borderRadius: "6px",
        cursor: "pointer",
        border: "2px solid",
        borderColor: isSelected ? "#007bff" : "#ccc",
        backgroundColor: isSelected ? "#e7f1ff" : "#fff",
      }}
    >
      {name}
    </div>
  );
}

export default DrinkItem;