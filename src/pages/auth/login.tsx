// src/pages/auth/login.tsx
import { getCsrfToken } from "next-auth/react"
import { GetServerSidePropsContext } from "next"

interface Props {
  csrfToken: string
}

export default function Login({ csrfToken }: Props) {
  return (
    <form method="post"  name="callbackUrl" action="/api/auth/callback/credentials">
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <input name="username" type="text" placeholder="Username" />
      <input name="password" type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  )
}

Login.getInitialProps = async (context: GetServerSidePropsContext) => {
  return {
    csrfToken: await getCsrfToken(context),
  }
}
