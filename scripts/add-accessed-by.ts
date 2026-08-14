import db from "../lib/db";

const columns = db
  .prepare("PRAGMA table_info(hold_youth_students)")
  .all() as { name: string }[];

const exists = columns.some(
  (column) => column.name === "accessed_by"
);

if (exists) {
  console.log("accessed_by already exists.");
} else {
  db.exec(`
    ALTER TABLE hold_youth_students
    ADD COLUMN accessed_by TEXT;
  `);

  console.log("accessed_by added successfully.");
}