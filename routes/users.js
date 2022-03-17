var express = require('express');
var router = express.Router();
const db = require('../models');
const models = db.sequelize.models;

/* GET users listing. */
router.get('/', async function (req, res, next) {
  // res.send('respond with a resource');
  console.log(models);
  const users = await models.User.findAll();
  // console.log(users)
  const user = await models.User.findOne({email: 'geiler.typ@gmail.com'});
  console.log(user);
  res.send(user);

});

router.get('/analysis', async function (req, res, next) {
  const mainQuery = await db.sequelize.query('select u.id as userId,a.id as appointmentId,u.firstName,u.age as age,g.displayName as gender,v.displayName as vaccine from users u join appointments a on a.UserId = u.id join genders g on g.id = u.genderId join vaccines v on v.id = a.vaccineId', {type: db.Sequelize.QueryTypes.SELECT});
  const illnessQuery = await db.sequelize.query('select u.id as userId, i.displayName as illness from users u left join userillness u2 on u2.UserId = u.id left join illnesses i on i.id = u2.illnessId; ', {type: db.Sequelize.QueryTypes.SELECT});
  const sideeffectQuery = await db.sequelize.query('select a.id as appointmentId, s.displayName as Nebenwirkungen from appointments a join appointmentsideeffect a2 ON a2.appointmentId = a.id join sideeffects s on s.id = a2.sideeffectId; ', {type: db.Sequelize.QueryTypes.SELECT});
  // console.log(mainQuery);
  mainQuery.forEach(entry => {
    entry.illness = [];
    entry.sideeffects = [];
    illnessQuery.forEach(illness => {
      if (illness.userId == entry.userId) {
        entry.illness.push(illness.illness);
      }
    });
    sideeffectQuery.forEach(sideeffect => {
      if (sideeffect.appointmentId == entry.appointmentId) {
        entry.sideeffects.push(sideeffect.Nebenwirkungen);
      }
    });
  });

  mainQuery.map(function (item) {
    delete item.userId;
    delete item.appointmentId;
    delete item.firstName;
    return item;
  });

  console.log(mainQuery);

  // console.log(illnessQuery);
  // console.log(sideeffectQuery);
  res.send(mainQuery);
});

module.exports = router;
