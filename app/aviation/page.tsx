import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageContainer from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";
import IntelligenceCard from "@/components/IntelligenceCard";

export default function AviationPage() {
  return (
    <>
      <Navbar />

      <main>
        <PageContainer>

          <PageHeader
            category="Aviation Intelligence"
            title="AngolaLab Aviation Dashboard"
            description="Monitoring aviation activity, airport connectivity, tourism impact and strategic transport infrastructure through a systems-thinking lens."
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
              title="International Routes"
              value="12"
            />

            <MetricCard
              title="Domestic Routes"
              value="18"
            />

            <MetricCard
              title="Airports Monitored"
              value="5"
            />

            <MetricCard
              title="Connectivity Score"
              value="72/100"
            />
          </section>

          <section style={{ marginTop: "2rem" }}>
            <h2 style={{ color: "#0f172a" }}>
              Aviation Intelligence Cards
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
                system="Airport System"
                title="Luanda Connectivity"
                observation="Luanda remains Angola's primary international aviation hub."
                assessment="Airport connectivity continues to influence tourism, trade and investment flows."
                recommendation="Monitor route expansion and passenger traffic trends."
                confidence="High"
              />

              <IntelligenceCard
                system="Tourism System"
                title="Tourism Impact"
                observation="Additional international flights can increase visitor arrivals."
                assessment="Improved connectivity may support hotels, restaurants and tourism operators."
                recommendation="Track tourism indicators alongside aviation developments."
                confidence="Medium"
              />

              <IntelligenceCard
                system="Infrastructure System"
                title="Airport Development"
                observation="Airport infrastructure projects influence long-term economic capacity."
                assessment="Modern aviation infrastructure improves regional competitiveness."
                recommendation="Monitor airport expansion projects and operational efficiency."
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
      <p style={{ color: "#64748b", margin: 0 }}>
        {title}
      </p>

      <h2 style={{ color: "#0f172a" }}>
        {value}
      </h2>
    </div>
  );
}