'use strict';

// Create a constructor for creating Rockets.
// it should take one parameter: the consumption of the rocket
// (amount of fuel needed for launch)
// Every rocket should have a method called fill(amount) that fills the tank of
// the rocket with the amount of fuel given as a parameter
// Every rocket should have a method called launch() that launches the rocket
// if it has enough fuel (more than its consumption)

var fleet = [
  {name: 'Atlas V', consumption: 30},
  {name: 'Titan IV', consumption: 22},
  {name: 'Delta II', consumption: 19}
];

function Rocket(name, consumption) {
  this.consumption = consumption;
  this.tank = 0;
  this.name = name;
};

Rocket.prototype.fill = function(amount) {
  return this.tank += amount;
};

Rocket.prototype.launch = function() {
  if (this.tank > this.consumption) {
    console.log(this.name.toUpperCase(), "has launched!");
    return this.tank -= this.consumption;
  } else {
    console.log(this.name.toUpperCase(), "has not enough fuel!");
  }
};



var atlasV = new Rocket(fleet[0].name, fleet[0].consumption);
atlasV.fill(50);
atlasV.launch();

var titanIV = new Rocket(fleet[1].name, fleet[1].consumption);
titanIV.fill(20);
titanIV.launch();

var deltaII = new Rocket(fleet[2].name, fleet[2].consumption);
deltaII.fill(35);
deltaII.launch();
