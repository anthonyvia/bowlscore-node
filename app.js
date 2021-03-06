require('node-jsx').install({extension:'.jsx'});
var express = require('express');
var path = require('path');

var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var bowlScoreApi = require('./lib/server/api');
var config = require('./lib/config');

var app = express();

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/favicon.ico'));

// logs each request, response code, and response time
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', bowlScoreApi);

module.exports = app;
