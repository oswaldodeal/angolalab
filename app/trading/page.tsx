import WeeklyIntelligenceBrief from "@/components/WeeklyIntelligenceBrief";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageContainer from "@/components/PageContainer";
import styles from "./trading.module.css";

const laboratoryStatus = {
  status: "Active",
  updated: "01 August 2026",
  version: "Trading Intelligence V1",
  method: "AEIS Research Methodology",
};

const weeklyBrief = {
  reference: "TI-030826-01",
  publicationDate: "08 August 2026",
  preparedBy: "AngolaLab Trading Laboratory",
  status: "Active Research",
};

const researchConfidence = {
  level: "High",
  statement:
    "Current macroeconomic evidence strongly supports the broader assessment. Execution decisions remain conditional upon higher-timeframe confirmation and the Trading Laboratory's execution framework.",
};

const weeklyBriefSummary = {
  title: "Executive Summary",
  text: [
    "The current macro environment remains primarily driven by the interaction between the US Dollar Index and US 10-Year Treasury Yields. The US Dollar Index continues to exhibit underlying structural strength, while Treasury yields are testing a significant higher-timeframe decision zone that may influence the next phase of market direction.",
    "Gold, Bitcoin, and emerging market assets continue to respond in alignment with these core macro drivers, reflecting ongoing shifts in global capital flows rather than isolated market developments.",
    "AEIS Assessment: The broader market structure remains intact. Until the relationship between the US Dollar Index and Treasury yields changes materially, these two indicators will continue to serve as the primary framework for analysing global financial markets.",
  ],
};

export default function TradingPage() {
  return (
    <>
      <Navbar />

      <main className={styles.tradingPage}>
        <PageContainer>
          <section className={styles.laboratory}>
            {/* Overview */}
            <header id="overview" className={styles.hero}>
              <p className={styles.eyebrow}>
                AngolaLab Trading Laboratory
              </p>

              <h1 className={styles.title}>Trading Intelligence</h1>

              <p className={styles.description}>
                Understanding how capital moves through macroeconomic
                alignment, market structure and disciplined observation.
              </p>

              <p className={styles.principle}>
                The mirror has been polished. Now we code the laboratory.
              </p>
            </header>

            {/* Laboratory status */}
            <section
              className={styles.statusPanel}
              aria-label="Laboratory status"
            >
              <div className={styles.statusItem}>
                <p>Laboratory Status</p>
                <h2 className={styles.activeStatus}>
                  <span className={styles.statusDot} />
                  {laboratoryStatus.status}
                </h2>
              </div>

              <div className={styles.statusItem}>
                <p>Last Updated</p>
                <h2>{laboratoryStatus.updated}</h2>
              </div>

              <div className={styles.statusItem}>
                <p>Version</p>
                <h2>{laboratoryStatus.version}</h2>
              </div>

              <div className={styles.statusItem}>
                <p>Research Method</p>
                <h2>{laboratoryStatus.method}</h2>
              </div>
            </section>

            <div className={styles.laboratoryContent}>
              {/* 01 — Market Environment */}
              <section
                id="market-environment"
                className={styles.section}
              >
                <div className={styles.sectionHeading}>
                  <div>
                    <p className={styles.sectionNumber}>01</p>
                    <h2>Market Environment</h2>
                  </div>

                  <p>
                    The principal drivers and markets currently shaping the
                    trading environment.
                  </p>
                </div>

                <div className={styles.marketGrid}>
                  <MarketCard
                    symbol="DXY"
                    name="USD Dollar Index"
                    bias="Bullish"
                    phase="Expansion"
                    observation="The USD Dollar Index remains structurally supported while price holds above its current decision zone."
                  />

                  <MarketCard
                    symbol="US10Y"
                    name="US 10-Year Treasury Yield"
                    bias="Bullish"
                    phase="Expansion"
                    observation="Higher yields continue to support the cost of capital and strengthen the broader US dollar environment."
                  />

                  <MarketCard
                    symbol="XAUUSD"
                    name="Gold"
                    bias="Bearish"
                    phase="Under Observation"
                    observation="Gold remains vulnerable while the USD Dollar Index and US yields remain aligned bullish."
                  />

                  <MarketCard
                    symbol="BTCUSD"
                    name="Bitcoin"
                    bias="Neutral"
                    phase="Transition"
                    observation="Bitcoin requires clearer daily structure before directional continuation can be confirmed."
                  />
                </div>
              </section>

              {/* 02 — Current Alignment */}
              <section
                id="current-alignment"
                className={styles.section}
              >
                <div className={styles.sectionHeading}>
                  <div>
                    <p className={styles.sectionNumber}>02</p>
                    <h2>Current Alignment</h2>
                  </div>

                  <p>
                    Alignment is assessed before any directional conclusion is
                    reached.
                  </p>
                </div>

                <article className={styles.alignmentPanel}>
                  <div className={styles.alignmentStatus}>
                    <span className={styles.alignmentIndicator} />

                    <div>
                      <p>Current Assessment</p>
                      <h3>Partial Macro Alignment</h3>
                    </div>
                  </div>

                  <p>
                    The USD Dollar Index and US yields remain structurally firm.
                    Gold reflects the opposing side of that relationship, while
                    Bitcoin remains in transition. Price confirmation is still
                    required before execution.
                  </p>
                </article>
              </section>

              {/* 03 — Weekly Intelligence Brief */}
              <section id="weekly-brief" className={styles.section}>
                <div className={styles.sectionHeading}>
                  <div>
                    <p className={styles.sectionNumber}>03</p>
                    <h2>Latest Research Publication</h2>
                  </div>

                  <p>
                    A structured interpretation of the current market environment.
                  </p>
                </div>

                <WeeklyIntelligenceBrief
  reference={weeklyBrief.reference}
  publicationDate={weeklyBrief.publicationDate}
  preparedBy={weeklyBrief.preparedBy}
  status={weeklyBrief.status}
/>


<article className={styles.executiveSummary}>
  <p className={styles.summaryLabel}>
    Executive Summary
  </p>

  <div className={styles.summaryText}>
    {weeklyBriefSummary.text.map((paragraph) => (
      <p key={paragraph}>{paragraph}</p>
    ))}
  </div>
</article>


<article className={styles.researchConfidence}>
  <p className={styles.confidenceLabel}>
    Research Confidence
  </p>

  <h3>{researchConfidence.level}</h3>

  <p className={styles.confidenceStatement}>
    {researchConfidence.statement}
  </p>
</article>


                <div className={styles.briefGrid}>

                 <BriefCard
                    title="Observation"
                    text="The USD Dollar Index and US 10-year yields remain supported, maintaining pressure on assets sensitive to a stronger dollar and a higher cost of capital."
                  />

                  <BriefCard
                    title="Structural Relationships"
                    text="Gold and Bitcoin should not be studied independently. Their behaviour must be evaluated against the direction of the USD Dollar Index, yields and higher-timeframe market structure."
                  />

                  <BriefCard
                    title="Risk Assessment"
                    text="Macro alignment does not guarantee immediate price continuation. Markets may remain in absorption, transition or delayed expansion."
                  />

                  <BriefCard
                    title="Conditions Under Observation"
                    text="Wait for daily and four-hour structure to confirm the macro environment. No confirmation means no execution."
                  />
                </div>
              </section>

              <article className={styles.researchConclusion}>
  <p className={styles.conclusionLabel}>
    Research Conclusion
  </p>

  <p>
    The Trading Laboratory continues to monitor the relationship
    between the USD Dollar Index, US 10-Year Treasury yields,
    Gold and Bitcoin.
  </p>

  <p>
    The current assessment remains conditional. Future
    publications may revise these observations as new
    macroeconomic evidence becomes available.
  </p>
</article>

              {/* 04 and 05 */}
              <div className={styles.lowerGrid}>
                <section
                  id="markets-under-observation"
                  className={styles.section}
                >
                  <div className={styles.sectionHeading}>
                    <div>
                      <p className={styles.sectionNumber}>04</p>
                      <h2>Markets Under Observation</h2>
                    </div>
                  </div>

                  <div className={styles.observationList}>
                    <ObservationRow
                      market="EURUSD"
                      status="Monitoring"
                      condition="Bearish continuation requires USD strength and confirmation below the current daily decision zone."
                    />

                    <ObservationRow
                      market="USDJPY"
                      status="Monitoring"
                      condition="Continuation depends on yield support and confirmation through higher-timeframe price structure."
                    />

                    <ObservationRow
                      market="Gold"
                      status="Watching Expansion"
                      condition="Selling pressure remains structurally supported while yields and the USD Dollar Index remain firm."
                    />

                    <ObservationRow
                      market="BTCUSD"
                      status="Waiting"
                      condition="No directional conclusion until daily structure confirms either continuation or transition."
                    />
                  </div>
                </section>

                <section
                  id="research-archive"
                  className={styles.section}
                >
                  <div className={styles.sectionHeading}>
                    <div>
                      <p className={styles.sectionNumber}>05</p>
                      <h2>Research Archive</h2>
                    </div>
                  </div>

                  <div className={styles.archiveList}>
                    <ArchiveRow
                      reference="OBS-090726"
                      title="USD Dollar Index Absorption Phase"
                      type="Research Observation"
                    />

                    <ArchiveRow
                      reference="OBJ-100726"
                      title="Cross-Market Alignment Investigation"
                      type="Research Objective"
                    />

                    <ArchiveRow
                      reference="OUT-130726"
                      title="Conflicting Signals Represent Different Market Stages"
                      type="Research Outcome"
                    />
                  </div>
                </section>
              </div>

<section className={styles.section}>
  <div className={styles.sectionHeader}>
    <span className={styles.sectionNumber}>06</span>

    <div>
      <h2>Institutional Partnerships</h2>
      <p>
        Supporting independent research, education and
        institutional development.
      </p>
    </div>
  </div>

  <div className={styles.partnershipGrid}>
    <article className={styles.partnershipCard}>
      <h3>Research Institution</h3>

      <p>
        Reserved for future collaboration with universities, research 
        centres and scientific organisations.
      </p>

      <span className={styles.partnershipCategory}>
        Research
      </span>
    </article>

    <article className={styles.partnershipCard}>
      <h3>Education Partner</h3>

      <p>
        Reserved for future collaboration with schools, universities and 
        educational institutions.
      </p>

      <span className={styles.partnershipCategory}>
        Education
      </span>
    </article>

    <article className={styles.partnershipCard}>
      <h3>Innovation Partner</h3>

      <p>
        Reserved for future collaboration with technology 
        companies, innovators and industry leaders.
      </p>

      <span className={styles.partnershipCategory}>
        Innovation
      </span>
    </article>
  </div>

  <p className={styles.partnershipNote}>
  Supporting independent research, education, and the long-term 
  development of AngolaLab.
  </p>
</section>

              {/* Educational disclaimer */}
              <section className={styles.disclaimer}>
                <h2>Educational Purpose</h2>

                <p>
                  AngolaLab Trading Intelligence provides research, education
                  and structured market observations. It does not provide
                  personalised financial advice, guarantee outcomes or publish
                  instructions to buy or sell financial instruments.
                </p>
              </section>
            </div>
          </section>
        </PageContainer>
      </main>

      <Footer />
    </>
  );
}

type MarketCardProps = {
  symbol: string;
  name: string;
  bias: "Bullish" | "Bearish" | "Neutral";
  phase: string;
  observation: string;
};

function MarketCard({
  symbol,
  name,
  bias,
  phase,
  observation,
}: MarketCardProps) {
  const biasClass =
    bias === "Bullish"
      ? styles.bullish
      : bias === "Bearish"
        ? styles.bearish
        : styles.neutral;

  return (
    <article className={styles.marketCard}>
      <div className={styles.cardHeader}>
        <div>
          <p className={styles.symbol}>{symbol}</p>
          <h3>{name}</h3>
        </div>

        <span className={`${styles.biasBadge} ${biasClass}`}>
          {bias}
        </span>
      </div>

      <p className={styles.phase}>Phase: {phase}</p>
      <p className={styles.cardText}>{observation}</p>
    </article>
  );
}

type BriefCardProps = {
  title: string;
  text: string;
};

function BriefCard({ title, text }: BriefCardProps) {
  return (
    <article className={styles.briefCard}>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

type ObservationRowProps = {
  market: string;
  status: string;
  condition: string;
};

function ObservationRow({
  market,
  status,
  condition,
}: ObservationRowProps) {
  return (
    <article className={styles.observationRow}>
      <div>
        <h3>{market}</h3>
        <span>{status}</span>
      </div>

      <p>{condition}</p>
    </article>
  );
}

type ArchiveRowProps = {
  reference: string;
  title: string;
  type: string;
};

function ArchiveRow({
  reference,
  title,
  type,
}: ArchiveRowProps) {
  return (
    <article className={styles.archiveRow}>
      <p className={styles.archiveReference}>{reference}</p>

      <div>
        <h3>{title}</h3>
        <p>{type}</p>
      </div>

      <span className={styles.archiveStatus}>
        ● Completed
      </span>
    </article>
  );
}