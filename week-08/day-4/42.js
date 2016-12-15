'use strict';
var test = require('tape');

// create a function that returns it's input factorial

function factorialFactory(inputNum) {
  var factorial = inputNum;
  for (var i = inputNum - 1; i > 0; i--) {
    factorial *= i;
  }
  return factorial
}

console.log(factorialFactory())

test('is returned number ok', function(t) {
  var actual = factorialFactory(5);
  var expected = 120;

  t.equal(actual, expected);
  t.end();
});

test('negative returns itself', function(t) {
  var actual = factorialFactory(-5);
  var expected = actual;

  t.equal(actual, expected);
  t.end();
});
