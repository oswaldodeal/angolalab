"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [languageOpen, setLanguageOpen] = useState(false);

  return (
    <header
      style={{
        borderBottom: "3px solid #b08d2f",
        background: "#111111",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <nav
  style={{
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0.6rem 1rem",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  }}
>
  <Link
    href="/"
    style={{
      textDecoration: "none",
      color: "#ffffff",
      fontWeight: "bold",
      fontSize: "1.3rem",
      whiteSpace: "nowrap",
    }}
  >
    AngolaLab
  </Link>

  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "0.65rem",
      marginLeft: "2rem",
      flexWrap: "wrap",
    }}
  >
    <Link href="/home" style={linkStyle}>
      Home
    </Link>

    <Link href="/development" style={linkStyle}>
      Development
    </Link>

    <Link href="/journal" style={linkStyle}>
      Journal
    </Link>

    <Link href="/framework" style={linkStyle}>
      Framework
    </Link>

    <Link href="/about" style={linkStyle}>
      About
    </Link>
  </div>

  <div
    style={{
      position: "relative",
      marginLeft: "auto",
    }}
  >
    <button
      type="button"
      onClick={() => setLanguageOpen((open) => !open)}
      aria-expanded={languageOpen}
      aria-haspopup="menu"
      aria-label="Select language"
      style={{
        background: "transparent",
        border: "none",
        color: "#ffffff",
        cursor: "pointer",
        font: "inherit",
        fontSize: "0.9rem",
        fontWeight: 600,
        padding: "0.4rem 0",
        whiteSpace: "nowrap",
      }}
    >
      🌐 EN {languageOpen ? "▲" : "▼"}
    </button>

    {languageOpen && (
      <div
        role="menu"
        style={{
          position: "absolute",
          top: "calc(100% + 0.5rem)",
          right: 0,
          minWidth: "180px",
          padding: "0.65rem",
          background: "#ffffff",
          border: "1px solid #e5e7eb",
          borderRadius: "10px",
          boxShadow: "0 12px 30px rgba(0, 0, 0, 0.12)",
          zIndex: 1100,
        }}
      >
        <Link
          href="/home"
          onClick={() => setLanguageOpen(false)}
          style={languageOptionStyle}
        >
          <span>✓</span>
          <span>🇬🇧 English</span>
        </Link>

        <Link
          href="/pt"
          onClick={() => setLanguageOpen(false)}
          style={languageOptionStyle}
        >
          <span style={{ width: "1rem" }} />
          <span>🇵🇹 Português</span>
        </Link>

        <Link
          href="/nl"
          onClick={() => setLanguageOpen(false)}
          style={languageOptionStyle}
        >
          <span style={{ width: "1rem" }} />
          <span>🇳🇱 Nederlands</span>
        </Link>
      </div>
    )}
  </div>
</nav>
    </header>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "#ffffff",
  fontSize: "0.9rem",
  fontWeight: 500,
  whiteSpace: "nowrap",
};

const languageOptionStyle = {
  display: "flex",
  alignItems: "center",
  gap: "0.65rem",
  padding: "0.7rem 0.8rem",
  borderRadius: "7px",
  color: "#111111",
  textDecoration: "none",
  fontSize: "0.9rem",
  fontWeight: 600,
};