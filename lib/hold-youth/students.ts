import db from "@/lib/db";

export type HoldYouthPathway =
  | "authors"
  | "technology"
  | "research"
  | "business_enterprise";

export type HoldYouthStudentStatus =
  | "enquiry"
  | "active"
  | "completed"
  | "inactive";

export type HoldYouthStudent = {
  id: number;
  full_name: string;
  date_of_birth: string;

  contact_name: string;
  contact_email: string | null;
  contact_phone: string;

  next_of_kin_name: string;
  next_of_kin_relationship: string;
  next_of_kin_phone: string;
  next_of_kin_email: string | null;

  city: string;
  pathway: HoldYouthPathway;
  status: HoldYouthStudentStatus;
  joined_date: string | null;

  notes: string | null;
  accessed_by: string;

  created_at: string;
  updated_at: string;
};

export function getHoldYouthStudents() {
  return db
    .prepare(`
      SELECT *
      FROM hold_youth_students
      ORDER BY created_at DESC
    `)
    .all() as HoldYouthStudent[];
}

export function getHoldYouthStudentById(id: number) {
  return db
    .prepare(`
      SELECT *
      FROM hold_youth_students
      WHERE id = ?
    `)
    .get(id) as HoldYouthStudent | undefined;
}

export type CreateHoldYouthStudentInput = {
  full_name: string;
  date_of_birth: string;

  contact_name: string;
  contact_email: string | null;
  contact_phone: string;

  next_of_kin_name: string;
  next_of_kin_relationship: string;
  next_of_kin_phone: string;
  next_of_kin_email: string | null;

  city: string;
  pathway: HoldYouthPathway;
  status: HoldYouthStudentStatus;
  joined_date: string | null;

  notes: string | null;
  accessed_by: string;
};

export function createHoldYouthStudent(
  student: CreateHoldYouthStudentInput
) {
  const statement = db.prepare(`
    INSERT INTO hold_youth_students (
      full_name,
      date_of_birth,
      
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
      notes,
      accessed_by
    )
    VALUES (
      @full_name,
      @date_of_birth,
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
      @notes,
      @accessed_by
    )
  `);

  const result = statement.run(student);

  return getHoldYouthStudentById(
    Number(result.lastInsertRowid)
  );
}