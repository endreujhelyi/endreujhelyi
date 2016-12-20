'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var todos = require('./todos.json');

var app = express();

app.use(bodyParser.json());
var counter = 3;


// FULL LIST OF TODOS
app.get('/todos', function(req, res) {
  res.send(todos);
});


// ONE TODO ITEM
app.get('/todos/:id', function(req, res) {
  res.send(todos[req.params.id - 1]);
})


// POST NEW ELEMENT
app.post('/todos', function(req, res) {
  todos.push({"id": counter + 1, "text": req.body.text, "completed": false});
  counter++;
  res.send();
});


// CHECKING STATUS
app.put('/todos/:id', function(req, res) {
  todos.forEach(function(item, index) {
    if (todos[index].id == req.params.id) {
      todos[index].completed = !todos[index].completed;
    }
  });
  res.send();
});


// DELETE TODO
app.delete('/todos/:id', function(req, res) {
  todos = todos.filter(function(item) {
    return item.id != req.params.id;
  });
  res.send();
});

app.listen(3000);
