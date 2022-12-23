import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authorizeUser, UserType } from "../../../database/user";

export default NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {},
      async authorize(credentials) {
        // @ts-ignore
        const { email, password } = credentials;
        const user: UserType | undefined = await authorizeUser({
          email,
          password,
        });
        if (user) return user;
        else return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 60 * 60,
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
