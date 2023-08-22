const jwt = require("jsonwebtoken");
const {
  getJWTPrivateAccessKey,
  getJWTPrivateRefreshKey,
  getExpAccessToken,
  getExpRefreshToken,
} = require("../config");

const generateTokens = (user) => {
  const payload = { id: user.id, email: user.email };
  const accessToken = jwt.sign(payload, getJWTPrivateAccessKey(), {
    expiresIn: getExpAccessToken(),
  });
  const refreshToken = jwt.sign(payload, getJWTPrivateRefreshKey(), {
    expiresIn: getExpRefreshToken(),
  });

  return { accessToken, refreshToken };
};

module.exports = { generateTokens };
