'use strict';

var express = require('express');
var app = express();

app.get('*', function(req, res) {
  const date = new Date();
  res.send(`URL: ${req.url} METHOD: ${req.method} DATE: ${date.getFullYear()}.${date.getMonth()}.${date.getDate()}.`);
});

app.listen(3000);
