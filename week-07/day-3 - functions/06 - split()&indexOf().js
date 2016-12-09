'use strict';

// create a function that takes a string and a letter and returns a boolean
// it should return true if the string consits the given letter, false otherwise

function letterChecker(inputString, inputLetter) {
  console.log(inputString.split(''));
  return inputString.split('').indexOf(inputLetter) >= 0;
};


console.log(letterChecker('malyvacukor', 'm'));
