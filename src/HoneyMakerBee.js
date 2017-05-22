var HoneyMakerBee = function() {
  Bee.call(this);
  this.honeyPot = 0;
  this.age = 10;
  this.job = 'make honey';
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;
// HoneyMakerBee.age = 10;
// HoneyMakerBee.job = 'make honey';

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
};