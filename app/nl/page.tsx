import Link from "next/link";

export default function DutchPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "3rem 1.5rem",
        background: "#ffffff",
        color: "#111111",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <p
          style={{
            color: "#b08d2f",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
          }}
        >
          AngolaLab Nederland
        </p>

        <h1>Nederlandse versie in ontwikkeling</h1>

        <p style={{ color: "#475569", lineHeight: 1.8 }}>
          De Nederlandse versie van AngolaLab wordt stapsgewijs ontwikkeld met
          dezelfde methodologie, standaarden en institutionele identiteit.
        </p>

        <Link href="/development">Terug naar het Development Dashboard</Link>
      </div>
    </main>
  );
}