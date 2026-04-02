function DrinkItem({ name, isSelected, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        padding: "10px",
        margin: "5px",
        cursor: "pointer",
        border: "1px solid #ccc",
        borderRadius: "5px",
        backgroundColor: isSelected ? "#d1e7dd" : "white",
      }}
    >
      {name}
    </div>
  );
}

export default DrinkItem;