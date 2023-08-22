require("express-router-group");
const express = require("express");
const { getHealth, register } = require("../controller");

const router = express.Router();

// health router
router.group("/api/v1/health", (r) => {
  r.get("/", getHealth);
});

// auth router
router.group("/api/v1/auth", (r) => {
  r.post("/register", register);
});

module.exports = router;
