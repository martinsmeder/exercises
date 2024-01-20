// Defining maps:
const emptyMap = new Map();

const nameMap = new Map([
  [1, 'John'],
  [2, 'Jane'],
  [3, 'Joe'],
]);

console.log(nameMap);

const myFunction = () => {};
const emptyObj = {};

const map2 = new Map([
  ['name', 'John'],
  [1, 'number one'],
  [true, 'really true'],
  [null, 'null'],
  [myFunction, 'empty function'],
  [emptyObj, 'empty object'],
]);

console.log(map2);

// Retrieve data
console.log(nameMap.get(1)); // John
console.log(map2.get(myFunction)); // Empty function
console.log(map2.get(emptyObj)); // Empty object

// Setting data
nameMap.set(4, 'Jack');
nameMap.set(5, 'Jill');
console.log(nameMap);

// Check if a key exists
console.log(nameMap.has(1)); // True
console.log(nameMap.has(6)); // False

// Deleting
nameMap.delete(1);
console.log(nameMap.has(1)); // False

// Getting size
console.log(nameMap.size); // 4

// Iterating
for (const [key, value] of nameMap) console.log(key, value);
nameMap.forEach((value, key) => console.log(key, value));
// 2 Jane
// 3 Joe
// 4 Jack
// 5 Jill

// Getting all keys and/or values
console.log(nameMap.keys()); // MapIterator {2, 3, 4, 5}
console.log(nameMap.values()); // MapIterator {Jane, Joe, Jack, Jill}

// Clearing a map
nameMap.clear();
console.log(nameMap.size); // 0
