import type { NextAuthConfig } from "next-auth";

const pagesProtected: string[] = [""];

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      if (pagesProtected.includes(nextUrl.pathname)) {
        if (!isLoggedIn) return true;
      } else if (isLoggedIn) {
        return Response.redirect(new URL(nextUrl.pathname, nextUrl));
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
