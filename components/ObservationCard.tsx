export default function ObservationCard({
  topProvince,
  totalVisitors,
  provinceCount,
}: {
  topProvince: string;
  totalVisitors: number;
  provinceCount: number;
}) {
  return (
    <section
      style={{
        border: "1px solid #e5e7eb",
        borderLeft: "4px solid #2563eb",
        borderRadius: "8px",
        padding: "1.25rem",
        background: "#f8fafc",
        margin: "2rem 0",
      }}
    >
      <p
        style={{
          color: "#2563eb",
          fontWeight: "bold",
          marginTop: 0,
        }}
      >
        AngolaLab Observation
      </p>

      <h2 style={{ color: "#0f172a", marginTop: 0 }}>
        {topProvince} is currently the leading tourism province in this dataset.
      </h2>

      <p style={{ color: "#334155", lineHeight: 1.7 }}>
        The current dataset records {totalVisitors.toLocaleString()} visitors
        across {provinceCount} province{provinceCount === 1 ? "" : "s"}. This
        gives AngolaLab an early view of tourism activity, but the analysis will
        become stronger as more provinces and reporting periods are added.
      </p>

      <p style={{ color: "#334155", lineHeight: 1.7 }}>
        Next intelligence step: expand coverage across Benguela, Huíla, Namibe
        and other provinces to compare regional tourism performance.
      </p>
    </section>
  );
}