'use strict';

var express = require('express');
var app = express();
var playlists = ['John', 'Betty', 'Hal'];

app.get('/playlists', function (req, res) {
  res.json(playlists);
});

app.get('/teapot', function (req, res) {
  res.sendStatus(418);
});

app.post('/playlists', function (req, res) {
  res.status(200)
  .json({id: 450, name: "Sierra Echo Charlie"});
});

app.delete('/playlists/:id', function (req, res) {
  res.sendStatus(200);
});

app.get('/playlist-tracks', function (req, res) {
  res.sendStatus(200);
});

app.get('/playlist-tracks/:playlist_id', function (req, res) {
  res.sendStatus(200);
});

app.post('/playlist-tracks/:playlist_id', function (req, res) {
  res.status(200)
  .json({id: 28, path: "music/Kill the Queen.mp3", playlist_id: 3});
});


module.exports = app;
