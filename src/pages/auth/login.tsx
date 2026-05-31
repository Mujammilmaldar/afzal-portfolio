// src/pages/auth/login.tsx
import { getCsrfToken, signIn } from "next-auth/react"
import { GetServerSidePropsContext } from "next"
import { useState } from "react"
import { useRouter } from "next/router"

interface Props {
  csrfToken: string
}

export default function Login({ csrfToken }: Props) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const result = await signIn("credentials", {
      redirect: false,
      username,
      password,
    })

    setLoading(false)

    if (result?.error) {
      setError("Invalid username or password. Please try again.")
    } else {
      router.push((router.query.callbackUrl as string) || "/admin")
    }
  }

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      <div style={{
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "16px",
        padding: "48px 40px",
        width: "100%",
        maxWidth: "400px",
        boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
      }}>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <img
            src="/afzalkhan-healthcaredigitalmarketingconsultantMumbai-Logo.svg"
            alt="Afzal Khan Logo"
            style={{ height: "48px", marginBottom: "16px" }}
          />
          <h1 style={{ color: "#fff", fontSize: "24px", fontWeight: "700", margin: "0 0 8px" }}>
            Admin Login
          </h1>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", margin: 0 }}>
            Sign in to manage your portfolio
          </p>
        </div>

        {error && (
          <div style={{
            background: "rgba(239,68,68,0.15)",
            border: "1px solid rgba(239,68,68,0.4)",
            color: "#fca5a5",
            borderRadius: "8px",
            padding: "12px 16px",
            marginBottom: "24px",
            fontSize: "14px",
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />

          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", color: "rgba(255,255,255,0.7)", fontSize: "14px", fontWeight: "500", marginBottom: "8px" }}>
              Username
            </label>
            <input
              name="username"
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
              style={{
                width: "100%",
                padding: "12px 16px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "8px",
                color: "#fff",
                fontSize: "15px",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div style={{ marginBottom: "28px" }}>
            <label style={{ display: "block", color: "rgba(255,255,255,0.7)", fontSize: "14px", fontWeight: "500", marginBottom: "8px" }}>
              Password
            </label>
            <input
              name="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              style={{
                width: "100%",
                padding: "12px 16px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "8px",
                color: "#fff",
                fontSize: "15px",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "14px",
              background: loading ? "rgba(59,130,246,0.5)" : "linear-gradient(135deg, #3b82f6, #1d4ed8)",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: loading ? "not-allowed" : "pointer",
              transition: "all 0.2s ease",
            }}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  )
}

Login.getInitialProps = async (context: GetServerSidePropsContext) => {
  return {
    csrfToken: await getCsrfToken(context),
  }
}

