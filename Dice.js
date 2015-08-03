var diceRoller = function () {
    return Math.floor(Math.random() * 6 + 1);
}

var diceRollerThree = function (numberOfDice) {
    var dice = [];
    for (var i = 0; i < numberOfDice; i++) {
        dice.push(Math.floor(Math.random() * 6 + 1));
    }
    return dice;
}

var diceRollerToN = function (numberOfDice, upperBound) {
    var dice = [];
    for (var i = 0; i < numberOfDice; i++) {
        dice.push(Math.floor(Math.random() * upperBound + 1));
    }
    return dice;
}

var diceRollerFour = function (numberOfDice, upperBound) {
    var dice = [];
    if (upperBound === undefined) {
        upperBound = 6;
    }
    for (var i = 0; i < numberOfDice; i++) {
        dice.push(Math.floor(Math.random() * upperBound + 1));
    }
    return dice;
};

var DiceRoller = function(numberOfSides){
  var numberOfSides = numberOfSides || 6;
  this.roll = function(numberOfDice){
    this.hand = [];
    var numberOfDice = numberOfDice || 1;
    for (var i = 0; i < numberOfDice; i++) {
      this.hand.push(Math.floor(Math.random() * numberOfSides + 1));
    }
  }
}

var game = new DiceRoller();

