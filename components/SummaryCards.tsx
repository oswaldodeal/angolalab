export default function SummaryCards({
  totalVisitors,
  totalRevenue,
  topProvince,
  provinceCount,
}: {
  totalVisitors: number;
  totalRevenue: number;
  topProvince: string;
  provinceCount: number;
}) {
  const cards = [
    {
      label: "Total Visitors",
      value: totalVisitors.toLocaleString(),
    },
    {
      label: "Total Revenue",
      value: `${totalRevenue.toLocaleString()} AOA`,
    },
    {
      label: "Top Province",
      value: topProvince,
    },
    {
      label: "Province Coverage",
      value: `${provinceCount} province${provinceCount === 1 ? "" : "s"}`,
    },
  ];

  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "1rem",
        margin: "2rem 0",
      }}
    >
      {cards.map((card) => (
        <div
          key={card.label}
          style={{
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            padding: "1.25rem",
            background: "#ffffff",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "#64748b",
              fontSize: "0.9rem",
            }}
          >
            {card.label}
          </p>

          <h2
            style={{
              margin: "0.5rem 0 0",
              color: "#0f172a",
              fontSize: "1.5rem",
            }}
          >
            {card.value}
          </h2>
        </div>
      ))}
    </section>
  );
}