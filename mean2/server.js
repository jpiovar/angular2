var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var tasks = require('./routes/tasks');

var app = express();

// view engine
app.set('views', path.join(_dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

