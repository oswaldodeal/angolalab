type FrameworkCardProps = {
  title: string;
  description: string;
};

export default function FrameworkCard({
  title,
  description,
}: FrameworkCardProps) {
  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        padding: "1.25rem",
        background: "#ffffff",
      }}
    >
      <h3 style={{ color: "#0f172a", marginTop: 0 }}>
        {title}
      </h3>

      <p style={{ color: "#475569", lineHeight: 1.7 }}>
        {description}
      </p>
    </div>
  );
}