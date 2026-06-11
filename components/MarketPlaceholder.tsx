type MarketPlaceholderProps = {
  name: string;
  description: string;
};

export default function MarketPlaceholder({
  name,
  description,
}: MarketPlaceholderProps) {
  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        padding: "1.25rem",
        background: "#ffffff",
      }}
    >
      <h3 style={{ color: "#0f172a", marginTop: 0 }}>{name}</h3>

      <p style={{ color: "#475569", lineHeight: 1.7 }}>
        {description}
      </p>

      <p style={{ color: "#64748b", fontSize: "0.9rem" }}>
        Status: Future intelligence module
      </p>
    </div>
  );
}