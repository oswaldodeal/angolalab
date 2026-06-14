import Link from "next/link";

export default function Navbar() {
  return (
    <header
      style={{
        borderBottom: "1px solid #e5e7eb",
        background: "#ffffff",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "1rem",
          boxSizing: "border-box",
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "#0f172a",
            fontWeight: "bold",
            fontSize: "1.4rem",
          }}
        >
          AngolaLab
        </Link>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.8rem",
            alignItems: "center",
          }}
        >
          <Link href="/" style={linkStyle}>Home</Link>
          <Link href="/tourism" style={linkStyle}>Tourism</Link>
          <Link href="/trading" style={linkStyle}>Trading</Link>
          <Link href="/framework" style={linkStyle}>Framework</Link>
          <Link href="/about" style={linkStyle}>About</Link>
        </div>
      </nav>
    </header>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "#334155",
  fontSize: "0.95rem",
};