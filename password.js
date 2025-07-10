// hash.js (run using node)
const bcrypt = require("bcrypt")

const password = "afzallogin123"; // change to your actual password

const run = async () => {
  const hash = await bcrypt.hash(password, 10);
  console.log("HASHED PASSWORD:", hash);
};

run();
