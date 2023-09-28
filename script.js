// Exercise 1: Basic Inheritance
// Task: Create a base class Animal with properties name and species.
// Then, create a subclass Bird that extends Animal with an additional
// property canFly. Instantiate both classes and demonstrate how the subclass
// inherits properties from the base class.

// class Animal {
//   constructor(name, species) {
//     this.name = name;
//     this.species = species;
//   }
// }

// class Bird extends Animal {
//   constructor(name, species, canFly) {
//     super(name, species);
//     this.name = name;
//     this.species = species;
//     this.canFly = canFly;
//   }
// }

// const dog = new Animal('greg', 'dog');
// const eagle = new Bird('joe', 'eagle', true);
// console.log(dog); // Animal {name: 'greg', species: 'dog'}
// console.log(eagle); // Bird {name: 'joe', species: 'eagle', canFly: true}

// ===========================================================================

// Exercise 2: Method Overriding
// Task: Extend the previous exercise by adding a method makeSound() to the
// Animal class, and then override this method in the Bird subclass to make a
// bird-specific sound. Instantiate both classes and call the makeSound()
// method to demonstrate method overriding.

// class Animal {
//   constructor(name, species) {
//     this.name = name;
//     this.species = species;
//   }
//   makeSound() {
//     console.log('making sound');
//   }
// }

// class Bird extends Animal {
//   constructor(name, species, canFly) {
//     super(name, species);
//     this.name = name;
//     this.species = species;
//     this.canFly = canFly;
//   }
//   makeSound() {
//     console.log('chirping');
//   }
// }

// const dog = new Animal('greg', 'dog');
// const eagle = new Bird('joe', 'eagle', true);
// dog.makeSound(); // making sound
// eagle.makeSound(); // chirping

// ===========================================================================

// Exercise 3: Multiple Inheritance (Mixin)
// Task: Create a base class Person with properties name and age. Then, create
// two mixins, Address and ContactInfo, each with relevant properties.
// Create a class Employee that extends Person and includes both mixins.
// Instantiate the Employee class and demonstrate how it inherits properties
// from both the Person class and the mixins.

// let adressMixin = {
//   adress: 'somewhere',
// };

// let contactMixin = {
//   contact: '+46123456789',
// };

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// Object.assign(Person.prototype, adressMixin);
// Object.assign(Person.prototype, contactMixin);

// const greg = new Person('greg', 30);
// console.log(greg.adress); // somewhere
// console.log(greg.contact); // +46123456789
// ===========================================================================
