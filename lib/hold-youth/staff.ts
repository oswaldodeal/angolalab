import db from "@/lib/db";

export type HoldYouthStaffRole =
  | "staff"
  | "administrator";

export type HoldYouthStaffStatus =
  | "active"
  | "inactive";

export type HoldYouthStaff = {
  id: number;
  full_name: string;
  email: string;
  password_hash: string;
  role: HoldYouthStaffRole;
  status: HoldYouthStaffStatus;
  created_at: string;
  updated_at: string;
};

export function getHoldYouthStaffByEmail(
  email: string
) {
  return db
    .prepare(`
      SELECT *
      FROM hold_youth_staff
      WHERE lower(email) = lower(?)
      LIMIT 1
    `)
    .get(email) as HoldYouthStaff | undefined;
}