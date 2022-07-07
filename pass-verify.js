const bcrypt = require('bcrypt');

async function verifyPassword() {
  const myPassword = 'admin123';
  const hash = '$2b$10$7kTB.Smzs9RsH7rMDsUCAu3EGTMqcZsRmN6zDMiuuSwoNEs7XWApG';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword();
