'use strict';

var ah = [3, 4, 5, 6, 7];
// print the sum of all numbers in ah

function getSum(total, num) {
    return total + num;
}

console.log(ah.reduce(getSum));
