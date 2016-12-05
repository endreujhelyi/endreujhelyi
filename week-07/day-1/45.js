'use strict';

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

console.log(shortWordFinder(names))
