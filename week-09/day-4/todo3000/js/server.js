var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/todo3000';

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url);




// FULL LIST OF TODOS
MongoClient.get('/todos', function get(req, res) {
  connection.query(
    `SELECT * FROM todos;`, function(err, rows) {
    if (err) {
      console.error(err.toString());
    }
    res.json(rows);
  });
});

// FILTER COMPLETED TODO ITEMS
MongoClient.get('/todos/filter', function(req, res) {
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
MongoClient.get('/todos/:id', function(req, res) {
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
MongoClient.post('/todos', function(req, res) {
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
MongoClient.put('/todos/:id', function(req, res) {
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
MongoClient.delete('/todos/:id', function(req, res) {
  connection.query(
    `DELETE FROM todos
    WHERE id = ${req.params.id};`, function(err, rows) {
      if (err) {
        console.error(err.toString());
      }
      res.json(rows);
  });
});




//Close connection
db.close();
  }
});
