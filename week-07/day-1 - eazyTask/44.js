'use sttict';

var numbers = [7, -1, 8, -3, 5];
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

console.log(minimalFinder(numbers));
