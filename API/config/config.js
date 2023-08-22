require("dotenv").config();

const getJWTPrivateKey = () => {
  return process.env.JWT_PRIVATE_KEY;
};

const getExpAccessToken = () => {
  return process.env.JWT_EXP_ACCESS_TOKEN;
};

const getExpRefreshToken = () => {
  return process.env.JWT_EXP_REFRESH_TOKEN;
};

module.exports = {
  getJWTPrivateKey,
  getExpAccessToken,
  getExpRefreshToken,
};
