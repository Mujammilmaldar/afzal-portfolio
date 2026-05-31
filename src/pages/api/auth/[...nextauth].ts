import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) return null

        const adminUsername = process.env.ADMIN_USERNAME
        const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH

        if (!adminUsername || !adminPasswordHash) {
          console.error("ADMIN_USERNAME or ADMIN_PASSWORD_HASH env vars not set")
          return null
        }

        const usernameMatch = credentials.username === adminUsername
        const passwordMatch = await bcrypt.compare(credentials.password, adminPasswordHash)

        if (usernameMatch && passwordMatch) {
          return { id: "admin", name: "Admin", email: process.env.ADMIN_EMAIL || "admin@example.com" }
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
