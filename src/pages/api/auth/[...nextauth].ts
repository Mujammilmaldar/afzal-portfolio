import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Replace with your real check
        if (credentials?.username === "admin" && credentials?.password === "admin123") {
          return { id: "admin", name: "Admin", email: "admin@example.com" }
        }
        return null
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/login",
  },
}

export default NextAuth(authOptions)
