import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "2rem",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <p style={{ color: "#2563eb", fontWeight: "bold" }}>About AngolaLab</p>

        <h1 style={{ color: "#0f172a" }}>
          Understanding Angola Through Systems Thinking
        </h1>

        <p style={{ color: "#475569", lineHeight: 1.8 }}>
          AngolaLab is an independent intelligence and education initiative
          focused on transforming information into structured understanding.
        </p>

        <section style={{ marginTop: "2rem" }}>
          <h2>Our Approach</h2>
          <p style={{ color: "#475569", lineHeight: 1.8 }}>
            Most organisations focus on events. AngolaLab focuses on systems.
            We study how economics, tourism, environment, finance, technology
            and society connect.
          </p>
        </section>

        <section style={{ marginTop: "2rem" }}>
          <h2>Areas of Focus</h2>

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
          <h2>Long-Term Vision</h2>
          <p style={{ color: "#475569", lineHeight: 1.8 }}>
            AngolaLab aims to develop into a trusted intelligence and education
            platform that improves understanding of Angola, Africa and global
            systems through structured analysis.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}