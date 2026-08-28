import bcrypt from "bcryptjs";
import db from "../lib/db";

const email = "staff@example.com";
const password = "HoldYouth-Test-2026";

const passwordHash = bcrypt.hashSync(password, 12);

const existing = db
  .prepare(`
    SELECT id
    FROM hold_youth_staff
    WHERE email = ?
  `)
  .get(email);

if (existing) {
  console.log("Test staff account already exists.");
} else {
  db.prepare(`
    INSERT INTO hold_youth_staff (
      full_name,
      email,
      password_hash,
      role,
      status
    )
    VALUES (?, ?, ?, ?, ?)
  `).run(
    "Test Staff",
    email,
    passwordHash,
    "administrator",
    "active"
  );

  console.log("Test staff account created.");
}