
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageContainer from "@/components/PageContainer";

import styles from "./hold-youth.module.css";

const pathways = [
  {
    title: "Authors",
    description:
      "Supporting young people in developing, preparing and publishing original written work.",
  },
  {
    title: "Technology",
    description:
      "Building practical technology skills through coding, digital tools and project development.",
  },
  {
    title: "Research",
    description:
      "Learning how to investigate questions, gather evidence and communicate findings clearly.",
  },
  {
    title: "Business & Enterprise",
    description:
      "Exploring how ideas become useful products, services and sustainable enterprises.",
  },
];

export default function HoldYouthPage() {
  return (
    <>
      <Navbar />

      <main className={styles.holdYouthPage}>
        <PageContainer>
          <section className={styles.programme}>
            <header className={styles.hero}>
              <p className={styles.eyebrow}>
                AngolaLab Youth Development
              </p>

              <h1 className={styles.title}>
                Hold-Youth
              </h1>

              <p className={styles.description}>
                A practical learning environment where young people
                develop knowledge by researching, building and
                completing real projects.
              </p>
            </header>

            <section className={styles.section}>
              <p className={styles.sectionNumber}>01</p>
              <h2>How Hold-Youth Works</h2>

              <div className={styles.process}>
            <Link
               href="/hold-youth/join"
               className={styles.processLink}
             >
             Join
            </Link>

                <span>Choose a Pathway</span>
                <span>Build a Project</span>
                <span>Review</span>
                <span>Publish or Present</span>
              </div>
            </section>

            <section className={styles.section}>
              <p className={styles.sectionNumber}>02</p>
              <h2>Learning Pathways</h2>

              <div className={styles.pathwayGrid}>
                {pathways.map((pathway) => (
                  <article
                    key={pathway.title}
                    className={styles.pathwayCard}
                  >
                    <h3>{pathway.title}</h3>
                    <p>{pathway.description}</p>
                  </article>
                ))}
              </div>
            </section>
  

{/* 06 — Institutional Partnerships */}
<section
  className={`${styles.section} ${styles.partnershipSection}`}
>
  <div className={styles.sectionHeader}>
    <span className={styles.sectionNumber}>03</span>

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
      <h3>Education Partner</h3>

      <p>
        Reserved for future collaboration with universities,
        colleges, training providers and educational institutions
        supporting learning and skills development.
      </p>

      <span className={styles.partnershipCategory}>
        Education
      </span>
    </article>

    <article className={styles.partnershipCard}>
      <h3>Research Institution</h3>

      <p>
        Reserved for future collaboration with universities,
        research centres and organisations contributing to
        independent research and knowledge development.
      </p>

      <span className={styles.partnershipCategory}>
        Research
      </span>
    </article>

    <article className={styles.partnershipCard}>
      <h3>Industry Partner</h3>

      <p>
        Reserved for future collaboration with companies and
        organisations providing practical experience, technical
        learning and pathways into real-world opportunities.
      </p>

      <span className={styles.partnershipCategory}>
        Industry
      </span>
    </article>
  </div>

  <p className={styles.partnershipNote}>
    Partnership framework under development. Organisations shown
    here in the future will represent established or developing
    collaboration rather than promotional endorsement.
  </p>
</section>
   
          </section>
        </PageContainer>
      </main>

      <Footer />
    </>
  );
}