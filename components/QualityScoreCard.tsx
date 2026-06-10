type QualityScoreCardProps = {
  name: string;
  type: string;
  cleanliness: number;
  food?: number;
  location: number;
  hygiene: number;
  service?: number;
  safety?: number;
  valueForMoney?: number;
};

export default function QualityScoreCard({
  name,
  type,
  cleanliness,
  food,
  location,
  hygiene,
  service,
  safety,
  valueForMoney,
}: QualityScoreCardProps) {
  const scores = [
    cleanliness,
    food,
    location,
    hygiene,
    service,
    safety,
    valueForMoney,
  ].filter((score): score is number => typeof score === "number");

  const overallScore = Math.round(
    scores.reduce((sum, score) => sum + score, 0) / scores.length
  );

  const classification =
    overallScore >= 90
      ? "Excellent"
      : overallScore >= 80
      ? "Very Good"
      : overallScore >= 70
      ? "Good"
      : overallScore >= 60
      ? "Acceptable"
      : "Needs Improvement";

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
        {type}
      </p>

      <h2 style={{ color: "#0f172a", marginTop: "0.5rem" }}>{name}</h2>

      <div style={{ margin: "1rem 0" }}>
        <h3 style={{ fontSize: "2rem", margin: 0 }}>
          {overallScore}/100
        </h3>
        <p style={{ color: "#64748b", margin: 0 }}>{classification}</p>
      </div>

      <ScoreRow label="Cleanliness" score={cleanliness} />
      {food !== undefined && <ScoreRow label="Food" score={food} />}
      <ScoreRow label="Location" score={location} />
      <ScoreRow label="Hygiene" score={hygiene} />
      {service !== undefined && <ScoreRow label="Service" score={service} />}
      {safety !== undefined && <ScoreRow label="Safety" score={safety} />}
      {valueForMoney !== undefined && (
        <ScoreRow label="Value for Money" score={valueForMoney} />
      )}
    </section>
  );
}

function ScoreRow({ label, score }: { label: string; score: number }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        borderTop: "1px solid #e5e7eb",
        padding: "0.6rem 0",
        color: "#334155",
      }}
    >
      <span>{label}</span>
      <strong>{score}/100</strong>
    </div>
  );
}