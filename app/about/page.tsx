import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageContainer from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        <PageContainer>
          <PageHeader
            category="About AngolaLab"
            title="Understanding Angola Through Systems Thinking"
            description="AngolaLab is an independent intelligence and education initiative focused on transforming information into structured understanding."
          />

          <section style={{ marginTop: "2rem" }}>
            <h2 style={{ color: "#0f172a" }}>Our Approach</h2>

            <p style={{ color: "#475569", lineHeight: 1.8 }}>
              Most organisations focus on events. AngolaLab focuses on systems.
              We study how economics, tourism, environment, finance, technology
              and society connect.
            </p>
          </section>

          <section style={{ marginTop: "2rem" }}>
            <h2 style={{ color: "#0f172a" }}>Areas of Focus</h2>

            <ul style={{ color: "#475569", lineHeight: 1.8 }}>
              <li>Economic Intelligence</li>
              <li>Tourism Intelligence</li>
              <li>Environmental Intelligence</li>
              <li>Trading & Market Intelligence</li>
              <li>Systems Thinking Education</li>
              <li>Strategic Research</li>
            </ul>
          </section>

          <section style={{ marginTop: "2rem" }}>
            <h2 style={{ color: "#0f172a" }}>Long-Term Vision</h2>

            <p style={{ color: "#475569", lineHeight: 1.8 }}>
              AngolaLab aims to develop into a trusted intelligence and
              education platform that improves understanding of Angola, Africa
              and global systems through structured analysis.
            </p>
          </section>
        </PageContainer>
      </main>

      <Footer />
    </>
  );
}