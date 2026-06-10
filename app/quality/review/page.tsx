import db from "@/lib/db";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TourismTable from "@/components/TourismTable";
import SummaryCards from "@/components/SummaryCards";
import ObservationCard from "@/components/ObservationCard";

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
        <p style={{ color: "#2563eb", fontWeight: "bold" }}>
          Tourism Intelligence
        </p>

        <h1 style={{ color: "#0f172a", marginBottom: "0.5rem" }}>
          AngolaLab Tourism Dashboard
        </h1>

        <p style={{ color: "#64748b", maxWidth: "700px", lineHeight: 1.7 }}>
          Monitoring tourism indicators, visitor flows and regional performance
          through a systems-thinking intelligence lens.
        </p>

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

        <h2 style={{ color: "#0f172a" }}>Tourism Records</h2>

        <TourismTable data={data} />
      </main>

      <Footer />
    </>
  );
}