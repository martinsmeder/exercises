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
