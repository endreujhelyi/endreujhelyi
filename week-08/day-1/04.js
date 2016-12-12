// Create a constructor for creating Aircrafts,
// and one for creating Carriers,
// based on the specification in the python exam: https://github.com/greenfox-academy/zerda-exam-python-retake

var jets = [
  {type: 'F16', maxAmmo: 8, baseDamage: 30},
  {type: 'F35', maxAmmo: 12, baseDamage: 50}
];


function Aircraft(jet) {
  this.type = jet.type;
  this.maxAmmo = jet.maxAmmo;
  this.ammo = jet.maxAmmo;
  this.baseDamage = jet.baseDamage;
  this.allDamage = 0;
};

function Carrier() {
  this.fleet = [];
  this.totalAmmo = 2300;
  this.healthPoint = function() {
    var health = 3000;
    this.fleet.forEach(function(jet) {
      return health -= jet.allDamage;
    });
    return health;
  };
  this.totalDamage = function() {
    var damage = 0;
    this.fleet.forEach(function(jet) {
      return damage += jet.allDamage;
    });
    return damage;
  };
};

// Carrier Events
Carrier.prototype.statusReport = function() {
  if (this.healthPoint() > 0) {
    var fleetRecord = this.fleet.map(function(jet) { return jet.toString(); }).join("\n");

    console.log(
      'Aircraft count:', this.fleet.length, ', Ammo Storage:', this.totalAmmo, ', Total damage:', this.totalDamage(), ', Health Remaining:', this.healthPoint(), '\n\nAircrafts:\n', fleetRecord
    );
  } else { console.log("It's dead Jim"); }
};

Carrier.prototype.addAircraft  = function(aircraft) {
  this.fleet.push(aircraft);
}

Carrier.prototype.fillAll = function() {
  this.fleet.forEach(function(jet) {
    if (motherShip1.totalAmmo >= jet.maxAmmo - jet.ammo) {
      motherShip1.totalAmmo -= (jet.maxAmmo - jet.ammo);
      jet.refill(jet.maxAmmo - jet.ammo);
    } else { throw "No Ammo Error!"; }
  });
};

Carrier.prototype.redAlert = function() {
  var destruction = 0;
  this.fleet.forEach(function(jet) {
    return destruction += jet.fight();
  });
  return destruction;
};


// Aircraft Events
Aircraft.prototype.toString = function() {
  return 'Type: ' + this.type + ', Ammo: ' + this.ammo + ', Base Damage: ' + this.baseDamage + ', All Damage: ' + (this.ammo * this.baseDamage);
};

Aircraft.prototype.refill = function(amount) {
  if (this.ammo + amount > this.maxAmmo) {
    currentAmmo = this.ammo;
    this.ammo = this.maxAmmo;
    return amount + currentAmmo - this.maxAmmo;
  } else { this.ammo += amount; }
};

Aircraft.prototype.fight = function() {
  var ammoFired = this.ammo;
  this.ammo = 0;
  this.allDamage += ammoFired * this.baseDamage;
  return ammoFired * this.baseDamage;
};



var jet1 = new Aircraft(jets[0]);
jet1.fight();
jet1.refill(20);
var jet2 = new Aircraft(jets[1]);
jet2.fight();
jet2.refill(10);
var jet3 = new Aircraft(jets[1]);
jet3.fight();
jet3.refill(5);
var jet4 = new Aircraft(jets[0]);
jet4.fight();
jet4.refill(5);
var jet5 = new Aircraft(jets[0]);
jet5.fight();
jet5.refill(5);
var jet6 = new Aircraft(jets[1]);
jet6.fight();
jet6.refill(5);



var motherShip1 = new Carrier();
motherShip1.addAircraft (jet1);
motherShip1.addAircraft (jet2);
motherShip1.addAircraft (jet3);
motherShip1.addAircraft (jet4);
motherShip1.addAircraft (jet5);
motherShip1.statusReport();
motherShip1.fillAll();
motherShip1.redAlert();
