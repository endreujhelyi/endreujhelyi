'use strict';

// create a function that returns it's input factorial

function factorialFactory(inputNum) {
  var factorial = inputNum;
  for (var i = inputNum - 1; i > 0; i--) {
    factorial *= i;
  }
  return factorial
}

console.log(factorialFactory(5))
