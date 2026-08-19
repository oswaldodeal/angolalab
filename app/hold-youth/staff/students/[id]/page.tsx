import Link from "next/link";
import { notFound } from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageContainer from "@/components/PageContainer";

import {
  getHoldYouthStudentById,
  type HoldYouthStudent,
} from "@/lib/hold-youth/students";

import styles from "./student.module.css";

type StudentRecordPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function StudentRecordPage({
  params,
}: StudentRecordPageProps) {
  const { id } = await params;

  const studentId = Number(id);

  if (!Number.isInteger(studentId) || studentId <= 0) {
    notFound();
  }

  const student = getHoldYouthStudentById(studentId);

  if (!student) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className={styles.studentPage}>
        <PageContainer>
          <section className={styles.record}>
            <Link
              href="/hold-youth/staff"
              className={styles.backLink}
            >
              ← Student Records
            </Link>

            <header className={styles.hero}>
              <div>
                <p className={styles.eyebrow}>
                  Hold-Youth Internal
                </p>

                <p className={styles.studentId}>
                  HY-{String(student.id).padStart(4, "0")}
                </p>

                <h1>{student.full_name}</h1>

                <p className={styles.description}>
                  Internal Hold-Youth participant record.
                </p>
              </div>

              <div className={styles.statusBlock}>
                <span>Status</span>
                <strong>{formatStatus(student.status)}</strong>
              </div>
            </header>

            <RecordSection number="01" title="Student Details">
              <RecordField
                label="Full Name"
                value={student.full_name}
              />

              <RecordField
                label="Date of Birth"
                value={student.date_of_birth}
              />

              
            </RecordSection>

            <RecordSection number="02" title="Contact">
              <RecordField
                label="Contact Name"
                value={student.contact_name}
              />

              <RecordField
                label="Contact Email"
                value={student.contact_email}
              />

              <RecordField
                label="Contact Phone"
                value={student.contact_phone}
              />
            </RecordSection>

            <RecordSection number="03" title="Next of Kin">
              <RecordField
                label="Name"
                value={student.next_of_kin_name}
              />

              <RecordField
                label="Relationship"
                value={student.next_of_kin_relationship}
              />

              <RecordField
                label="Phone"
                value={student.next_of_kin_phone}
              />

              <RecordField
                label="Email"
                value={student.next_of_kin_email}
              />
            </RecordSection>

            <RecordSection number="04" title="Programme">
              <RecordField
                label="Location"
                value={student.city}
              />

              <RecordField
                label="Pathway"
                value={formatPathway(student.pathway)}
              />

              <RecordField
                label="Status"
                value={formatStatus(student.status)}
              />

              <RecordField
                label="Joined Date"
                value={student.joined_date}
              />
            </RecordSection>

            <section className={styles.notesSection}>
              <div className={styles.sectionHeading}>
                <span>05</span>
                <h2>Internal Record</h2>
              </div>

              <div className={styles.notesBlock}>
                <div>
                  <p className={styles.label}>Notes</p>
                  <p>{student.notes || "No internal notes recorded."}</p>
                </div>

                <div className={styles.accessedBy}>
                  <p className={styles.label}>Accessed By</p>
                  <p>
                    {student.accessed_by ||
                      "Not recorded for this record."}
                  </p>
                </div>
              </div>
            </section>
          </section>
        </PageContainer>
      </main>

      <Footer />
    </>
  );
}

function RecordSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeading}>
        <span>{number}</span>
        <h2>{title}</h2>
      </div>

      <div className={styles.fieldGrid}>
        {children}
      </div>
    </section>
  );
}

function RecordField({
  label,
  value,
}: {
  label: string;
  value: string | null;
}) {
  return (
    <div className={styles.field}>
      <p className={styles.label}>{label}</p>
      <p>{value || "Not provided"}</p>
    </div>
  );
}

function formatPathway(
  pathway: HoldYouthStudent["pathway"]
) {
  switch (pathway) {
    case "authors":
      return "Authors";

    case "technology":
      return "Technology";

    case "research":
      return "Research";

    case "business_enterprise":
      return "Business & Enterprise";
  }
}

function formatStatus(
  status: HoldYouthStudent["status"]
) {
  return status.charAt(0).toUpperCase() + status.slice(1);
}