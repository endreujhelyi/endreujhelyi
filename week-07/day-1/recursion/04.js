// 4. Given base and n that are both 1 or more, compute recursively (no loops)
// the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

function returner(x, y) {
  if (y == 1) {
    return x;
  } else {
    return x * returner(x, y - 1);
  }
}

console.log(returner(4, 6))
