require("dotenv").config();

const getJWTPrivateAccessKey = () => {
  return process.env.JWT_PRIVATE_ACCESS_KEY;
};

const getJWTPrivateRefreshKey = () => {
  return process.env.JWT_PRIVATE_REFRESH_KEY;
};

const getExpAccessToken = () => {
  return process.env.JWT_EXP_ACCESS_TOKEN;
};

const getExpRefreshToken = () => {
  return process.env.JWT_EXP_REFRESH_TOKEN;
};

module.exports = {
  getJWTPrivateAccessKey,
  getJWTPrivateRefreshKey,
  getExpAccessToken,
  getExpRefreshToken,
};
