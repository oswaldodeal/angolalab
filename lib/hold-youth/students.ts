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
  age_group: string | null;

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