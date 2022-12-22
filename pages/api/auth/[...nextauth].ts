import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authorizeUser } from "../../../database/user";

export default NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials;
        const user = await authorizeUser({ email, password });
        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 15 * 60,
  },
  callbacks: {
    async jwt({ token, user }) {
      token.id = 1;
      token.accessToken = user?.id;
      return token;
    },

    async session({ session }) {
      //   session.accessToken = token.accessToken;
      return session;
    },
  },
});
