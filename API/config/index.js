const db = require("./database");
const {
  getExpAccessToken,
  getExpRefreshToken,
  getJWTPrivateKey,
} = require("./config");

module.exports = {
  db,
  getExpAccessToken,
  getExpRefreshToken,
  getJWTPrivateKey,
};
