export default function TopNavbar() {
  return (
    <div
      style={{
        height: "60px",
        background: "#f5f5f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
      }}
    >
      <input placeholder="Search..." />
      <div> Admin</div>
    </div>
  );
}