'use strict';
var test = require('tape');

var numbers = [4, 5, 6, 7, 8, 9, 10]
// write your own sum function

function summation(inputArray) {
  var summ = 0;
  inputArray.forEach(function(number) {
    return summ += number;
  });
  return summ;
}



test('summation ok', function(t) {
  var actual = summation([2, 2, 2]);
  var expected = 6;

  t.equal(actual, expected);
  t.end();
});

test('input is string', function(t) {
  t.throws(summation);
  t.end();
});
