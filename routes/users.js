/*
File: users.js
Student's Name: LUCIANNA MENDONCA DOMINGUES
Student ID: 301307882
Date: OCTOBER 6, 2023
*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;