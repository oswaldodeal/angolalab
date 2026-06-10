import db from "../lib/db";

const stmt = db.prepare(`
INSERT INTO tourism_reports
(province, visitors, revenue, season, report_date, notes)
VALUES (?, ?, ?, ?, ?, ?)
`);

stmt.run(
  "Luanda",
  12500,
  220000,
  "High",
  "2026-06-01",
  "Strong international arrivals"
);

console.log("Data inserted.");