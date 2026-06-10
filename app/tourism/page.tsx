// Import dependencies and components
import db from "@/lib/db";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TourismTable from "@/components/TourismTable";
import SummaryCards from "@/components/SummaryCards";
import ObservationCard from "@/components/ObservationCard";
import QualityScoreCard from "@/components/QualityScoreCard";

// Define data type
type TourismRecord = {
  id: number;
  province: string;
  visitors: number;
  revenue: number;
  season: string;
  report_date: string;
  notes: string;
};

export default function TourismPage() {
  // Fetch and prepare data
  const data = db
    .prepare("SELECT * FROM tourism_reports ORDER BY visitors DESC")
    .all() as TourismRecord[];

  const totalVisitors = data.reduce((sum, row) => sum + row.visitors, 0);
  const totalRevenue = data.reduce((sum, row) => sum + row.revenue, 0);
  const topProvince = data.length > 0 ? data[0].province : "No data";
  const provinceCount = new Set(data.map((row) => row.province)).size;

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
        {/* Page Header */}
        <p style={{ color: "#2563eb", fontWeight: "bold", margin: "0 0 0.5rem 0" }}>
          Tourism Intelligence
        </p>

        <h1 style={{ color: "#0f172a", margin: "0 0 0.5rem 0" }}>
          AngolaLab Tourism Dashboard
        </h1>

        <p style={{ color: "#64748b", maxWidth: "700px", lineHeight: "1.7", margin: "0 0 2rem 0" }}>
          Monitoring tourism indicators, visitor flows and regional performance
          through a systems-thinking intelligence lens.
        </p>

        {/* Summary & Observations */}
        <SummaryCards
          totalVisitors={totalVisitors}
          totalRevenue={totalRevenue}
          topProvince={topProvince}
          provinceCount={provinceCount}
        />

        <ObservationCard
          topProvince={topProvince}
          totalVisitors={totalVisitors}
          provinceCount={provinceCount}
        />

        {/* Quality Scorecards Section */}
        <h2 style={{ color: "#0f172a", margin: "2rem 0 1rem 0" }}>Tourism Quality Scorecards</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          <QualityScoreCard
            name="Hotel Tropico"
            type="Hotel"
            cleanliness={85}
            food={80}
            location={95}
            hygiene={88}
            service={82}
            safety={90}
            valueForMoney={78}
          />

          <QualityScoreCard
            name="Luanda Bay Restaurant"
            type="Restaurant"
            cleanliness={78}
            food={84}
            location={88}
            hygiene={80}
            service={75}
            safety={82}
            valueForMoney={70}
          />
        </div>

        {/* Tourism Data Table */}
        <h2 style={{ color: "#0f172a", margin: "2rem 0 1rem 0" }}>Tourism Records</h2>
        <TourismTable data={data} />
      </main>

      <Footer />
    </>
  );
}