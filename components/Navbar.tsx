"use client";

import { useState } from "react";
import Link from "next/link";

import {
  FlagUK,
  FlagPortugal,
  FlagNetherlands,
} from "@/components/flags";

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
          width: "100%",
          maxWidth: "1185px",
          margin: "0 auto",
          padding: "0.6rem 4rem",
          boxSizing: "border-box",
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
            onClick={() =>
              setLanguageOpen((current) => !current)
            }
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
                <FlagUK />
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
                <FlagPortugal />
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
                <FlagNetherlands />
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
  color: "#b08d2f",
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
  left: -90,
  zIndex: 1100,
  minWidth: "200px",
  padding: "0.75rem 1rem",
  background: "transparent",
  border: "none",
  borderRadius: "0 0 10px 10px",
  boxShadow: "none",
} as const;

const languageOptionStyle = {
  display: "flex",
  alignItems: "center",
  gap: "0.65rem",
  padding: "0.7rem 0.8rem",
  color: "#b08d2f",
  background: "transparent",
  borderRadius: "7px",
  fontSize: "0.9rem",
  fontWeight: 600,
  textDecoration: "none",
} as const;