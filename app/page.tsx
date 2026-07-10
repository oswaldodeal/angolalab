import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageContainer from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";

import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/development");
}

{/*export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <PageContainer>
          <PageHeader
            category="AngolaLab"
            title="Systems Thinking & Intelligence Platform"
            description="AngolaLab transforms data, observations and research into structured intelligence for tourism, markets, economics, environment and strategic decision-making."
          />

          <section
            style={{
              marginTop: "3rem",
              padding: "1.5rem",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              background: "#f8fafc",
            }}
          >
            <h2 style={{ color: "#0f172a", marginTop: 0 }}>
              Mission
            </h2>

            <p style={{ color: "#475569", lineHeight: 1.8 }}>
              AngolaLab exists to improve understanding through systems
              thinking, intelligence analysis and education. The platform seeks
              to explain not only what is happening, but why it is happening and
              how different systems influence one another.
            </p>
          </section>

          <section style={{ marginTop: "3rem" }}>
            <h2 style={{ color: "#0f172a" }}>Intelligence Areas</h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "1rem",
                marginTop: "1rem",
              }}
            >
              <HomeCard
                href="/tourism"
                title="Tourism Intelligence"
                description="Visitor flows, regional performance, quality scorecards and tourism system analysis."
              />

              <HomeCard
                href="/trading"
                title="Trading Intelligence"
                description="Market structure, DXY, bonds, gold, liquidity behaviour and cross-market alignment."
              />

              <HomeCard
                href="/framework"
                title="Intelligence Framework"
                description="The AngolaLab method: data, observation, analysis, assessment and recommendation."
              />

              <HomeCard
                href="/about"
                title="About AngolaLab"
                description="The mission, vision and systems-thinking foundation behind AngolaLab."
              />
            </div>
          </section>

          <section
            style={{
              marginTop: "3rem",
              padding: "1.5rem",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              background: "#ffffff",
            }}
          >
            <h2 style={{ color: "#0f172a", marginTop: 0 }}>
              Current Development Status
            </h2>

            <p style={{ color: "#475569", lineHeight: 1.8 }}>
              AngolaLab is currently in early platform development. The focus is
              on building reusable intelligence components, consistent layout
              systems and structured analysis pages.
            </p>

            <h3 style={{ color: "#0f172a" }}>Completed</h3>

            <ul style={{ color: "#475569", lineHeight: 1.8 }}>
              <li>Tourism Intelligence Dashboard</li>
              <li>Trading Intelligence Dashboard</li>
              <li>AngolaLab Intelligence Framework v1</li>
              <li>Reusable Navbar, Footer, PageContainer and PageHeader</li>
              <li>SQLite local development database</li>
              <li>Quality Scorecard prototype</li>
            </ul>

            <h3 style={{ color: "#0f172a" }}>In Development</h3>

            <ul style={{ color: "#475569", lineHeight: 1.8 }}>
              <li>Economic Intelligence</li>
              <li>Environmental Intelligence</li>
              <li>BODIVA Intelligence</li>
              <li>Oil Intelligence</li>
              <li>IBOVESPA and USD/BRL Intelligence</li>
              <li>Cloud database integration for production</li>
            </ul>
          </section>
        </PageContainer>
      </main>

      <Footer />
    </>
  );
}

function HomeCard({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div
        style={{
          border: "1px solid #e5e7eb",
          borderRadius: "8px",
          padding: "1.25rem",
          background: "#ffffff",
          minHeight: "150px",
        }}
      >
        <h3 style={{ color: "#0f172a", marginTop: 0 }}>{title}</h3>

        <p style={{ color: "#475569", lineHeight: 1.7 }}>
          {description}
        </p>
      </div>
    </Link>
  );
*/}