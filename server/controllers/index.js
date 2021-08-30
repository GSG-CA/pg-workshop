const express = require("express");
const users = require("./static");
const dynamic = require('./dynamic');

const router = express.Router();

router.get("/users", (req, res) => {
  res.json(users);
});

router.get('/dynamic',dynamic);

module.exports = router;
