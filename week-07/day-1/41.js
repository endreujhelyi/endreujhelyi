'use strict';

var numbers = [4, 5, 6, 7, 8, 9, 10]
// write your own sum function

function summerize(inputList) {
  var final = 0
  for (var i = 0; i < numbers.length; i++) {
    final += inputList[i]
  }
  return final
}

console.log(summerize(numbers))
