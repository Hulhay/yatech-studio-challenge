const { getHealth } = require("./health");
const { register, login } = require("./auth");
const { getPrivateMessage } = require("./private");

module.exports = { getHealth, register, login, getPrivateMessage };
