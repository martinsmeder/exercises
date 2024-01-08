// Search JS object:
// Write a function called contains that searches for a value in a
// nested object. It returns true if the object contains that value.

const nestedObject = {
  data: {
    info: {
      stuff: 'foo',
      otherStuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'bar',
          },
        },
      },
    },
  },
};

function contains(obj, value) {
  // Loop through each key in the object.
  for (const key in obj) {
    // Check if the value associated with the current key is an object.
    if (typeof obj[key] === 'object') {
      // If object, call the contains function recursively with nested object and search value.
      // If value found in nested object, return true and exit function, otherwise continue
      // searching for other keys.
      return contains(obj[key], value);
    }

    // If value associated with current key is not an object, check if it matches the search value.
    if (obj[key] === value) {
      // If the value matches the search value, return true and exit function.
      return true;
    }
  }

  // If the function has checked all keys and their associated values and hasn't found the value,
  // return false to indicate that the value is not present in the object or its nested objects.
  return false;
}

module.exports = contains;
