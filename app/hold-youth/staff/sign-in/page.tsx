import Link from "next/link";
import { signIn } from "@/auth";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageContainer from "@/components/PageContainer";

import styles from "./sign-in.module.css";

export default function HoldYouthStaffSignInPage() {
  return (
    <>
      <Navbar />

      <main className={styles.signInPage}>
        <PageContainer>
          <section className={styles.panel}>
            <Link
              href="/hold-youth"
              className={styles.backLink}
            >
              ← Hold-Youth
            </Link>

            <div className={styles.signInCard}>
              <p className={styles.eyebrow}>
                Hold-Youth Internal
              </p>

              <h1>Staff Sign-In</h1>

              <p className={styles.description}>
                Authorised Hold-Youth staff use this secure
                area to access participant records and
                programme administration.
              </p>

              <div className={styles.securityNotice}>
                🔐 Staff access only
              </div>

              <form
  action={async (formData) => {
    "use server";

    await signIn("credentials", formData);
  }}
  className={styles.form}
>
  <label className={styles.field}>
    <span>Email</span>

    <input
      type="email"
      name="email"
      placeholder="staff@example.com"
      required
    />
  </label>

  <label className={styles.field}>
    <span>Password</span>

    <input
      type="password"
      name="password"
      placeholder="Enter your password"
      required
    />
  </label>

  <input
    type="hidden"
    name="redirectTo"
    value="/hold-youth/staff"
  />

  <button type="submit">
    Sign In
  </button>
</form>
            </div>
          </section>
        </PageContainer>
      </main>

      <Footer />
    </>
  );
}