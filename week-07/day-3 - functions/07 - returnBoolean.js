'use strict';

var numbers = [2, 5, 11, 29];

// create a function that takes an array of numbers and returns a boolean
// it should return true if all the elements are prime, false otherwise

function primeListFinder(inputList) {
  return inputList.filter(isPrime).length == numbers.length;
}

function isPrime(number) {
  for(var i = 2; i < number; i++) {
    if(number % i !== 0) {
        return true;
      }
  }
}

console.log(primeListFinder(numbers))
