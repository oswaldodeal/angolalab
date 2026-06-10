type TourismRecord = {
  id: number;
  province: string;
  visitors: number;
  revenue: number;
  season: string;
};

export default function TourismTable({ data }: { data: TourismRecord[] }) {
  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "20px",
      }}
    >
      <thead>
        <tr>
          <th
            style={{
              border: "1px solid #ddd",
              padding: "12px",
              background: "#f5f5f5",
              textAlign: "left",
            }}
          >
            Province
          </th>
          <th
            style={{
              border: "1px solid #ddd",
              padding: "12px",
              background: "#f5f5f5",
              textAlign: "left",
            }}
          >
            Visitors
          </th>
          <th
            style={{
              border: "1px solid #ddd",
              padding: "12px",
              background: "#f5f5f5",
              textAlign: "left",
            }}
          >
            Revenue
          </th>
          <th
            style={{
              border: "1px solid #ddd",
              padding: "12px",
              background: "#f5f5f5",
              textAlign: "left",
            }}
          >
            Season
          </th>
        </tr>
      </thead>

      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "12px",
              }}
            >
              {row.province}
            </td>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "12px",
              }}
            >
              {row.visitors.toLocaleString()}
            </td>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "12px",
              }}
            >
              {row.revenue.toLocaleString()} AOA
            </td>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "12px",
              }}
            >
              {row.season}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}