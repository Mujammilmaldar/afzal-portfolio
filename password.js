// hash.js - run using: node password.js YOUR_PASSWORD
// Example: node password.js mySecurePassword123
const bcrypt = require("bcrypt")

const password = process.argv[2]

if (!password) {
  console.error("Usage: node password.js <your-password>")
  process.exit(1)
}

const run = async () => {
  const hash = await bcrypt.hash(password, 12)
  console.log("HASHED PASSWORD (paste this into .env.local as ADMIN_PASSWORD_HASH):")
  console.log(hash)
}

run()
