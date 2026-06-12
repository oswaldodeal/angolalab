// Import dependencies and components
import db from "@/lib/db";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TourismTable from "@/components/TourismTable";
import SummaryCards from "@/components/SummaryCards";
import ObservationCard from "@/components/ObservationCard";
import QualityScoreCard from "@/components/QualityScoreCard";
import ReviewFormPlaceholder from "@/components/ReviewFormPlaceholder";
import IntelligenceCard from "@/components/IntelligenceCard";
import MarketPlaceholder from "@/components/MarketPlaceholder";

import PageContainer from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";

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

      <main>
  <PageContainer>
      
        {/* Page Header */}
      
      <PageHeader
  category="Tourism Intelligence"
  title="AngolaLab Tourism Dashboard"
  description="Monitoring tourism indicators, visitor flows and regional performance through a systems-thinking intelligence lens."
/>

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

        <section style={{ marginTop: "2rem" }}>
  <h2 style={{ color: "#0f172a" }}>Tourism Quality Scorecards</h2>

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
</section>

<ReviewFormPlaceholder />

<section style={{ marginTop: "2rem" }}>
  <h2 style={{ color: "#0f172a" }}>AngolaLab Intelligence Cards</h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "1rem",
    }}
  >
    <IntelligenceCard
      system="Tourism System"
      title="Luanda Tourism Concentration"
      observation="Current sample data is concentrated in Luanda."
      assessment="This creates a limited national view and may hide provincial tourism opportunities."
      recommendation="Expand data collection to Benguela, Huíla, Namibe and other provinces."
      confidence="Medium"
    />

    <IntelligenceCard
      system="Quality System"
      title="Visitor Experience Measurement"
      observation="Hotels and restaurants can be assessed using cleanliness, hygiene, food, location and service scores."
      assessment="A structured scorecard improves transparency and supports better tourism decisions."
      recommendation="Begin with sample data, then later collect approved user reviews."
      confidence="High"
    />
  </div>
</section>

<section style={{ marginTop: "2rem" }}>
  <h2 style={{ color: "#0f172a" }}>Future AngolaLab Intelligence Modules</h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "1rem",
    }}
  >
    <MarketPlaceholder
      name="BODIVA Intelligence"
      description="Future analysis of Angola’s capital markets, listings, securities and investment activity."
    />

    <MarketPlaceholder
      name="Oil Intelligence"
      description="Future monitoring of crude oil prices, Angola’s export dependency and fiscal exposure."
    />

    <MarketPlaceholder
      name="IBOVESPA Intelligence"
      description="Future tracking of Brazil’s equity market and its connection to emerging-market risk appetite."
    />

    <MarketPlaceholder
      name="USD/BRL Intelligence"
      description="Future monitoring of Brazilian real movements against the US dollar and implications for AngolaLab macro analysis."
    />
  </div>
</section>

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
        </PageContainer>
</main>

      <Footer />
    </>
  );
}