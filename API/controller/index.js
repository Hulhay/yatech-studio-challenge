const { getHealth } = require("./health");
const { register, login, refreshToken } = require("./auth");
const { getPrivateMessage } = require("./private");

module.exports = {
  getHealth,
  register,
  login,
  getPrivateMessage,
  refreshToken,
};
