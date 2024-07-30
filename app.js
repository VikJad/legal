var express = require('express');
var path = require('path');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

const PORT = 3000;

var router = express.Router();

router.get('/', function (request, response) {
  response.render('index');
});

router.get('/about', function (request, response) {
  response.render('about');
});

router.get('/approach', function (request, response) {
  response.render('approach');
});

router.get('/client', function (request, response) {
  response.render('client');
});

router.get('/team', function (request, response) {
  response.render('team');
});

router.get('/contact', function (request, response) {
  response.render('contact');
});

router.get('/disclaimer', function (request, response) {
  response.render('disclaimer');
});

router.get('/practice1', function (request, response) {
  response.render('service1');
});

router.get('/practice2', function (request, response) {
  response.render('service2');
});

router.get('/practice3', function (request, response) {
  response.render('service3');
});

router.get('/student', function (request, response) {
  response.render('index', { title: 'Welcome, student!' });
});

app.use('/', router);

app.listen(PORT, function () {
  console.log('Listening on port ' + PORT);
});
