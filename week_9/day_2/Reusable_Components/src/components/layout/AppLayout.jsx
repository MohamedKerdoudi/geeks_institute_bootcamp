import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";

export default function AppLayout({ children }) {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <TopNavbar />
        <div style={{ padding: "20px" }}>{children}</div>
      </div>
    </div>
  );
}