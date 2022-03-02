const express = require("express");
const users = require("./static");
const getUsers = require('../database/queries/getData');
const addUsers = require('../database/queries/postData');

const router = express.Router();


router.get("/users", (req, res) => {
  // console.log( '1111', process.env);
  getUsers()
    .then(data => {
      // console.log(data.rows);
      res.json(data.rows);
    })
});

router.post('/create-user', (req, res) => {
  const {name, location} = req.body;
  addUsers(name, location)
    .then((data) => {
      // console.log(data.rows[0]);
      res.redirect('/');
    });
    
  
})

module.exports = router;
