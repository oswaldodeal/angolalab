import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FrameworkCard from "@/components/FrameworkCard";
import IntelligenceCard from "@/components/IntelligenceCard";

export default function FrameworkPage() {
  return (
    <>
      <Navbar />

      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "2rem",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <p style={{ color: "#2563eb", fontWeight: "bold" }}>
          AngolaLab Intelligence Framework v1
        </p>

        <h1 style={{ color: "#0f172a" }}>
          From Data to Intelligence
        </h1>

        <p style={{ color: "#475569", maxWidth: "800px", lineHeight: 1.8 }}>
          AngolaLab uses systems thinking to transform data, observations and
          evidence into structured intelligence. The objective is not only to
          show what is happening, but to understand why it is happening, how
          different systems interact, and what decisions can be supported.
        </p>

        <section style={{ marginTop: "3rem" }}>
          <h2 style={{ color: "#0f172a" }}>
            Core Intelligence Flow
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1rem",
              marginTop: "1rem",
            }}
          >
            <FrameworkCard
              title="1. Data"
              description="Raw information such as visitor numbers, revenue, prices, reviews, indicators or market values."
            />

            <FrameworkCard
              title="2. Observation"
              description="What the data appears to show. This is the first interpretation layer."
            />

            <FrameworkCard
              title="3. Analysis"
              description="Why the observation matters and how it connects to other parts of the system."
            />

            <FrameworkCard
              title="4. Assessment"
              description="A structured judgement about risk, opportunity, concentration, weakness or strength."
            />

            <FrameworkCard
              title="5. Recommendation"
              description="A practical next step for decision-makers, researchers, businesses or institutions."
            />
          </div>
        </section>

        <section style={{ marginTop: "3rem" }}>
          <h2 style={{ color: "#0f172a" }}>
            Example Intelligence Cards
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1rem",
              marginTop: "1rem",
            }}
          >
            <IntelligenceCard
              system="Tourism System"
              title="Tourism Concentration Risk"
              observation="Current tourism sample data is concentrated in Luanda."
              assessment="This may create an incomplete national picture and hide opportunities in other provinces."
              recommendation="Expand data coverage to Benguela, Huíla, Namibe and other regions."
              confidence="Medium"
            />

            <IntelligenceCard
              system="Market System"
              title="Future BODIVA Intelligence"
              observation="AngolaLab can later track capital market activity through BODIVA-related indicators."
              assessment="A structured dashboard could improve understanding of local investment conditions."
              recommendation="Create a future BODIVA module with securities, listings, liquidity and market notes."
              confidence="Low"
            />

            <IntelligenceCard
              system="Commodity System"
              title="Oil Dependency Monitoring"
              observation="Oil remains central to Angola’s economic structure."
              assessment="Changes in oil prices can affect fiscal revenue, exchange-rate pressure and national planning."
              recommendation="Create an oil intelligence module linked to Angola’s macroeconomic exposure."
              confidence="High"
            />
          </div>
        </section>

        <section
          style={{
            marginTop: "3rem",
            padding: "1.5rem",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            background: "#f8fafc",
          }}
        >
          <h2 style={{ color: "#0f172a" }}>
            AngolaLab Systems Thinking Rule
          </h2>

          <p style={{ color: "#475569", lineHeight: 1.8 }}>
            AngolaLab does not analyse events in isolation. Every indicator is
            treated as part of a wider system involving economics, society,
            infrastructure, markets, institutions, environment and human
            behaviour.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}