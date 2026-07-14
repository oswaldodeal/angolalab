import Link from "next/link";

export default function PortuguesePage() {
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
          AngolaLab Português
        </p>

        <h1>Versão portuguesa em desenvolvimento</h1>

        <p style={{ color: "#475569", lineHeight: 1.8 }}>
          A versão portuguesa da AngolaLab será desenvolvida gradualmente,
          mantendo a mesma metodologia, os mesmos padrões e a mesma identidade
          institucional.
        </p>

        <Link href="/development">Voltar ao Development Dashboard</Link>
      </div>
    </main>
  );
}