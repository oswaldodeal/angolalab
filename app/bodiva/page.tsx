import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageContainer from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";
import IntelligenceCard from "@/components/IntelligenceCard";

export default function BodivaPage() {
  return (
    <>
      <Navbar />

      <main>
        <PageContainer>

          <PageHeader
            category="BODIVA Intelligence"
            title="AngolaLab BODIVA Dashboard"
            description="Monitoring Angola's capital markets, investment activity, market development and financial opportunities through a systems-thinking lens."
          />

          <section
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1rem",
              marginTop: "2rem",
            }}
          >
            <MetricCard
              title="Market Status"
              value="Monitoring"
            />

            <MetricCard
              title="Investor Confidence"
              value="Neutral"
            />

            <MetricCard
              title="Capital Formation"
              value="Developing"
            />

            <MetricCard
              title="Opportunity Score"
              value="72/100"
            />
          </section>

          <section style={{ marginTop: "2rem" }}>
            <h2 style={{ color: "#0f172a" }}>
              BODIVA Intelligence Cards
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "1rem",
                marginTop: "1rem",
              }}
            >

              <IntelligenceCard
                system="Capital Market System"
                title="Market Development"
                observation="BODIVA continues to evolve as Angola's primary capital market."
                assessment="Market depth and participation remain important indicators of long-term development."
                recommendation="Monitor new listings, trading activity and market reforms."
                confidence="Medium"
              />

              <IntelligenceCard
                system="Investment System"
                title="Investor Participation"
                observation="Investor engagement remains a key driver of market growth."
                assessment="Higher participation can improve liquidity and capital allocation."
                recommendation="Track investment trends and institutional participation."
                confidence="Medium"
              />

              <IntelligenceCard
                system="Business System"
                title="Corporate Financing"
                observation="Capital markets provide alternatives to traditional bank financing."
                assessment="Expanded financing options may support private-sector growth."
                recommendation="Monitor listing opportunities and bond-market activity."
                confidence="High"
              />

            </div>
          </section>

          <section style={{ marginTop: "2rem" }}>
            <h2 style={{ color: "#0f172a" }}>
              Future BODIVA Intelligence Modules
            </h2>

            <ul
              style={{
                lineHeight: "2",
                color: "#475569",
              }}
            >
              <li>Listed Companies Intelligence</li>
              <li>Bond Market Intelligence</li>
              <li>Investor Sentiment Tracking</li>
              <li>IPO Monitoring</li>
              <li>Sector Opportunity Reports</li>
              <li>VIP Business Intelligence Briefings</li>
            </ul>
          </section>

        </PageContainer>
      </main>

      <Footer />
    </>
  );
}

function MetricCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        padding: "1rem",
        background: "#ffffff",
      }}
    >
      <p
        style={{
          margin: 0,
          color: "#64748b",
        }}
      >
        {title}
      </p>

      <h2
        style={{
          color: "#0f172a",
          marginTop: "0.5rem",
        }}
      >
        {value}
      </h2>
    </div>
  );
}