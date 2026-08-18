import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageContainer from "@/components/PageContainer";

import {
  getHoldYouthStudents,
  type HoldYouthStudent,
} from "@/lib/hold-youth/students";

import styles from "./staff.module.css";

export default function HoldYouthStaffPage() {
  const students = getHoldYouthStudents();

  return (
    <>
      <Navbar />

      <main className={styles.staffPage}>
        <PageContainer>
          <section className={styles.dashboard}>
            <header className={styles.hero}>
              <div>
                <p className={styles.eyebrow}>
                  Hold-Youth Internal
                </p>

                <h1>Student Records</h1>

                <p className={styles.description}>
                  Internal staff workspace for managing Hold-Youth
                  participant records and programme information.
                </p>
              </div>

              <Link
                href="/hold-youth"
                className={styles.backLink}
              >
                ← Hold-Youth
              </Link>
            </header>

            <section className={styles.summary}>
              <div>
                <p>Total Students</p>
                <strong>{students.length}</strong>
              </div>

              <div>
                <p>Active</p>
                <strong>
                  {
                    students.filter(
                      (student) => student.status === "active"
                    ).length
                  }
                </strong>
              </div>
              

              <div>
                <p>Enquiries</p>
                <strong>
                  {
                    students.filter(
                      (student) => student.status === "enquiry"
                    ).length
                  }
                </strong>
              </div>

              <div>
                <p>Location</p>
                <strong>Manchester</strong>
              </div>
            </section>

            <section className={styles.section}>

              <Link
  href="/hold-youth/staff/add"
  className={styles.addStudentLink}
>
  + Add Student
</Link>
              <div className={styles.sectionHeader}>
                <div>
                  <p className={styles.sectionNumber}>01</p>
                  <h2>Student Register</h2>
                </div>

                <p>
                  Test records only during database development.
                </p>
              </div>

              {students.length === 0 ? (
                <div className={styles.emptyState}>
                  No Hold-Youth student records found.
                </div>
              ) : (
                <div className={styles.studentList}>
                  {students.map((student) => (
                    <StudentRow
                      key={student.id}
                      student={student}
                    />
                  ))}
                </div>
              )}
            </section>
          </section>
        </PageContainer>
      </main>

      <Footer />
    </>
  );
}

function StudentRow({
  student,
}: {
  student: HoldYouthStudent;
}) {
  return (
    <article className={styles.studentRow}>
      <div>
  <Link
    href={`/hold-youth/staff/students/${student.id}`}
    className={styles.studentLink}
  >
    <p className={styles.studentId}>
      HY-{String(student.id).padStart(4, "0")}
    </p>

    <h3>{student.full_name}</h3>
  </Link>
</div>

      <div>
        <p className={styles.label}>Pathway</p>
        <p>{formatPathway(student.pathway)}</p>
      </div>

      <div>
        <p className={styles.label}>Status</p>
        <p className={styles.status}>
          {formatStatus(student.status)}
        </p>
      </div>

      <div>
        <p className={styles.label}>Location</p>
        <p>{student.city}</p>
      </div>
    </article>
  );
}

function formatPathway(pathway: HoldYouthStudent["pathway"]) {
  switch (pathway) {
    case "business_enterprise":
      return "Business & Enterprise";
    case "authors":
      return "Authors";
    case "technology":
      return "Technology";
    case "research":
      return "Research";
  }
}

function formatStatus(status: HoldYouthStudent["status"]) {
  return status.charAt(0).toUpperCase() + status.slice(1);
}