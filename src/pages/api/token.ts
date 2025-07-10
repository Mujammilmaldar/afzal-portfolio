// src/pages/api/token.ts
import { getServerSession } from "next-auth/next"

import dynamic from 'next/dynamic';
const authOptions = dynamic(() => import('../../app/api/auth/[...nextauth]'), { ssr: false });
export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions)

  if (!session) {
    return res.status(401).json({ message: "Unauthorized" })
  }

  return res.json({ id: session.user.email })
}
