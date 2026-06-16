import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageContainer from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";
import IntelligenceCard from "@/components/IntelligenceCard";

export default function BusinessPage() {
  return (
    <>
      <Navbar />

      <main>
        <PageContainer>
          <PageHeader
            category="Business Intelligence"
            title="AngolaLab Business Intelligence"
            description="Monthly and annual opportunity reports for companies, organisations and VIP business members interested in identifying supply gaps, workforce demand, import substitution and investment opportunities."
          />

          <section
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1rem",
              marginTop: "2rem",
            }}
          >
            <MetricCard title="Opportunities" value="Tracking" />
            <MetricCard title="Supply Gaps" value="Monitoring" />
            <MetricCard title="Workforce Demand" value="Emerging" />
            <MetricCard title="VIP Reports" value="Planned" />
          </section>

          <section style={{ marginTop: "2rem" }}>
            <h2 style={{ color: "#0f172a" }}>Business Intelligence Areas</h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "1rem",
                marginTop: "1rem",
              }}
            >
              <IntelligenceCard
                system="Opportunity Intelligence"
                title="Supply Gap Detection"
                observation="Some companies may depend on suppliers outside their province or outside Angola."
                assessment="These supply gaps can reveal opportunities for local production, logistics and business development."
                recommendation="Track recurring procurement needs and identify where local suppliers could enter the market."
                confidence="Medium"
              />

              <IntelligenceCard
                system="Import Substitution"
                title="Local Production Opportunities"
                observation="Certain products currently imported from countries such as Brazil may be suitable for local production."
                assessment="Import substitution can reduce dependency, lower logistics costs and strengthen provincial economies."
                recommendation="Identify products with repeated import demand and evaluate local production feasibility."
                confidence="Medium"
              />

              <IntelligenceCard
                system="Workforce Intelligence"
                title="Staff Required & Skills Needed"
                observation="Verified company profiles can show current staff levels, staff required and skills needed."
                assessment="This can help students, training centres and organisations understand where employment demand exists."
                recommendation="Collect workforce demand data from verified companies and include it in monthly reports."
                confidence="High"
              />

              <IntelligenceCard
                system="Tourism Opportunity"
                title="Accommodation Demand"
                observation="Rising tourism activity can create demand for hotels, resorts, guest houses and support services."
                assessment="When tourism demand outpaces accommodation supply, new hospitality opportunities may emerge."
                recommendation="Monitor tourism growth alongside accommodation capacity and aviation connectivity."
                confidence="Medium"
              />
            </div>
          </section>

          <section style={{ marginTop: "3rem" }}>
            <h2 style={{ color: "#0f172a" }}>Report Products</h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1rem",
                marginTop: "1rem",
              }}
            >
              <ReportPreview
                title="Monthly Opportunity Brief"
                access="VIP Business Members"
                description="A monthly report identifying emerging opportunities, supply gaps, workforce demand and sector movement."
              />

              <ReportPreview
                title="Annual Angola Business Outlook"
                access="VIP Business Members"
                description="A yearly strategic report covering business trends, investment signals, infrastructure developments and sector opportunities."
              />

              <ReportPreview
                title="Sector Intelligence Review"
                access="Selected Members"
                description="Focused analysis on sectors such as tourism, agriculture, logistics, manufacturing, aviation and capital markets."
              />
            </div>
          </section>

          <section
            style={{
              marginTop: "3rem",
              border: "1px dashed #cbd5e1",
              borderRadius: "8px",
              padding: "1.5rem",
              background: "#f8fafc",
            }}
          >
            <h2 style={{ color: "#0f172a", marginTop: 0 }}>
              VIP Business Member Access
            </h2>

            <p style={{ color: "#475569", lineHeight: 1.8 }}>
              Full monthly and annual business intelligence reports will be
              distributed to VIP business members, companies, organisations and
              selected partners. Public visitors may see summaries, but full
              opportunity reports remain member-only.
            </p>
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
      <p style={{ margin: 0, color: "#64748b" }}>{title}</p>
      <h2 style={{ color: "#0f172a", marginTop: "0.5rem" }}>{value}</h2>
    </div>
  );
}

function ReportPreview({
  title,
  access,
  description,
}: {
  title: string;
  access: string;
  description: string;
}) {
  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        padding: "1.25rem",
        background: "#ffffff",
      }}
    >
      <p style={{ color: "#2563eb", fontWeight: "bold", margin: 0 }}>
        {access}
      </p>

      <h3 style={{ color: "#0f172a" }}>{title}</h3>

      <p style={{ color: "#475569", lineHeight: 1.7 }}>{description}</p>

      <p style={{ color: "#64748b", fontSize: "0.9rem" }}>
        Status: Report structure planned
      </p>
    </div>
  );
}