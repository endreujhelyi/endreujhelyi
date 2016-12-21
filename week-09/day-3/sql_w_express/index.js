'use strict';

var mysql = require('mysql');
var express = require('express');

var bookstore = express();

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'szomoruszamuraj',
  database: 'bookstore'
});


var books =
`SELECT book_name, aut_name, cate_descrip, pub_name, book_price
  FROM book_mast
LEFT JOIN author
  ON book_mast.aut_id = author.aut_id
LEFT JOIN category
  ON book_mast.cate_id = category.cate_id
LEFT JOIN publisher
  ON book_mast.pub_id = publisher.pub_id;`;


// ERROR HANDLER
connection.connect(function (error) {
  if (error) {
    console.log('JAAAJ', error);
  }
  console.log('SIKER!');
});


// SEND INFOS TO SERVER
bookstore.get('/', function get(req, resp) {
  connection.query(books, function(err, rows) {
    if (err) {
      console.error(err.toString());
    }
    resp.json(rows);
  });
});

bookstore.listen(3000);
