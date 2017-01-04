'use strict';

var test = require('tape');
var request = require('supertest');
var app = require('../server');

test('First test!', function (t) {
  t.end();
});

test('Playlists returned', function (t) {
  request(app)
    .get('/playlists')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      t.error(err, 'No error');
      t.end();
    });
});

test('404 on lobab', function (t) {
  request(app)
    .get('/lobab')
    .expect(404)
    .end(function (err, res) {
      t.error(err, 'No error');
      t.end();
    });
});

test('teapot', function (t) {
  request(app)
    .get('/teapot')
    .expect(418)
    .end(function (err, res) {
      t.error(err, 'No error');
      t.end();
    });
});

test('New playlist added', function (t) {
  request(app)
    .post('/playlists')
    .type('json')
    .send({name: "Sierra Echo Charlie"})
    .expect(200)
    .end(function (err, res) {
      t.error(err, 'No error');
      t.end();
    });
})

test('Failed deleting with no ID', function(t) {
  request(app)
    .delete('/playlists')
    .expect(404)
    .end(function (err, res) {
      t.error(err, 'No error');
      t.end();
  })
});

test('Playlist deleting was successful', function(t) {
  request(app)
    .delete('/playlists/:id')
    .expect(200)
    .end(function (err, res) {
      t.error(err, 'No error');
      t.end();
  })
});

test('Get all of the songs listed', function(t) {
  request(app)
    .get('/playlist-tracks')
    .expect(200)
    .end(function (err, res) {
      t.error(err, 'No error');
      t.end();
  })
});

test('Get songs of IDth playlist', function(t) {
  request(app)
    .get('/playlist-tracks/:playlist_id')
    .expect(200)
    .end(function (err, res) {
      t.error(err, 'No error');
      t.end();
  })
});

test('Put a new track to IDth list', function(t) {
  request(app)
    .post('/playlist-tracks/:playlist_id')
    .type('json')
    .send({path: "music/Kill the Queen.mp3", playlist_id: 3})
    .expect(200)
    .end(function (err, res) {
      t.error(err, 'No error');
      t.end();
  })
});

test()
