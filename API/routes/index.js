require("express-router-group");
const express = require("express");
const { getHealth } = require("../controller");

const router = express.Router();

// health router
router.group("/api/v1/health", (r) => {
  r.get("/", getHealth);
});

module.exports = router;
