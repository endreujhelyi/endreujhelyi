<!-- // Create a "tour" function that takes two functions as parameters:
//  - walk and distance
//  - distance should return an array of false values [false,false,false] with the length of a given parameter
//  - walk should go through the returned array of distance and change it to true
//  - tour should return the result of walk -->


function tour(walk, distance, size) {
  return walk(distance(size));
}

function walk(done) {
  return done.map(function(item) { return item = true; });
}

function distance(meter) {
  var falseList = [];
  for (var i = 0; i < meter; i++) {
    falseList.push(false);
  }
  return falseList;
}

console.log(tour(walk, distance, 10));
