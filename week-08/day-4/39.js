'use strict';

var test = require('tape');

var ai = 123;
// create a function that doubles it's input
// double ai with it

function doubler(num) {
  return num * 2;
};

test('double the input', function(t) {
    var actual = doubler(222);
    var expected = 444;

    t.equal(actual, expected);
    t.end();
});

test('input is NaN', function(t) {
    var actual = doubler('bohoc szelet');
    var expected = NaN;

    t.equal(actual, expected);
    t.end();
});
