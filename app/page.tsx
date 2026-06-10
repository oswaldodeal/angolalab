import Link from "next/link";

export default function HomePage() {
  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Header */}
      <header
        style={{
          borderBottom: "1px solid #ddd",
          paddingBottom: "1rem",
          marginBottom: "2rem",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "2.5rem",
          }}
        >
          AngolaLab
        </h1>

        <p
          style={{
            color: "#666",
            marginTop: "0.5rem",
          }}
        >
          Economic Intelligence System
        </p>
      </header>

      {/* Hero Section */}
      <section
        style={{
          marginBottom: "3rem",
        }}
      >
        <h2>Understanding Angola Through Data & Intelligence</h2>

        <p
          style={{
            lineHeight: "1.8",
            maxWidth: "800px",
          }}
        >
          AngolaLab is an Economic Intelligence System designed to transform
          data into analysis, intelligence and decision support. Our mission is
          to improve understanding of Angola's economy, tourism, environment,
          finance and strategic development through structured analysis.
        </p>
      </section>

      {/* Intelligence Areas */}
      <section>
        <h2>Intelligence Areas</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          <Link
            href="/tourism"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              style={{
                border: "1px solid #ddd",
                padding: "1.5rem",
                borderRadius: "8px",
              }}
            >
              <h3>Tourism Intelligence</h3>
              <p>
                Visitor trends, tourism performance and regional analysis.
              </p>
            </div>
          </Link>

          <div
            style={{
              border: "1px solid #ddd",
              padding: "1.5rem",
              borderRadius: "8px",
            }}
          >
            <h3>Economic Intelligence</h3>
            <p>
              Macroeconomic indicators, inflation, growth and structural trends.
            </p>
          </div>

          <div
            style={{
              border: "1px solid #ddd",
              padding: "1.5rem",
              borderRadius: "8px",
            }}
          >
            <h3>Environmental Intelligence</h3>
            <p>
              Environmental monitoring, sustainability and resource analysis.
            </p>
          </div>

          <div
            style={{
              border: "1px solid #ddd",
              padding: "1.5rem",
              borderRadius: "8px",
            }}
          >
            <h3>Strategic Reports</h3>
            <p>
              Intelligence briefs, risk assessments and research publications.
            </p>
          </div>
        </div>
      </section><section
  style={{
    marginTop: "4rem",
    padding: "1.5rem",
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    background: "#f8fafc",
  }}
>
  <h2 style={{ color: "#0f172a" }}>Current Development Status</h2>

  <p style={{ color: "#475569" }}>
    AngolaLab is currently in early platform development.
  </p>

  <h3>Completed</h3>
  <ul style={{ color: "#475569", lineHeight: 1.8 }}>
    <li>Tourism Intelligence Dashboard</li>
    <li>SQLite local database connection</li>
    <li>Reusable layout components</li>
    <li>Systems Thinking platform structure</li>
  </ul>

  <h3>In Development</h3>
  <ul style={{ color: "#475569", lineHeight: 1.8 }}>
    <li>Economic Intelligence</li>
    <li>Environmental Intelligence</li>
    <li>Strategic Reports</li>
    <li>Cloud database integration for production</li>
  </ul>
</section>


      {/* Footer */}
      <footer
        style={{
          marginTop: "4rem",
          borderTop: "1px solid #ddd",
          paddingTop: "1rem",
          color: "#666",
          fontSize: "0.9rem",
        }}
      >
        AngolaLab © 2026 — Economic Intelligence System



      </footer>
    </main>
  );
}