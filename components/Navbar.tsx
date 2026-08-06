"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [languageOpen, setLanguageOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "#111111",
        borderBottom: "3px solid #b08d2f",
      }}
    >
      <nav
        aria-label="Main navigation"
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          gap: "1.25rem",
          maxWidth: "1185px",
          margin: "0 auto",
          padding: "0.6rem 1rem",
        }}
      >
        <Link
          href="/"
          style={{
            ...linkStyle,
            marginRight: "0.75rem",
            fontSize: "1.3rem",
            fontWeight: 800,
          }}
        >
          AngolaLab
        </Link>

        <Link href="/" style={linkStyle}>
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

        <div
          style={{
            position: "relative",
            marginLeft: "auto",
          }}
        >
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={languageOpen}
            aria-label="Select language"
            onClick={() => setLanguageOpen((current) => !current)}
            style={languageButtonStyle}
          >
            <span aria-hidden="true">🌐</span>
            <span>EN</span>
            <span aria-hidden="true">
              {languageOpen ? "▲" : "▼"}
            </span>
          </button>

          {languageOpen && (
            <div
              role="menu"
              aria-label="Language options"
              style={languageMenuStyle}
            >
              <Link
                href="/"
                role="menuitem"
                onClick={() => setLanguageOpen(false)}
                style={languageOptionStyle}
              >
                <span aria-hidden="true">✓</span>
                <span>English</span>
              </Link>

              <Link
                href="/pt"
                role="menuitem"
                onClick={() => setLanguageOpen(false)}
                style={languageOptionStyle}
              >
                <span
                  aria-hidden="true"
                  style={{ width: "1rem" }}
                />
                <span>Português</span>
              </Link>

              <Link
                href="/nl"
                role="menuitem"
                onClick={() => setLanguageOpen(false)}
                style={languageOptionStyle}
              >
                <span
                  aria-hidden="true"
                  style={{ width: "1rem" }}
                />
                <span>Nederlands</span>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

const linkStyle = {
  color: "#ffffff",
  fontSize: "0.9rem",
  fontWeight: 500,
  textDecoration: "none",
  whiteSpace: "nowrap",
} as const;

const languageButtonStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.4rem",
  padding: "0.45rem 0.6rem",
  color: "#ffffff",
  background: "transparent",
  border: "none",
  borderRadius: "7px",
  fontFamily: "inherit",
  fontSize: "0.9rem",
  fontWeight: 700,
  cursor: "pointer",
} as const;

const languageMenuStyle = {
  position: "absolute",
  top: "calc(100% + 14px)",
  left: -67,
  zIndex: 1100,
  minWidth: "100px",
  padding: "0.55rem",
  background: "#111111",
  border: "none",
  borderRadius: "0 0 10px 10px",
  boxShadow: "none",
} as const;

const languageOptionStyle = {
  display: "flex",
  alignItems: "center",
  gap: "0.65rem",
  padding: "0.7rem 0.8rem",
  color: "#f3f4f6",
  background: "transparent",
  borderRadius: "7px",
  fontSize: "0.9rem",
  fontWeight: 600,
  textDecoration: "none",
} as const;