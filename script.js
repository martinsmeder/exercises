// Class fields 1: Private Fields
// Task: Create a class representing a bank account. Implement a private field
// #balance that stores the account balance. Include a method getBalance()
// that allows users to retrieve the balance. Ensure that #balance cannot be
// accessed directly from outside the class.

// class BankAccount {
//   #balance;
//   constructor() {
//     this.#balance = 1000000000;
//   }
//   getBalance() {
//     console.log(`Balance: ${this.#balance}$.`);
//   }
// }

// const account = new BankAccount();
// console.log(account.#balance); // Throws error because of private field
// account.getBalance(); // Balance: 1000000000$.

// ===========================================================================

// Class fields 2: Accessor Fields
// Task: Create a class representing a temperature converter. Implement an
// accessor field celsius that allows users to set and get the temperature in
// Celsius. Include an accessor field fahrenheit that automatically converts
// and returns the temperature in Fahrenheit whenever it is accessed.

// class TempConverter {
//   constructor() {
//     this.temp;
//   }
//   set celsius(value) {
//     return (this.temp = value);
//   }
//   get celsius() {
//     return this.temp;
//   }
//   get fahrenheit() {
//     return (this.temp * 9) / 5 + 32;
//   }
// }

// const temp = new TempConverter();

// temp.celsius = 20;
// console.log(temp.celsius);
// console.log(temp.fahrenheit);

// ===========================================================================

// Class fields 3: Public Fields
// Task: Create a class representing a product. Implement public fields name,
// price, and quantity that store product information. Include a method
// getTotalPrice() that calculates and returns the total cost of the product
// based on its price and quantity. Allow users to access and modify the
// fields directly.

// class Product {
//   constructor(name, price, quantity) {
//     this.name = name;
//     this.price = price;
//     this.quantity = quantity;
//   }
//   getTotalPrice() {
//     const totalPrice = this.price * this.quantity;
//     console.log(`Total price: ${totalPrice}`);
//   }
// }

// const computers = new Product('Computers', 1000, 5);
// computers.getTotalPrice(); // Total price: 5000
// computers.price = 0;
// computers.getTotalPrice(); // Total price: 0

// ===========================================================================
