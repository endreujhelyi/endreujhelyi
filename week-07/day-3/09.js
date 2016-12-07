'use strict';

// create a function that takes a string and counts its letters
// it should return an object thats keys are the letters and the values are
// the counts.
// example: "apple" -> {a: 1, p: 2, l: 1, e: 1}

function objecter(inputString) {
  return inputString.split('').reduce(function(prev, next) {
    prev[next] = (prev[next] + 1) || 1;
    return prev;
  },{});
};

console.log(objecter('moszkvai hekker brigad'))
