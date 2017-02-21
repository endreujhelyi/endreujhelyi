// What is the smallest positive number that is evenly divisible by
// all of the numbers from 1 to 20?


const smallestEvenlyDivisibleFinder = endNumber => {
  let daNumber = 1;
  for(let i = endNumber - 1; i > 0; i--) {
    if(daNumber % i != 0) {
      daNumber *= i;
    }
  }
  console.log(daNumber);
};

smallestEvenlyDivisibleFinder(20);
