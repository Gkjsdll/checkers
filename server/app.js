var express = require('express');
var app = express();

var path = require('path');
var morgan = require('morgan');

var port = 3000;

app.use(express.static(path.join(__dirname, '../client')));

app.use(morgan('dev'));

app.listen(port);
console.log(`Listening on ${port}`);