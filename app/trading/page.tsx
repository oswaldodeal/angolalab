import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IntelligenceCard from "@/components/IntelligenceCard";
import PageContainer from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";

export default function TradingPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageContainer>
          {/* ✅ PageHeader — matches your component perfectly */}
          <PageHeader
            category="Trading Intelligence"
            title="AngolaLab Trading Dashboard"
            description="A systems-thinking dashboard for monitoring market structure, macro alignment, liquidity behaviour, and risk conditions."
          />

          {/* ✅ Metric Cards Section — correct grid, spacing, content */}
          <section
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1rem",
              margin: "2rem 0",
            }}
          >
            <MetricCard label="DXY Bias" value="Bullish Above Support" />
            <MetricCard label="Bond Signal" value="Watching Alignment" />
            <MetricCard label="Gold State" value="Waiting Confirmation" />
            <MetricCard label="Framework" value="Wait Is My Hedge" />
          </section>

          {/* ✅ Market Intelligence Section — correct props for IntelligenceCard */}
          <section style={{ marginTop: "2rem" }}>
            <h2 style={{ color: "#0f172a", marginBottom: "1rem" }}>Market Intelligence Cards</h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "1rem",
              }}
            >
              <IntelligenceCard
                system="DXY System"
                title="Dollar Structure"
                observation="DXY remains above a key support structure in the current sample view."
                assessment="Dollar strength may continue to influence gold, US30, Bitcoin and emerging-market FX."
                recommendation="Wait for alignment between DXY, yields and price action before forming directional bias."
                confidence="Medium"
              />

              <IntelligenceCard
                system="Bond System"
                title="Yield Alignment"
                observation="Bond strength remains an important confirmation layer for market direction."
                assessment="Without yield confirmation, market moves may be noisy or vulnerable to reversal."
                recommendation="Monitor US yields and real rates before increasing confidence in gold or equity signals."
                confidence="Medium"
              />

              <IntelligenceCard
                system="Gold System"
                title="XAUUSD Confirmation"
                observation="Gold requires confirmation from liquidity behaviour, DXY pressure and bond-market context."
                assessment="Entering before confirmation increases emotional risk and weakens execution quality."
                recommendation="Wait for price action confirmation near key zones before considering trade execution."
                confidence="High"
              />

              <IntelligenceCard
                system="Market Alignment"
                title="Wait Is My Hedge"
                observation="The strongest trading decisions emerge when market structure, macro pressure and liquidity align."
                assessment="Patience reduces exposure to false moves and protects discipline."
                recommendation="Avoid forcing trades when the system is not aligned."
                confidence="High"
              />
            </div>
          </section>
        </PageContainer>
      </main>

      <Footer />
    </>
  );
}

// ✅ Reusable Metric Card — typed, styled, perfect
function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        padding: "1.25rem",
        background: "#ffffff",
      }}
    >
      <p style={{ margin: 0, color: "#64748b", fontSize: "0.9rem" }}>
        {label}
      </p>
      <h2
        style={{
          margin: "0.5rem 0 0",
          color: "#0f172a",
          fontSize: "1.3rem",
        }}
      >
        {value}
      </h2>
    </div>
  );
}