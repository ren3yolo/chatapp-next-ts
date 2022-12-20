import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {},
      async authorize() {
        const user = {
          id: "1",
          email: "yourname@example.com",
          password: "123",
        };
        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  jwt: {
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
