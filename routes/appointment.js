var express = require('express');
var router = express.Router();
const db = require("../models");
const models = db.sequelize.models;
const sequelize = require('sequelize')

/* GET users listing. */
// router.get('/', async function(req, res, next) {
//   // res.send('respond with a resource');
//   // console.log(models);
//   const users = await models.User.findAll();
//   // console.log(users)
//   const user = await models.User.findOne({email: 'geiler.typ@gmail.com'});
//   // console.log(user);
//   res.send(user);
// });

router.post('/', async function(req,res,next){
  let date = req.body;
  const query = await db.sequelize.query('SELECT * FROM appointments WHERE `date` = "'+date.date+'"');
  res.send(query[0]);
})

module.exports = router;