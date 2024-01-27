// Find Middle:
// Write a function called findMiddle that takes in a linked list.

// The function should return the middle node of the linked list. If
// the list has an even number of nodes, return the second middle node
// in the list.

// The function will take in the list instance.

// Examples:
// const list = new LinkedList();
// list.add(1);
// list.add(2);
// list.add(3); // Middle node
// list.add(4);
// list.add(5);
// findMiddle(list); // returns 3

// const list = new LinkedList();
// list.add(1);
// list.add(2);
// list.add(3);
// list.add(4); // Second middle node
// list.add(5);
// list.add(6);
// findMiddle(list); // returns 4

function findMiddle(linkedList) {
  // Initiate fast and slow pointers at beginning of list
  let slow = linkedList.head;
  let fast = linkedList.head;

  // Keep looping until either fast or the element after fast is
  // null (meaning the end has been reached)
  while (fast !== null && fast.next !== null) {
    // Increase slow pointer location by 1
    slow = slow.next;
    // Increase fast pointer location by 2
    fast = fast.next.next;
  }

  // Return the data of the slow pointer when the fast pointer has
  // reached the end, meaning that the slow pointer is at the middle
  return slow.data;
}

module.exports = findMiddle;
