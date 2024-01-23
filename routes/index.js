var express = require('express');
const { skillsList, mySkills } = require('../model/skillsData');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Dev Skills', skillsList: mySkills });
});


module.exports = router;
