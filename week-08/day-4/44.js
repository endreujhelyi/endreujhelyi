'use sttict';
var test = require('tape');

var numbers = [7, 5, 8, -1, 2];
// Write a function that returns the minimal element
// in an array (your own min function)

function minimalFinder(inputList) {
  var goalArray = [];
  for (var i = 0; i < inputList.length; i++) {
    if (inputList[i] < goalArray[0] || goalArray.length == 0) {
      goalArray[0] = inputList[i];
    }
  }
  return goalArray;
}


//


test('is returned arrey ok', function(t) {
  var actual = minimalFinder(numbers);
  var expected = [ -1 ];

  t.deepEqual(actual, expected);
  t.end();
});

test('input is integer', function(t) {
  var actual = minimalFinder(205);
  var expected = [];

  t.deepEqual(actual, expected);
  t.end();
});
