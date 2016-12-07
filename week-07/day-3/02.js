'use strict';

// create a function called apply that takes a function and calls it with one argument
// that is the string 'apple'

function apply(func) {
  return func;
}

function appleWriter(word) {
  return 'alma'
}

console.log(apply(appleWriter())) // should log apple
