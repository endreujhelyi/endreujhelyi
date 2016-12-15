'use strict'

var test = require('tape');

var aj = 'kuty'
// write a function that gets a string as an input
// and appends an 'a' character to its end and returns a new string

function letterAppender(word) {
  const letter = 'a';
  return word + letter;
};


test('is the new word ok', function(t) {
    var actual = letterAppender('csicsk');
    var expected = 'csicska';

    t.equal(actual, expected);
    t.end();
});
