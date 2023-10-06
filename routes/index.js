var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'Home', menuId:'home'});
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', {page:'About Me', menuId:'about'});
});

/* GET project page. */
router.get('/project', function(req, res, next) {
  res.render('project', {page:'Projects', menuId:'project'});
});

/* GET service page. */
router.get('/service', function(req, res, next) {
  res.render('service', {page:'Services', menuId:'service'});
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', {page:'Contact Me', menuId:'contact'});
});

module.exports = router;