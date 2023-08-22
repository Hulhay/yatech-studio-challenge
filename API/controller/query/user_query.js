const getUserByEmailQuery = (email) => {
  return `SELECT * FROM users WHERE email = '${email}'`;
};

const insertNewUser = (name, email, password) => {
  return `INSERT INTO users (name, email, password) VALUES ('${name}', '${email}', '${password}')`;
};

module.exports = { getUserByEmailQuery, insertNewUser };
