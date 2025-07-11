// src/pages/api/token.ts
import { getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]" // Correct import (NOT dynamic!)
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions)

  if (!session || !session.user?.email) {
    return res.status(401).json({ message: "Unauthorized" })
  }

  return res.json({ id: session.user.email }) // Tina needs an "id" field
}
