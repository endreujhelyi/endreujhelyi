'use strict';

// Create a function that takes a number and returns it as string in english
// like 0 -> "zero", it should work with the first 5 numbers, after it should
// return "many"

var englishNumbers = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five'
};

function translater(inputNumber) {
  if (inputNumber < 0) {
    return "Sorry but it's not a positive number or 0."
  } else {
    if (inputNumber in englishNumbers) {
      return englishNumbers[inputNumber];
    } else {
      return 'many';
    }
  }
}

console.log(translater(6));



// using switch

function translater2(number) {
  switch (number) {
    case 0:
      console.log('zero');
      break;
    case 1:
      console.log('one');
      break;
    case 2:
      console.log('two');
      break;
    case 3:
      console.log('three');
      break;
    case 4:
      console.log('four');
      break;
    case 5:
      console.log('five');
      break;
    default:
      console.log('many');
      break;
  }
}

translater2(2);
