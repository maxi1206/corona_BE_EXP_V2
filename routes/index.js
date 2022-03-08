var express = require('express');
var router = express.Router();

const { sequelize, User } = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/users', async (req, res) => {
  const { name } = req.body

  try{
    const user = await User.create({ name: name})
    return res.json(user);
  }catch(err){
    console.log(err)
    return res.status(500).json(err)
  }
})

module.exports = router;
