import Database from "better-sqlite3";
import path from "path";

const db = new Database(
  path.join(process.cwd(), "angolalab.db")
);

db.exec(`
CREATE TABLE IF NOT EXISTS tourism_reports (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  province TEXT NOT NULL,
  visitors INTEGER NOT NULL,
  revenue REAL NOT NULL,
  season TEXT,
  report_date TEXT NOT NULL,
  notes TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS places (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  type TEXT NOT NULL,
  location TEXT NOT NULL,
  description TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS place_reviews (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  place_id INTEGER NOT NULL,
  reviewer_name TEXT,
  cleanliness INTEGER NOT NULL,
  food INTEGER,
  location_score INTEGER NOT NULL,
  hygiene INTEGER NOT NULL,
  service INTEGER,
  safety INTEGER,
  value_for_money INTEGER,
  comment TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (place_id) REFERENCES places(id)
);

`);

export default db;