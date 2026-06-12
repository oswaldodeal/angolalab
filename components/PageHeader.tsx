type PageHeaderProps = {
  category: string;
  title: string;
  description: string;
};

export default function PageHeader({
  category,
  title,
  description,
}: PageHeaderProps) {
  return (
    <section style={{ marginBottom: "2rem" }}>

      <p
        style={{
          color: "#2563eb",
          fontWeight: "bold",
          margin: 0,
        }}
      >
        {category}
      </p>

      <h1
        style={{
          color: "#0f172a",
          margin: "0.5rem 0",
        }}
      >
        {title}
      </h1>

      <p
        style={{
          color: "#64748b",
          maxWidth: "760px",
          lineHeight: 1.7,
          margin: 0,
        }}
      >
        {description}
      </p>
    </section>
  );
}