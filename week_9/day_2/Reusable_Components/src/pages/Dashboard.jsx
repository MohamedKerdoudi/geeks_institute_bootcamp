import AppLayout from "../components/layout/AppLayout";
import StatCard from "../components/dashboard/StatCard";
import DataTable from "../components/dashboard/DataTable";

export default function Dashboard() {
  const tableData = [
    { name: "Order #1", status: "Completed" },
    { name: "Order #2", status: "Pending" },
  ];

  return (
    <AppLayout>
      <h1>Dashboard</h1>


      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <StatCard title="Revenue" value="$5000" />
        <StatCard title="Users" value="1200" />
        <StatCard title="Orders" value="320" />
      </div>


      <DataTable data={tableData} />
    </AppLayout>
  );
}