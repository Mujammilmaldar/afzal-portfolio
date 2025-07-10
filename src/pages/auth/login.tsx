// src/pages/auth/login.tsx
import { getCsrfToken, signIn } from "next-auth/react"

export default function Login({ csrfToken }) {
  return (
    <form method="post" action="/api/auth/callback/credentials">
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <input name="username" type="text" placeholder="Username" />
      <input name="password" type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  )
}

Login.getInitialProps = async (context) => {
  return {
    csrfToken: await getCsrfToken(context),
  }
}
