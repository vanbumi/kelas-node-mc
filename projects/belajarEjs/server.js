var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var engine = require('ejs-mate');

var app = express();

// setup engine
app.engine('ejs', engine);
app.set('view engine', 'ejs');

// setup middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// home
app.get('/', function(req, res, next){
  res.render('home', { name: 'Brandon ' });
});

// about
app.get('/about', function(req, res, next){
  res.render('about');
});

// server
app.listen(3000);


