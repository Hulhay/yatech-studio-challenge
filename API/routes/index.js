require("express-router-group");
const express = require("express");
const { getHealth, register, login } = require("../controller");

const router = express.Router();

// health router
router.group("/api/v1/health", (r) => {
  r.get("/", getHealth);
});

// auth router
router.group("/api/v1/auth", (r) => {
  r.post("/register", register);
  r.post("/login", login);
});

module.exports = router;
