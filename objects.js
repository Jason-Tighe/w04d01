class Hamster {
  constructor(name) {
    this.owner = ''
    this.name = name
    this.price = 15
  }
  wheelRun() {
    console.log('squeak squeak')
  }
  eatFood() {
    console.log('nibble nibble')
  }
  getPrice() {
    return this.price
  }
}
class Person {
  constructor(name) {
    this.name = name
    this.age = 0
    this.height = 0
    this.weight = 0
    this.mood = 0
    this.hamsters = []
    this.bankAccount = 0
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  getWeight() {
    return this.weight;
  }
  greet() {
    console.log(`Hello ${this.name}`)
  }
  eat(num) {
    for (let i = 0; i < num; i++) {
      this.weight++;
      this.mood++;
    }
  }
  exercise(num) {
    for (let i = 0; i < num; i++) {
      this.weight--;
    }
  }
  ageUp(num) {
    for (let i = 0; i < num; i++) {
      this.age++ ,
        this.height++ ,
        this.weight++ ,
        this.mood-- ,
        this.bankAccount += 10;
    }
  }
  buyHamster(hamster) {
    this.hamsters.push(hamster);
    this.mood += 10;
    this.bankAccount -= hamster.getPrice();
    hamster.owner = this.name;
  }

}
//Timmy is born
const timmy = new Person('Timmy')

console.log(timmy)

//function for timmy's age up to go up year by year
// function king(num) {
//   for (let i = 0; i < num; i++) {
//     timmy.ageUp()
//   }
// }

//calling timmy's age up function

timmy.ageUp(5)
console.log(timmy)

timmy.eat(5)
console.log(timmy)

timmy.exercise(5)
console.log(timmy)

timmy.ageUp(9)
console.log(timmy)

const gus = new Hamster('Gus')
console.log(gus)

timmy.buyHamster(gus)
console.log(timmy)

timmy.ageUp(15)
console.log(timmy)

timmy.eat(2)
console.log(timmy)

timmy.exercise(2)
console.log(timmy)
