export default function Button({ label, onClick }) {
  return (
    <button onClick={onClick} style={{ padding: "10px 15px", cursor: "pointer" }}>
      {label}
    </button>
  );
}