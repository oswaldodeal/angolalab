import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

import { authConfig } from "./auth.config";
import { getHoldYouthStaffByEmail } from "./lib/hold-youth/staff";

export const { auth, signIn, signOut, handlers } = NextAuth({
  ...authConfig,

  secret: process.env.AUTH_SECRET,

  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },

      

      async authorize(credentials) {
        const email =
          typeof credentials?.email === "string"
            ? credentials.email.trim()
            : "";

        const password =
          typeof credentials?.password === "string"
            ? credentials.password
            : "";

        if (!email || !password) {
          return null;
        }

        const staff =
          getHoldYouthStaffByEmail(email);

        if (!staff) {
          return null;
        }
        

        if (staff.status !== "active") {
          return null;
        }

        const passwordMatches =
          await bcrypt.compare(
            password,
            staff.password_hash
          );

        if (!passwordMatches) {
          return null;
        }

        return {
          id: String(staff.id),
          name: staff.full_name,
          email: staff.email,
        };
      },
    }),
  ],
});