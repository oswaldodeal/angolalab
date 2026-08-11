
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
                <span>Join</span>
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

            <section className={styles.section}>
  <p className={styles.sectionNumber}>03</p>

  <h2>Institutional Partnerships</h2>

  <div className={styles.partnershipBlock}>
    <p>
      Hold-Youth works with educational institutions, businesses
      and community organisations to establish the resources,
      expertise and environments required to support practical
      youth development.
    </p>

    <p>
      Partnerships are developed around the needs of the programme
      and the communities in which Hold-Youth operates.
    </p>

    <Link
      href="/contact"
      className={styles.partnershipLink}
    >
      Interested in supporting Hold-Youth? Contact AngolaLab →
    </Link>
  </div>
</section>
          </section>
        </PageContainer>
      </main>

      <Footer />
    </>
  );
}