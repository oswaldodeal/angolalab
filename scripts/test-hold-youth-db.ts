import db from "../lib/db";

const insertStudent = db.prepare(`
  INSERT INTO hold_youth_students (
    full_name,
    date_of_birth,
    age_group,
    contact_name,
    contact_email,
    contact_phone,
    next_of_kin_name,
    next_of_kin_relationship,
    next_of_kin_phone,
    next_of_kin_email,
    city,
    pathway,
    status,
    joined_date,
    notes
  )
  VALUES (
    @full_name,
    @date_of_birth,
    @age_group,
    @contact_name,
    @contact_email,
    @contact_phone,
    @next_of_kin_name,
    @next_of_kin_relationship,
    @next_of_kin_phone,
    @next_of_kin_email,
    @city,
    @pathway,
    @status,
    @joined_date,
    @notes
  )
`);

const result = insertStudent.run({
  full_name: "Test Student",
  date_of_birth: "2010-05-14",
  age_group: "Youth",

  contact_name: "Test Parent",
  contact_email: "parent@example.com",
  contact_phone: "07000000000",

  next_of_kin_name: "Test Kin",
  next_of_kin_relationship: "Uncle",
  next_of_kin_phone: "07000000001",
  next_of_kin_email: null,

  city: "Manchester",

  pathway: "technology",
  status: "active",

  joined_date: "2026-08-12",

  notes: "Fictional test record for Hold-Youth database development.",
});

console.log("Inserted student ID:", result.lastInsertRowid);

const student = db
  .prepare(`
    SELECT *
    FROM hold_youth_students
    WHERE id = ?
  `)
  .get(result.lastInsertRowid);

console.log("Student record:");
console.log(student);