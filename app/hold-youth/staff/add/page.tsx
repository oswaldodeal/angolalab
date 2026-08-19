import Link from "next/link";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageContainer from "@/components/PageContainer";

import {
  createHoldYouthStudent,
  type HoldYouthPathway,
  type HoldYouthStudentStatus,
} from "@/lib/hold-youth/students";

import styles from "./add.module.css";

export default function AddHoldYouthStudentPage() {
  async function addStudent(formData: FormData) {
    "use server";

    const pathway = formData.get("pathway") as HoldYouthPathway;
    const status = formData.get("status") as HoldYouthStudentStatus;

    createHoldYouthStudent({
      full_name: String(formData.get("full_name") || "").trim(),
      date_of_birth: String(
        formData.get("date_of_birth") || ""
      ),

      

      contact_name: String(
        formData.get("contact_name") || ""
      ).trim(),

      contact_email:
        String(formData.get("contact_email") || "").trim() || null,

      contact_phone: String(
        formData.get("contact_phone") || ""
      ).trim(),

      next_of_kin_name: String(
        formData.get("next_of_kin_name") || ""
      ).trim(),

      next_of_kin_relationship: String(
        formData.get("next_of_kin_relationship") || ""
      ).trim(),

      next_of_kin_phone: String(
        formData.get("next_of_kin_phone") || ""
      ).trim(),

      next_of_kin_email:
        String(
          formData.get("next_of_kin_email") || ""
        ).trim() || null,

      city: String(formData.get("city") || "").trim(),

      pathway,
      status,

      joined_date:
  String(formData.get("joined_date") || "") || null,

notes:
  String(formData.get("notes") || "").trim() || null,

accessed_by: String(
  formData.get("accessed_by") || ""
).trim(),
    });

    revalidatePath("/hold-youth/staff");
    redirect("/hold-youth/staff");
  }

  return (
    <>
      <Navbar />

      <main className={styles.addPage}>
        <PageContainer>
          <section className={styles.panel}>
            <Link
              href="/hold-youth/staff"
              className={styles.backLink}
            >
              ← Student Records
            </Link>

            <header className={styles.hero}>
              <p className={styles.eyebrow}>
                Hold-Youth Internal
              </p>

              <h1>Add Student</h1>

              <p>
                Create a Hold-Youth participant record following
                initial contact and staff review.
              </p>
            </header>

            <form action={addStudent} className={styles.form}>
              <section className={styles.formSection}>
                <div className={styles.sectionHeading}>
                  <span>01</span>
                  <h2>Student Details</h2>
                </div>

                <div className={styles.grid}>
                  <Field
                    label="Full Name"
                    name="full_name"
                    required
                  />

                  <Field
                    label="Date of Birth"
                    name="date_of_birth"
                    type="date"
                    required
                  />

                  
                </div>
              </section>

              <section className={styles.formSection}>
                <div className={styles.sectionHeading}>
                  <span>02</span>
                  <h2>Contact</h2>
                </div>

                <div className={styles.grid}>
                  <Field
                    label="Contact Name"
                    name="contact_name"
                    required
                  />

                  <Field
                    label="Contact Email"
                    name="contact_email"
                    type="email"
                  />

                  <Field
                    label="Contact Phone"
                    name="contact_phone"
                    required
                  />
                </div>
              </section>

              <section className={styles.formSection}>
                <div className={styles.sectionHeading}>
                  <span>03</span>
                  <h2>Next of Kin</h2>
                </div>

                <div className={styles.grid}>
                  <Field
                    label="Next of Kin Name"
                    name="next_of_kin_name"
                    required
                  />

                  <Field
                    label="Relationship"
                    name="next_of_kin_relationship"
                    required
                  />

                  <Field
                    label="Phone"
                    name="next_of_kin_phone"
                    required
                  />

                  <Field
                    label="Email — Optional"
                    name="next_of_kin_email"
                    type="email"
                  />
                </div>
              </section>

              <section className={styles.formSection}>
                <div className={styles.sectionHeading}>
                  <span>04</span>
                  <h2>Programme</h2>
                </div>

                <div className={styles.grid}>
                  <Field
                    label="City"
                    name="city"
                    defaultValue="Manchester"
                    required
                  />

                  <label className={styles.field}>
                    <span>Pathway</span>

                    <select name="pathway" required>
                      <option value="authors">
                        Authors
                      </option>

                      <option value="technology">
                        Technology
                      </option>

                      <option value="research">
                        Research
                      </option>

                      <option value="business_enterprise">
                        Business & Enterprise
                      </option>
                    </select>
                  </label>

                  <label className={styles.field}>
                    <span>Status</span>

                    <select
                      name="status"
                      defaultValue="enquiry"
                      required
                    >
                      <option value="enquiry">
                        Enquiry
                      </option>

                      <option value="active">
                        Active
                      </option>

                      <option value="completed">
                        Completed
                      </option>

                      <option value="inactive">
                        Inactive
                      </option>
                    </select>
                  </label>

                  <Field
                    label="Joined Date"
                    name="joined_date"
                    type="date"
                  />
                </div>
              </section>

              <section className={styles.formSection}>
                <div className={styles.sectionHeading}>
                  <span>05</span>
                  <h2>Internal Notes</h2>

                  <label className={styles.field}>
  <span>Accessed By</span>

  <input
    name="accessed_by"
    type="text"
    placeholder="Staff member name"
    required
  />
</label>
                </div>

                <label className={styles.field}>
                  <span>Notes</span>

                  <textarea
                    name="notes"
                    rows={5}
                    placeholder="Internal Hold-Youth notes..."
                  />
                </label>
              </section>

              <div className={styles.actions}>
                <Link
                  href="/hold-youth/staff"
                  className={styles.cancel}
                >
                  Cancel
                </Link>

                <button type="submit">
                  Create Student Record
                </button>
              </div>
            </form>
          </section>
        </PageContainer>
      </main>

      <Footer />
    </>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  defaultValue?: string;
};

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
  defaultValue,
}: FieldProps) {
  return (
    <label className={styles.field}>
      <span>{label}</span>

      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </label>
  );
}