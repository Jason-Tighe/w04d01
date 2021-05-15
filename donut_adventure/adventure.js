class Hero {
  constructor(name){
    this.name = name;
    this.health = 100;
    this.weapons = {
      sprinkleSpray: 5,
      sugarShock: 10,
    }
    this.catchPhrase = ["I'm fresher than a day old pizza", "you can't count my calories"]
  }
  talkSass(){
    console.log(this.catchPhrase[Math.floor(Math.random() * this.catchPhrase.length)])
  }
  announceHealth() {
    console.log(this.name + " has " + this.health + "HP remaining.")
  }
  style() {
    return (Math.floor(Math.random() * 2))
  }
  fight(name) {
    if (this.style() == 1) {
      this.normalAttk(name)
    } else {
      this.specialAttk(name)
    }
  }
  normalAttk(name) {

    const newHealth = name.health -= this.weapons.sugarShock


    console.log(this.name + " used Sugar Shock! That was strong! They only have " + newHealth + "HP left!")
  }
  specialAttk(name) {
    const newHealth = name.health -= this.weapons.sprinkleSpray
     console.log(this.name + " used sprinkleSpray! Nice hit! They only have " + newHealth + "HP left!")
  }
}

const dougie = new Hero('Dougie the Donut')

class Enemy {
  constructor(name){
    this.name = name;
    this.health = 100;
    this.weapons = {
      pepperoniStars: 5, cheeseGrease: 10
    }
    this.catchPhrase = ["I'm youtube Famous", "I'm more dangerous than an uncovered sewer"]
  }
  talkSass(){
    console.log(this.catchPhrase[Math.floor(Math.random() * this.catchPhrase.length)])
  }
  announceHealth() {
    console.log(this.name + " has " + this.health + "HP remaining.")
  }
  style() {
    return (Math.floor(Math.random() * 2))
  }
  fight(name) {
    if (this.style() == 1) {
      this.normalAttk(name)
    } else {
      this.specialAttk(name)
    }
  }
  normalAttk(name) {

    const newHealth = name.health -= this.weapons.cheeseGrease


    console.log(this.name + " used Cheese Grease! That was strong! They only have " + newHealth + "HP left!")
  }
  specialAttk(name) {
    const newHealth = name.health -= this.weapons.pepperoniStars
     console.log(this.name + " used Pepperoni Stars! Nice hit! They only have " + newHealth + "HP left!")
  }
}

const zaRat = new Enemy ('Pizza Rat')


//story time

//Dougie walks up to a rat.
dougie.talkSass();
//Pizza Rat turns
zaRat.talkSass();
//Dougie shows off this cool health
dougie.announceHealth();
//Pizza Rat slaps his chest
zaRat.announceHealth();
//attacks are randomly generated betweena  normal and a specialAttk
//PizzaRat attacks Dougie the Donut
zaRat.fight(dougie);
//Dougie fights back!
dougie.fight(zaRat);
//announcing the health should be included with the fight function, but to be safe i'll just call it here aswell.
zaRat.announceHealth();
dougie.announceHealth();
