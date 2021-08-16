const express = require("express");
const {getDataQuery, postDataQuery} = require('../database/queries');

const router = express.Router();

router.get("/users", (req, res) => {
  getDataQuery()
  .then(result => res.json(result.rows))
  .catch(err => res.status(500).json({msg: 'Internal Server Error'}));
});

router.post('/create-user', (req, res) => {
  const {name, location} = req.body
  postDataQuery(name, location)
  .then(result => res.redirect('/'))
  .catch(err => res.status(500).json({msg: 'Internal Server Error'}));
})

module.exports = router;
