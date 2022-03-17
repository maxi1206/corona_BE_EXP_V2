var express = require('express');
var router = express.Router();
const db = require("../models");
const models = db.sequelize.models;

/* GET users listing. */
router.get('/', async function(req, res, next) {
  // res.send('respond with a resource');
  // console.log(models);
  const users = await models.User.findAll();
  // console.log(users)
  const user = await models.User.findOne({email: 'geiler.typ@gmail.com'});
  // console.log(user);
  res.send(user);
});

router.post('/', async function(req,res,next){
  console.log(req.body.email)
  if(req.body){
    const user = await models.User.findOne({email: req.body.email})
    if(req.body.password == user.dataValues.password){
      console.log(user)
      res.send(user)
    }else{
      res.send('falsches Passwort')
    }
  }else{
    res.send('kein User mit der email vorhanden')
  }
})

module.exports = router;