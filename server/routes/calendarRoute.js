var express = require('express');
var router = express.Router();
var Controller = require('../controller/calendar.js')
/* GET home page. */
router.get('/calendar', Controller.getCal);

module.exports = router;
