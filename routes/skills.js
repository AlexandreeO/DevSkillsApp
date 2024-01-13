var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/javascript', function(req, res, next) {
  res.render('index', { title: 'JavaScript' });
});

router.get('/react', function(req, res, next) {
  res.render('index', { title: 'React' });
});

module.exports = router;
