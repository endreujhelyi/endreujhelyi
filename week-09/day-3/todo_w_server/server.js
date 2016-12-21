'use strict';

var bodyParser = require('body-parser');
var mysql = require('mysql');

var express = require('express');
var bookstore = express();
bookstore.use(bodyParser.json());

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'szomoruszamuraj',
  database: 'todo'
});


// FULL LIST OF TODOS
bookstore.get('/todos', function get(req, res) {
  connection.query(
    `SELECT * FROM todos;`, function(err, rows) {
    if (err) {
      console.error(err.toString());
    }
    res.json(rows);
  });
});

// FILTER COMPLETED TODO ITEMS
bookstore.get('/todos/filter', function(req, res) {
  connection.query(
    `SELECT * FROM todos
    WHERE completed = 1;`, function(err, rows) {
    if (err) {
      console.error(err.toString());
    }
    res.json(rows);
    });
  });

// ONE TODO ITEM
bookstore.get('/todos/:id', function(req, res) {
  connection.query(
    `SELECT * FROM todos
    WHERE id = ${req.params.id};`, function(err, rows) {
    if (err) {
      console.error(err.toString());
    }
    res.json(rows);
  });
});



// POST NEW ELEMENT
bookstore.post('/todos', function(req, res) {
  connection.query(
    `INSERT INTO todos (text)
    VALUES ("${req.body.text}");`, function(err, rows) {
    if (err) {
      console.error(err.toString());
    }
    res.json(rows);
  });
});


// CHECKING STATUS
bookstore.put('/todos/:id', function(req, res) {
  connection.query(
  `UPDATE todos
  SET completed = !completed
  WHERE id = ${req.params.id};`, function(err, rows) {
    if (err) {
      console.error(err.toString());
    }
    res.json(rows);
  });
});


// DELETE TODO
bookstore.delete('/todos/:id', function(req, res) {
  connection.query(
    `DELETE FROM todos
    WHERE id = ${req.params.id};`, function(err, rows) {
      if (err) {
        console.error(err.toString());
      }
      res.json(rows);
  });
});


bookstore.listen(3000);
