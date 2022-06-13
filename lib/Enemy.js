const Potion = require("./Potion");
const Character = require("./Character");

class Enemy extends Character {
  constructor(name, weapon) {
    super(name);
    // this.name = name;
    this.weapon = weapon;
    this.potion = new Potion();

    // can remove these and name because they are in the character obj and are called with super(name)
    // this.health = Math.floor(Math.random() * 10 + 85);
    // this.strength = Math.floor(Math.random() * 5 + 5);
    // this.agility = Math.floor(Math.random() * 5 + 5);
  }

  getDescription() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
  }
}

// ES5 way of writing prototypes for reference
// Enemy.prototype = Object.create(Character.prototype);

// Enemy.prototype.getDescription = function () {};

module.exports = Enemy;
