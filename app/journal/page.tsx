import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageContainer from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";

export default function JournalPage() {
  return (
    <>
      <Navbar />

      <main>
        <PageContainer>
          <PageHeader
            category="The AngolaLab Journal"
            title="Independent Intelligence. Systems Thinking."
            description="Evidence-based intelligence briefs designed to help readers understand events, identify opportunities and make better decisions."
          />

          <section
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gap: "1.5rem",
              marginTop: "2rem",
            }}
          >
            <div>
              {/* Featured Brief with Video */}
              <section
                style={{
                  border: "1px solid #e5e7eb",
                  borderRadius: "12px",
                  padding: "1.5rem",
                  background: "#ffffff",
                }}
              >
                <p style={{ color: "#2563eb", fontWeight: "bold", marginTop: 0 }}>
                  Featured Intelligence Brief
                </p>

                <div
                  style={{
                    borderRadius: "8px",
                    overflow: "hidden",
                    marginBottom: "1.5rem",
                  }}
                >
                  <iframe
                    width="100%"
                    height="420"
                    src="https://www.youtube.com/embed/80JR4rN3UuM"
                    title="AngolaLab Intelligence Brief"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ border: "none" }}
                  />
                </div>

                <h2 style={{ color: "#0f172a", marginBottom: "0.5rem" }}>
                  Oil Below $80: What It Means for Angola
                </h2>

                <p style={{ color: "#64748b", lineHeight: 1.7 }}>
                  A short AngolaLab Intelligence Brief explaining how lower oil
                  prices may affect Angola&apos;s economy, revenue outlook and
                  diversification pressure.
                </p>

                <p style={{ color: "#166534", fontWeight: "bold" }}>
                  AEIS Intelligence Score: 91/100
                </p>
              </section>

              {/* Latest Intelligence Briefs */}
              <section style={{ marginTop: "2rem" }}>
                <h2 style={{ color: "#0f172a" }}>
                  Latest Intelligence Briefs
                </h2>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                    gap: "1rem",
                    marginTop: "1rem",
                  }}
                >
                  <VideoCard
                    videoId="80JR4rN3UuM"
                    title="Tourism Growth Outlook"
                    category="Tourism"
                  />

                  <VideoCard
                    videoId="9FyiiPfV-iQ"
                    title="Business Opportunities"
                    category="Business"
                  />

                  <VideoCard
                    videoId="CQ6kNATUffA"
                    title="Business Opportunities"
                    category="Business"
                  />

                  <VideoCard
                    videoId="CQ6kNATUffA"
                    title="Business Opportunities"
                    category="Business"
                  />
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                padding: "1.5rem",
                background: "#ffffff",
                height: "fit-content",
              }}
            >
              <h2 style={{ color: "#0f172a", marginTop: 0 }}>
                Latest Intelligence
              </h2>

              <SideLink title="Oil Below $80" category="Economy" />
              <SideLink title="BODIVA Market Development" category="BODIVA" />
              <SideLink title="Accommodation Demand Rising" category="Tourism" />
              <SideLink title="New Route, New Opportunity" category="Aviation" />
              <SideLink title="Packaging Supply Gap" category="Business" />

              <div
                style={{
                  marginTop: "2rem",
                  border: "1px dashed #cbd5e1",
                  borderRadius: "8px",
                  padding: "1rem",
                  background: "#f8fafc",
                }}
              >
                <p style={{ color: "#64748b", margin: 0 }}>
                  Future sponsor / partner area
                </p>
              </div>
            </aside>
          </section>
        </PageContainer>
      </main>

      <Footer />
    </>
  );
}

// ✅ Video Card Component — fixed closing tag
function VideoCard({
  videoId,
  title,
  category,
}: {
  videoId: string;
  title: string;
  category: string;
}) {
  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        overflow: "hidden",
        background: "#fff",
      }}
    >
      <iframe
        width="100%"
        height="180"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allowFullScreen
        style={{ border: "none" }}
      />

      <div style={{ padding: "1rem" }}>
        <p
          style={{
            color: "#2563eb",
            fontWeight: "bold",
            margin: 0,
          }}
        >
          {category}
        </p>

        <h3 style={{ color: "#0f172a", margin: "0.25rem 0 0" }}>
          {title}
        </h3>
      </div>
    </div>
  );
}

// SideLink Component — fixed position and closing
function SideLink({
  title,
  category,
}: {
  title: string;
  category: string;
}) {
  return (
    <div
      style={{
        borderBottom: "1px solid #e5e7eb",
        padding: "0.75rem 0",
      }}
    >
      <p
        style={{
          color: "#2563eb",
          fontSize: "0.85rem",
          margin: 0,
        }}
      >
        {category}
      </p>

      <p
        style={{
          color: "#0f172a",
          fontWeight: "bold",
          margin: "0.25rem 0 0",
        }}
      >
        {title}
      </p>
    </div>
  );
}