'use strict';

var bodyParser = require('body-parser'),
    cors = require('cors'),
    mysql = require('mysql');

var express = require('express'),
    library = express();
library.use(bodyParser.json());
library.use(cors());

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'szomoruszamuraj',
  database: 'musicLibrary'
});



// REQUEST TO PLAYLISTS
library.get('/playlists', function(req, res) {
  connection.query(
    `SELECT name FROM playlists;`, function(err, rows, fields) {
  		if (err) throw err;
    		res.send(rows);
  });
});

library.post('/playlists', function(req, res) {
  connection.query({
    sql:
    `INSERT INTO playlists(name, protected)
    VALUES(?, ?);`,
    values: [req.body.text, 0]
  }, function(err, rows, fields) {
    if (err) throw err;
    res.send(rows);
  });
});

library.delete('/playlists/:playlist_id', function(req, res) {
  connection.query(
    `DELETE FROM playlists
    WHERE id = ${req.params.playlist_id};`, function(err, rows, fields) {
  		if (err) throw err;
    		res.send(rows);
	});
});



// REQUESTS TO PLAYLIST TRACKS
library.get('/playlist-tracks/:playlist_id', function(req, res) {
  connection.query(
    `SELECT artist FROM musicLibrary
    LEFT JOIN connections
      ON musicLibrary.id = connections.trackID
    WHERE playlistID = ${req.params.playlist_id};`, function(err, rows, fields) {
  		if (err) throw err;
    		res.send(rows);
  });
});

library.post('/playlist-tracks/:playlist_id', function(req, res) {
  connection.query(
    `INSERT INTO musicLibrary(artist)
    VALUES ${req.body.text};`, function(err, rows, fields) {
  		if (err) throw err;
    		res.send(rows);
  });
});

library.delete('/playlists/:playlist_id/:track_id', function(req, res) {
  connection.query(
    `DELETE FROM connections
    WHERE trackID = ${req.params.id};`, function(err, rows, fields) {
  		if (err) throw err;
    		res.send(rows);
	});
});

library.put('/playlist-tracks/:playlist_id',
function(req, res) {
  connection.query(
    `UPDATE musicLibrary
    SET fav = !fav
    WHERE id = ${req.params.id};`, function(err, rows, fields) {
  		if (err) throw err;
    		res.send(rows);
	});
});



connection.connect();
library.listen(3000, function() {
  console.log("Server is running on port: 3000!");
});
