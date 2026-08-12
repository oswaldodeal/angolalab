import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageContainer from "@/components/PageContainer";

import styles from "./join.module.css";

export default function HoldYouthJoinPage() {
  return (
    <>
      <Navbar />

      <main className={styles.joinPage}>
        <PageContainer>
          <section className={styles.joinPanel}>
            <Link
              href="/hold-youth"
              className={styles.backLink}
            >
              ← Back to Hold-Youth
            </Link>

            <header className={styles.hero}>
              <p className={styles.eyebrow}>
                Hold-Youth
              </p>

              <h1>Join Hold-Youth</h1>

              <p className={styles.intro}>
                Hold-Youth training is currently available in Manchester.
              </p>
            </header>

            <section className={styles.section}>
              <p>
                If you are interested in joining the programme,
                please contact AngolaLab Hold-Youth using the
                details below.
              </p>

              <p>
                A member of the Hold-Youth team will discuss the
                programme with you and explain the next steps.
              </p>

              <p>
                Students do not need to complete an online
                application form. Registration is completed by
                Hold-Youth staff following initial contact.
              </p>
            </section>

            <section className={styles.contactCard}>
              <p className={styles.label}>
                Contact Hold-Youth
              </p>

              <h2>Manchester Training</h2>

              <p>
                Manchester, United Kingdom
              </p>

              <p>
                Contact details will be provided here.
              </p>
            </section>

            <p className={styles.note}>
              Hold-Youth staff manage registration, pathway
              allocation and student records internally.
            </p>
          </section>
        </PageContainer>
      </main>

      <Footer />
    </>
  );
}