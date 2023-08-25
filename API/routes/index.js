require("express-router-group");
const express = require("express");
const {
  getHealth,
  register,
  login,
  getPrivateMessage,
  refreshToken,
  insertProducts,
  getProducts,
  updateProduct,
  deleteProduct,
} = require("../controller");
const { authorizeJWT } = require("../middleware");

const router = express.Router();

// health router
router.group("/api/v1/health", (r) => {
  r.get("/", getHealth);
});

// auth router
router.group("/api/v1/auth", (r) => {
  r.post("/register", register);
  r.post("/login", login);
  r.post("/refresh-token", refreshToken);
});

// private router
router.group("/api/v1/private", authorizeJWT, (r) => {
  r.get("/", getPrivateMessage);
});

// product router
router.group("/api/v1/products", authorizeJWT, (r) => {
  r.post("/", insertProducts);
  r.get("/", getProducts);
  r.patch("/:id", updateProduct);
  r.delete("/:id", deleteProduct);
});

module.exports = router;
