const { getHealth } = require("./health");
const { register, login, refreshToken } = require("./auth");
const { getPrivateMessage } = require("./private");
const {
  insertProducts,
  getProducts,
  updateProduct,
  deleteProduct,
} = require("./products");

module.exports = {
  getHealth,
  register,
  login,
  getPrivateMessage,
  refreshToken,
  insertProducts,
  getProducts,
  updateProduct,
  deleteProduct,
};
