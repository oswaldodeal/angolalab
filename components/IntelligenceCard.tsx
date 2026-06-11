type IntelligenceCardProps = {
  title: string;
  system: string;
  observation: string;
  assessment: string;
  recommendation: string;
  confidence: "Low" | "Medium" | "High";
};

export default function IntelligenceCard({
  title,
  system,
  observation,
  assessment,
  recommendation,
  confidence,
}: IntelligenceCardProps) {
  return (
    <section
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        padding: "1.25rem",
        background: "#ffffff",
      }}
    >
      <p style={{ color: "#2563eb", fontWeight: "bold", margin: 0 }}>
        {system}
      </p>

      <h2 style={{ color: "#0f172a" }}>{title}</h2>

      <p><strong>Observation:</strong> {observation}</p>
      <p><strong>Assessment:</strong> {assessment}</p>
      <p><strong>Recommendation:</strong> {recommendation}</p>

      <p style={{ color: "#64748b" }}>
        Confidence: <strong>{confidence}</strong>
      </p>
    </section>
  );
}