var express = require('express');
const { skillsList } = require('../model/skillsData');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(skillsList)
  res.render('index', { title: 'Dev Skills', skillsList: skillsList });
});


module.exports = router;
