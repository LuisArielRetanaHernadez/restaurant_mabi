import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";

import { z } from "zod";
import { fetchLoginEmplooye } from "./app/lib/data";

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials): Promise<any> {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const employee = await fetchLoginEmplooye(email, password);
          if (!employee) {
            return null;
          }
          return employee;
        }
      },
    }),
  ],
});
