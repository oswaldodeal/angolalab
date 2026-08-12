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

CREATE TABLE IF NOT EXISTS hold_youth_students (
  id INTEGER PRIMARY KEY AUTOINCREMENT,

  full_name TEXT NOT NULL,
  date_of_birth TEXT NOT NULL,
  age_group TEXT,

  contact_name TEXT NOT NULL,
  contact_email TEXT,
  contact_phone TEXT NOT NULL,

  next_of_kin_name TEXT NOT NULL,
  next_of_kin_relationship TEXT NOT NULL,
  next_of_kin_phone TEXT NOT NULL,
  next_of_kin_email TEXT,

  city TEXT NOT NULL,

  pathway TEXT NOT NULL
    CHECK (
      pathway IN (
        'authors',
        'technology',
        'research',
        'business_enterprise'
      )
    ),

  status TEXT NOT NULL DEFAULT 'enquiry'
    CHECK (
      status IN (
        'enquiry',
        'active',
        'completed',
        'inactive'
      )
    ),

  joined_date TEXT,

  notes TEXT,

  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

`);

export default db;