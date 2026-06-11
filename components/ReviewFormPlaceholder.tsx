export default function ReviewFormPlaceholder() {
  return (
    <section
      style={{
        border: "1px dashed #94a3b8",
        borderRadius: "8px",
        padding: "1.25rem",
        background: "#f8fafc",
        margin: "2rem 0",
      }}
    >
      <h2 style={{ color: "#0f172a" }}>User Review Structure</h2>

      <p style={{ color: "#475569", lineHeight: 1.7 }}>
        Future users will be able to review hotels, restaurants, gyms, B&Bs
        and tourism services using AngolaLab’s 0–100 quality scorecard.
      </p>

      <ul style={{ color: "#475569", lineHeight: 1.8 }}>
        <li>Cleanliness score</li>
        <li>Food score</li>
        <li>Location score</li>
        <li>Hygiene score</li>
        <li>Service score</li>
        <li>Safety score</li>
        <li>Value for money score</li>
        <li>Written comment</li>
        <li>Admin approval before publication</li>
      </ul>
    </section>
  );
}