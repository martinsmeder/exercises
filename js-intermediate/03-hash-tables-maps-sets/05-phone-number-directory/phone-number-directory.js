// Phone Number Directory:
// You are building a phone number directory application. Implement a
// function called `phoneNumberDirectory` that takes an array of phone
// numbers as input and returns a Map with names as keys and
// corresponding phone numbers as values.

// Example:
// const phoneNumbers = [
//   'John:123-456-7890',
//   'Jane:987-654-3210',
//   'Joe:555-555-5555',
// ];
// console.log(phoneNumberDirectory(phoneNumbers));
// Output: Map { 'John' => '123-456-7890', 'Jane' => '987-654-3210', 'Joe' => '555-555-5555' }

// Constraints:
// he input array elements should be formatted as `NAME:PHONENUMBER`

function phoneNumberDirectory(arr) {
  // Initiate empty map
  let map = new Map();

  // Loop though array
  arr.forEach((string) => {
    // Split each string into name and number
    const [name, number] = string.split(':');
    // Add name and corresponding number to map
    map.set(name, number);
  });

  // Return updated map
  return map;
}

module.exports = phoneNumberDirectory;
