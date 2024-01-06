// Search JS object:
// Write a function called contains that searches for a value in a
// nested object. It returns true if the object contains that value.

const nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'foo2',
          },
        },
      },
    },
  },
};

function contains(obj, value) {}

module.exports = contains;

const obj1 = { data: 'stuff' };
const obj2 = {
  data: {
    moreData: 'stuff',
  },
};

// If obj.key is an object, go deeper into object key
// If obj.key is not an object, check value and add to results array

function checkObject(obj) {
  const results = [];

  function traverse(obj) {
    for (const key in obj) {
      if (typeof obj[key] === 'object') {
        traverse(obj[key]);
      } else {
        results.push(obj[key]);
      }
    }
  }

  traverse(obj);
  return results;
}

console.log(checkObject(obj2));
