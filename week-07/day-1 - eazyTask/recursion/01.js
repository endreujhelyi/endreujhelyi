// 1. write a recursive function
// that takes one parameter: n
// and counts down from n

function recursive(n) {
  if (n == 0) {
    console.log(n);
  } else {
    console.log(n);
    return recursive(n - 1)
  }
}

recursive(5)
