// 5. We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies
// recursively (without loops or multiplication).

function floppyEars(n) {
  if (n == 1) {
    return n * 2;
  } else {
    return floppyEars(n - 1) + 2;
  }
}

console.log(floppyEars(123))
