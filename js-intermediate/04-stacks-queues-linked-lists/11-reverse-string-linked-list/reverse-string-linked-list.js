// Reverse String Using Linked List:
// Write a function called reverseStringLinkedList that takes in a
// string and returns the reverse of that string.

// The function should return the reversed string, but I want you to
// use the LinkedList class to do it.

// Examples:
// reverseStringQueue('hello'); // olleh
// reverseStringQueue('Howdy'); // ydwoH
// reverseStringQueue('Greetings from Earth'); // htraE morf sgniteerG

const { LinkedList } = require('./linked-list');

function reverseStringLinkedList(str) {
  // Initiate empty linked list
  let list = new LinkedList();
  // Initiate reversed accumulator to empty string
  let reversed = '';
  // Initiate index at the end of the original string
  let index = str.length - 1;

  // Loop though string
  for (let i = 0; i < str.length; i++) {
    // Add each letter to list
    list.add(str[i]);
  }

  // Loop through string again
  for (let j = 0; j < str.length; j++) {
    // Accumulate letters starting from end of list
    reversed += list.get(index);
    // Decrement index by 1 to get the rest of the letters
    index--;
  }

  // Return reversed string
  return reversed;
}

module.exports = reverseStringLinkedList;
