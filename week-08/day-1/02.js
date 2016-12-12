'use strict';

// Create a constructor for creating Rectangles.
// it should take two parameters: the sides of the rectangle
// Every rectangle should have a method called getArea() that returns its area
// Every rectangle should have a method called getCircumference() that returns its circumference

function Rectangles(sideA, sideB) {
  this.sideA = sideA;
  this.sideB = sideB;
};

Rectangles.prototype.getArea = function() {
  return this.sideA * this.sideB;
};

Rectangles.prototype.getCircumference = function() {
  return (this.sideA + this.sideB) * 2;
};

var rectangleOne = new Rectangles(3, 4);
console.log(rectangleOne.getArea());
console.log(rectangleOne.getCircumference());

var rectangleTwo = new Rectangles(10, 27);
console.log(rectangleTwo.getArea());
console.log(rectangleTwo.getCircumference());
