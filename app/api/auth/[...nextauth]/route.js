import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        nickname: { label: "Nickname", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const res = await fetch(`http://localhost:6868/api/auth/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              nickname: credentials.nickname,
              password: credentials.password,
            }),
          });

          if (!res.ok) {
            return null;
          }

          const parsedResponse = await res.json();
          const jwt = parsedResponse.token;

          const user = {
            nickname: parsedResponse.nickname,
            email: parsedResponse.email,
            jwt,
            ...parsedResponse,
          };

          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) token = user;
      console.log(token);

      return token;
    },
    session: async ({ session, token }) => {
      session.user = { ...token };
      return session;
    },
  },

  pages: {
    signIn: "/",
    signOut: "/",
    error: "/",
    // verifyRequest: '/auth/verify-request',
    // newUser: '/auth/new-user'
  },
});

export { handler as GET, handler as POST };
