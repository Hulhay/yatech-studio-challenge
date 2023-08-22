const jwt = require("jsonwebtoken");
const {
  getJWTPrivateKey,
  getExpAccessToken,
  getExpRefreshToken,
} = require("../config");

const generateTokens = (user) => {
  const payload = { id: user.id, email: user.email };
  const accessToken = jwt.sign(payload, getJWTPrivateKey(), {
    expiresIn: getExpAccessToken(),
  });
  const refreshToken = jwt.sign(payload, getJWTPrivateKey(), {
    expiresIn: getExpRefreshToken(),
  });

  return { accessToken, refreshToken };
};

module.exports = { generateTokens };
