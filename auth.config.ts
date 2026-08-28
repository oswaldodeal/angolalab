import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/hold-youth/staff/sign-in",
  },

  providers: [],
} satisfies NextAuthConfig;