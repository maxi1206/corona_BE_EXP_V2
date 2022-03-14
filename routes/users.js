var express = require('express');
var router = express.Router();
const db = require("../models");
const models = db.sequelize.models;

/* GET users listing. */
router.get('/', async function(req, res, next) {
  res.send('respond with a resource');
  console.log(models);
  const users = await models.User.findAll();
  console.log(users)

});

module.exports = router;
