import Card from "../ui/Card";

export default function DataTable({ data }) {
  return (
    <Card>
      <table width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}