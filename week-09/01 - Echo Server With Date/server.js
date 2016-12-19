'use strict';

var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  res.end(`URL: ${req.url} METHOD: ${req.method} DATE: ${year}.${month}.${day}.`)
});


server.listen(3000, '127.0.0.1');
