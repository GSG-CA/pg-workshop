const express = require("express");
const getUsers = require("../database/queries/getData");
const addUser = require('../database/queries/postData');
const users = require("./static");

const router = express.Router();

router.get("/users", (req, res) => {
  res.json(users);
});

router.get('/db-users', (req, res) => {
  console.log(process.env.NODE_ENV);
  getUsers()
    .then(data => res.json(data.rows))
})


router.post('/create-user', (req, res) => {
  const {name, location} = req.body;

  addUser(name, location)
    .then(data => res.redirect('/'));
})

module.exports = router;
