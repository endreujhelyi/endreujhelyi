'use strict';

// Create a `Stack` constructor that stores elements
// It should have a `size` method that returns number of elements it has
// It should have a `push` method that adds an element to the stack
// It should have a `pop` method that returns the last element from the stack and also deletes it from it

// please don`t use the built in methods

function Stack() {

  this.garage = [];

  this.size = function returnSize() {
    var car = 0;
    while (this.garage[car] != undefined) {
      car++;
    };
    return car;
  };

  this.pusher = function addToGarage(car) {
    return this.garage[this.size()] = car;
  };

  this.popper = function deleteLastCar() {
    var lastCar = this.garage[this.size() - 1];
    this.garage.length = this.garage.length - 1;
    return lastCar;
  };

};

var garage = new Stack();
garage.pusher('Nissan GT-R');
garage.pusher('Ford Mustang GT');
garage.pusher('Dodge Charger 1969');
console.log(garage.garage);
console.log(garage.size());
console.log(garage.popper());
console.log(garage.garage);
