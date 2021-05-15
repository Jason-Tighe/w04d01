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
    console.log(this.catchPhrase[Math.floor(Math.random() * this.catchPhrase.length))
  }
  announceHealth(){
    console.log(this.health)
  }
  fight(){
    console.log("I'm ready to rumble")
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
    console.log(this.catchPhrase[Math.floor(Math.random() * this.catchPhrase.length))
  }
  announceHealth(){
    console.log(this.health)
  }
  fight(){
    console.log("I'm gonna flatten you like a slice of pepperoni!")
  }
}

const ratBoi = new Enemy ('Pizza Rat')
