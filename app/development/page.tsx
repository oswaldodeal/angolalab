import Link from "next/link";
import styles from "./development.module.css";

export default function DevelopmentPage() {
  const progress = [
    {
      date: "01 June 2026",
      title: "Development Infrastructure Established",
      status: "Completed",
      description:
        "Established the foundational development environment to support the long-term growth and maintenance of the AngolaLab platform.",
    },
    {
      date: "02 June 2026",
      title: "Development Workflow Standardised",
      status: "Completed",
      description:
        "Established a consistent development workflow to support reliable platform development and long-term project continuity.",
    },
    
    {
  date: "14 July 2026",
  reference: "DD-140726-01",
  title: "Provincial Economic Intelligence Architecture",
  status: "Completed",
  description:
    "Established Provincial Economic Intelligence as the geographical foundation of AngolaLab. Future intelligence areas including business, tourism, aviation, finance, property, education and opportunity intelligence will be organised through this framework.",
},

      
   {
  date: "14 July 2026",
  reference: "DD-140726-02",
  title: "Multilingual Platform Foundation",
  status: "Completed",
  description:
    "Integrated Portuguese and Dutch into the AngolaLab platform architecture, establishing the foundation for multilingual education while preserving a single institutional methodology across all language versions.",
},
  ];

  return (
    <main className={styles.page}>
      <section className={styles.container}>
        {/* Hero */}

        <header className={styles.hero}>


  <p className={styles.category}>AngolaLab Build Log</p>

          <h1 className={styles.title}>Development Dashboard</h1>

          <p className={styles.description}>
            This page records the continuous development of AngolaLab and the
            Angola Economic Intelligence System (AEIS). Every significant
            milestone becomes part of the permanent public history of the
            institution.
          </p>
          {/*Language links*/}

          <nav
  className={styles.languageLinks}
  aria-label="Language versions"
>
  <Link href="/pt" className={styles.languageLink}>
    Português
  </Link>

  <Link href="/nl" className={styles.languageLink}>
    Nederlands
  </Link>
</nav>
</header>

<div className={styles.heroDivider}></div>
        

        {/* Summary */}
        <section className={styles.summaryGrid}>
          <div className={styles.summaryCard}>
            <p className={styles.summaryLabel}>Current Phase</p>
            <h2 className={styles.summaryValue}>Foundation Phase</h2>
          </div>

          <div className={styles.summaryCard}>
            <p className={styles.summaryLabel}>Platform Status</p>
            <h2 className={styles.summaryValue}>Active Development</h2>
          </div>

          <div className={styles.summaryCard}>
            <p className={styles.summaryLabel}>Core Method</p>
            <h2 className={styles.summaryValue}>
              AEIS Intelligence Methodology
            </h2>
          </div>
        </section>

        {/* Latest Progress */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Latest Progress</h2>

          <div>
            {progress.map((item) => (
              <article key={item.title} className={styles.logCard}>
                <div className={styles.logHeader}>
                  <h3 className={styles.logTitle}>{item.title}</h3>
                  <span className={styles.date}>{item.date}</span>
                </div>
{item.reference && (
  <p className={styles.reference}>
    Reference: {item.reference}
  </p>
)}

 <span
  className={`${styles.status} ${
    item.status === "Completed"
      ? styles.completed
      : styles.progress
  }`}
>
  {item.status === "Completed" ? "🟡 " : "🔴 "}
  {item.status}
</span>

                <p className={styles.descriptionText}>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Priorities */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Next Build Priorities</h2>

          <ol className={styles.priorityList}>
            <li>Provincial Economic Intelligence</li>
            <li>AngolaLab Journal</li>
            <li>Opportunity Intelligence</li>
            <li>Verified Business Framework</li>
            <li>AEIS Academy</li>
          </ol>
        </section>

        <p className={styles.footerNote}>
          AngolaLab is being built, documented and refined — brick by brick.
        </p>
      </section>
    </main>
  );
}