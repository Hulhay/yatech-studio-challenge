const db = require("./database");
const {
  getJWTPrivateAccessKey,
  getJWTPrivateRefreshKey,
  getExpAccessToken,
  getExpRefreshToken,
} = require("./config");

module.exports = {
  db,
  getJWTPrivateAccessKey,
  getJWTPrivateRefreshKey,
  getExpAccessToken,
  getExpRefreshToken,
};
