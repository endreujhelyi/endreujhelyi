'use strict';

var test = require('tape');

var names = ['Zakarias', 'Hans', 'Otto', 'Ole'];
// create a function that returns the shortest string
// from an array

function shortWordFinder(inputList) {
  var wordHolder = [];
  for (var i = 0; i < inputList.length; i++) {
    if (wordHolder.length == 0 || inputList[i].length < wordHolder[0].length) {
      wordHolder[0] = inputList[i];
    }
  }
  return wordHolder
}


//


test('is returned arrey ok', function(t) {
  var actual = shortWordFinder(names);
  var expected = [ 'Ole' ];

  t.deepEqual(actual, expected);
  t.end();
});
