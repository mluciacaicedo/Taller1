var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('taller1', { title: 'Taller 1 Angular JS' });
});

module.exports = router;
