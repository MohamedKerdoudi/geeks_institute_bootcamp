export default function Sidebar() {
  const menu = ["Dashboard", "Analytics", "Settings"];

  return (
    <div style={{ width: "220px", background: "#111", color: "#fff", padding: "20px" }}>
      <h2>MyApp</h2>
      {menu.map((item) => (
        <div key={item} style={{ margin: "15px 0", cursor: "pointer" }}>
          {item}
        </div>
      ))}
    </div>
  );
}