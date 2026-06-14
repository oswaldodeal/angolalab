type VerifiedProfileCardProps = {
  name: string;
  type: string;
  location: string;
  score: number;
  classification: string;
  lastVerified: string;
  status: "Verified" | "Unverified";

  observation: string;
  assessment: string;
  recommendation: string;
  confidence: "Low" | "Medium" | "High";
};

export default function VerifiedProfileCard({
  name,
  type,
  location,
  score,
  classification,
  lastVerified,
  status,
  observation,
  assessment,
  recommendation,
  confidence,
}: VerifiedProfileCardProps)

{
  const isVerified = status === "Verified";

  return (
    <section
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        padding: "1.25rem",
        background: "#ffffff",
      }}
    >
      <p
        style={{
          color: isVerified ? "#16a34a" : "#64748b",
          fontWeight: "bold",
          margin: 0,
        }}
      >
        {isVerified ? "✓ AngolaLab Verified Profile" : "Unverified Profile"}
      </p>

      <h2 style={{ color: "#0f172a", marginBottom: "0.5rem" }}>
        {name}
      </h2>

      <p style={{ color: "#64748b", marginTop: 0 }}>
        {type} • {location}
      </p>

      <div
        style={{
          marginTop: "1rem",
          padding: "1rem",
          borderRadius: "8px",
          background: "#f8fafc",
          border: "1px solid #e5e7eb",
        }}
      >
        <p style={{ color: "#64748b", margin: 0 }}>
          AngolaLab Quality Score
        </p>

        <h3
          style={{
            color: "#0f172a",
            fontSize: "2rem",
            margin: "0.25rem 0",
          }}
        >
          {score}/100
        </h3>

        <p style={{ color: "#2563eb", fontWeight: "bold", margin: 0 }}>
          {classification}
        </p>
      </div>

      <p
        style={{
          color: "#64748b",
          fontSize: "0.9rem",
          marginTop: "1rem",
        }}
      >
        Last verified: {lastVerified}
      </p>

<div
  style={{
    marginTop: "1rem",
    paddingTop: "1rem",
    borderTop: "1px solid #e5e7eb",
  }}
>
  <p>
    <strong>Observation:</strong> {observation}
  </p>

  <p>
    <strong>Assessment:</strong> {assessment}
  </p>

  <p>
    <strong>Recommendation:</strong> {recommendation}
  </p>

  <p>
    <strong>Confidence:</strong> {confidence}
  </p>
</div>


    </section>
  );
}