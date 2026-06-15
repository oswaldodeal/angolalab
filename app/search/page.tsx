import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageContainer from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";

export default function SearchPage() {
  return (
    <>
      <Navbar />

      <main>
        <PageContainer>
          <PageHeader
            category="AngolaLab Intelligence Search"
            title="Search AngolaLab"
            description="Search tourism profiles, companies, intelligence reports and future AngolaLab datasets."
          />

          <div
            style={{
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          >
            <input
              type="text"
              placeholder="Search AngolaLab..."
              style={{
                width: "100%",
                padding: "1rem",
                fontSize: "1rem",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
              }}
            />
          </div>

          <section>
            <h2 style={{ color: "#0f172a" }}>
              Featured Searches
            </h2>

            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                flexWrap: "wrap",
              }}
            >
              <SearchTag label="Hotels" />
              <SearchTag label="Restaurants" />
              <SearchTag label="Tour Operators" />
              <SearchTag label="Companies" />
              <SearchTag label="Airports" />
            </div>
          </section>

          <section style={{ marginTop: "3rem" }}>
            <h2 style={{ color: "#0f172a" }}>
              Search Results
            </h2>

            <div
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                padding: "1.5rem",
                background: "#ffffff",
              }}
            >
              <p style={{ color: "#64748b" }}>
                No results yet.
              </p>

              <p style={{ color: "#64748b" }}>
                Future AngolaLab Intelligence Search
                will display tourism profiles,
                companies, intelligence reports,
                airports and other verified entities.
              </p>
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
            <h2 style={{ color: "#0f172a" }}>
              Future Partner Area
            </h2>

            <p style={{ color: "#64748b" }}>
              Reserved for future AngolaLab
              partners, sponsors and featured
              verified organisations.
            </p>
          </section>
        </PageContainer>
      </main>

      <Footer />
    </>
  );
}

function SearchTag({
  label,
}: {
  label: string;
}) {
  return (
    <span
      style={{
        padding: "0.5rem 1rem",
        background: "#f1f5f9",
        borderRadius: "999px",
        color: "#334155",
        fontSize: "0.9rem",
      }}
    >
      {label}
    </span>
  );
}