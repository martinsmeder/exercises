// Destructuring 1: Basic Object Destructuring

// // Initial object
// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 30,
//   address: {
//     street: '123 Main St',
//     city: 'Anytown',
//     state: 'CA',
//   },
// };

// Task: Destructure the 'person' object to extract the 'firstName' and 'lastName' properties.
// Create two variables, firstName and lastName, and assign them the corresponding values.

// const { firstName, lastName } = person;

// console.log(firstName); // Should output: "John"
// console.log(lastName); // Should output: "Doe"

// ===========================================================================

// Destructuring 2: Nested Object Destructuring

// Initial object
// const user = {
//   id: 123,
//   username: 'jsmith',
//   email: 'jsmith@example.com',
//   profile: {
//     fullName: 'John Smith',
//     location: {
//       city: 'New York',
//       country: 'USA',
//     },
//   },
// };

// const {
//   username: username,
//   email: email,
//   profile: {
//     location: { city: city },
//   },
// } = user;

// // Task: Destructure the 'user' object to extract the 'username', 'email', and 'city'
// // properties. Create three variables: username, email, and city, and assign them the
// // corresponding values.

// // Your code here

// console.log(username); // Should output: "jsmith"
// console.log(email); // Should output: "jsmith@example.com"
// console.log(city); // Should output: "New York"

// ===========================================================================

// Destructuring 3: Renaming Properties

// Initial object
// const product = {
//   productID: 456,
//   productName: 'Laptop',
//   price: 999.99,
//   specifications: {
//     weight: '3.5 lbs',
//     dimensions: {
//       width: '15 inches',
//       height: '10 inches',
//     },
//   },
// };

// // Task: Destructure the 'product' object to extract the 'productID' and 'price' properties,
// // but rename 'productID' to 'id' and 'price' to 'cost'. While your'e at it, extract 'width'
// // and 'height', but rename them to 'w' an 'h'
// // Create four variables: id, cost, w and h - and assign them the corresponding values.

// // Your code here

// const {
//   productID: id,
//   price: cost,
//   specifications: {
//     dimensions: { width: w, height: h },
//   },
// } = product;

// console.log(id); // Should output: 456
// console.log(cost); // Should output: 999.99
// console.log(w); // Should output: 15 inches
// console.log(h); // Should output: 10 inches

// ===========================================================================

// Spread 1: Copying and Extending an Object

// Task: You have an object representing a user profile. Create a new object that copies the
// existing user profile and adds additional information.

// Code to Use Spread On:

// const userProfile = {
//   username: 'jsmith',
//   email: 'jsmith@example.com',
// };

// Your code here

// const updatedUserProfile = { ...userProfile, firstName: 'John', age: 30 };

// console.log(updatedUserProfile);

// Expected Result: updatedUserProfile should be a new object that contains all properties
// from userProfile, plus additional properties for the user's first name and age:

// {
//   username: "jsmith",
//   email: "jsmith@example.com",
//   firstName: "John",
//   age: 30,
// }

// ===========================================================================

// Spread 2: Merging Multiple Objects

// Task: You have information about a product, its specifications, and pricing. Create a single
// object that combines this information from different sources.

// Code to Use Spread On:

// const productInfo = {
//   productName: 'Laptop',
// };

// const productSpecifications = {
//   weight: '3.5 lbs',
//   dimensions: '15 inches',
// };

// const productPricing = {
//   price: 999.99,
// };

// const mergedProduct = {
//   ...productInfo,
//   ...productSpecifications,
//   ...productPricing,
// };

// console.log(mergedProduct);

// Expected Result: mergedProduct should be a single object that combines properties from
// productInfo, productSpecifications, and productPricing:

// {
//   productName: "Laptop",
//   weight: "3.5 lbs",
//   dimensions: "15 inches",
//   price: 999.99,
// }

// ===========================================================================

// Spread 3: Updating Nested Properties

// Task: You have a user profile with nested address information. Update the user's city and
// state using the spread operator.

// Code to Use Spread On:

// const userProfile = {
//   username: 'jsmith',
//   email: 'jsmith@example.com',
//   address: {
//     city: 'New York',
//     state: 'NY',
//   },
// };

// const updatedUserProfile = {
//   ...userProfile, // Copies everything except the code I'm changing
//   address: {
//     // Changed code
//     city: 'San Francisco',
//     state: 'CA',
//   },
// };

// console.log(updatedUserProfile);

// Expected Result: updatedUserProfile should be a new object that copies the original
// userProfile and updates the city to "San Francisco" and the state to "CA":

// {
//   username: "jsmith",
//   email: "jsmith@example.com",
//   address: {
//     city: "San Francisco",
//     state: "CA",
//   },
// }

// ===========================================================================

// Rest 1: Collecting Remaining Properties

// Task: You have an object representing a user profile. Extract the username and collect
// the remaining properties into a new object.

// Code to Use Rest On:

// const userProfile = {
//   username: 'jsmith',
//   email: 'jsmith@example.com',
//   age: 30,
//   city: 'New York',
// };

// const { username: username, ...rest } = userProfile;

// console.log(username); // jsmith
// console.log(rest); // {email: 'jsmith@example.com', age: 30, city: 'New York'}

// // ===========================================================================

// Rest 2: Combining with Destructuring

// Task: You have an object representing a product with various properties. Use object
// destructuring with the rest operator to extract specific properties and collect the rest
// into a new object.

// Code to Use Rest On:

// const product = {
//   productName: 'Laptop',
//   weight: '3.5 lbs',
//   dimensions: '15 inches',
//   price: 999.99,
//   brand: 'ExampleBrand',
// };

// const { productName: productName, weight: weight, ...rest } = product;

// const productDetails = {
//   productName: productName,
//   weight: weight,
//   rest: {
//     ...rest,
//   },
// };

// console.log(productDetails); // {productName: 'Laptop', weight: '3.5 lbs'}

// // ===========================================================================

// Rest 3: Handling Default Values

// Task: You have an object representing user preferences. Extract the theme property and set
// a default value for fontSize if it doesn't exist.

// Code to Use Rest On:

// const userPreferences = {
//   theme: 'Dark',
// };

// const { fontSize = '16px', ...rest } = userPreferences;

// const preferences = {
//   ...rest,
//   fontSize: fontSize,
// };

// console.log(preferences); // {theme: 'Dark', fontSize: '16px'}

// Expected Result: preferences should be a new object that contains the theme property and,
// if fontSize is not present, it should default to "16px":

// {
//   theme: "Dark",
//   fontSize: "16px",
// }

// ===========================================================================

// This 1: Object Method
// Task: Create an object representing a person with a method that uses this
// to introduce the person.

// const person = {
//   firstName: 'Greg',
//   lastName: 'Gregson',
//   greet: function () {
//     console.log(`Hi, my name is ${this.firstName} ${this.lastName}!`);
//   },
// };

// person.greet(); // Hi, my name is Greg Gregson!

// ===========================================================================

// This 2: Constructor Function
// Task: Create a constructor function for a car. Inside the constructor
// function, set properties like make and model using this. Also, create a
// method that prints the car's details using this.

// function CarConstructor(model, year) {
//   this.model = model;
//   this.year = year;

//   this.printDetails = () => {
//     console.log(`Model: ${this.model}, Year: ${this.year}.`);
//   };
// }

// const tesla = new CarConstructor('Tesla', '2023');
// tesla.printDetails(); // Model: Tesla, Year: 2023.

// ===========================================================================

// This 3: Class Definition
// Task: Create a JavaScript class representing a book. Inside the class, define
// properties such as title, author, and publishedYear using this. Additionally,
// create a method named getBookInfo that returns a string with the book's
// details using this. Instantiate an object of this class and call the
// getBookInfo method.

// class Book {
//   constructor(title, author, published) {
//     this.title = title;
//     this.author = author;
//     this.published = published;
//   }
//   bookInfo() {
//     console.log(
//       `Title: ${this.title}, Author: ${this.author}, Published: ${this.published}.`
//     );
//   }
// }

// const myBook = new Book('Stuff', 'Me', '2023');
// myBook.bookInfo();

// ===========================================================================

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

// Static methods: Static Method for Utility Calculation
// Task: Create a class MathOperations that includes a static method
// calculateSum for calculating the sum of an array of numbers. Implement
// the static method so that it can be used to find the sum of numbers
// without creating an instance of the class.

// class MathOperations {
//   static calculateSum(array) {
//     return array.reduce((acc, curr) => acc + curr);
//   }
// }

// const numbers = [1, 2, 3, 4, 5];

// console.log(MathOperations.calculateSum(numbers)); // 15

// ===========================================================================

// Inheritance 1: Basic Inheritance
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

// Inheritance 2: Method Overriding
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
