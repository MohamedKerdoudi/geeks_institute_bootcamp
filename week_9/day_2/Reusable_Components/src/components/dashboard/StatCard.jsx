import Card from "../ui/Card";

export default function StatCard({ title, value }) {
  return (
    <Card>
      <h4>{title}</h4>
      <h2>{value}</h2>
    </Card>
  );
}