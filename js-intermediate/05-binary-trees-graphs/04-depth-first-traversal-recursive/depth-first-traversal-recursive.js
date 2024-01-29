// // Recursive Depth First Traversal:
// Write a function called recDepthFirstTraversal that takes the root node of
// a binary tree as input and returns an array containing the nodes visited
// in depth-first order. You can use the last lesson as a reference, but you
// must use recursion to solve this problem.

// Depth-first traversal is an algorithm that starts at the root node and
// explores as far as possible along each branch before backtracking. The
// nodes are visited in the order they are encountered during the traversal.

// Example:
// const root = new Node('a');
// root.left = new Node('b');
// root.right = new Node('c');
// root.left.left = new Node('d');
// root.left.right = new Node('e');
// root.right.left = new Node('f');
// depthFirstTraversal(root); // should return ['a', 'b', 'd', 'e', 'c', 'f']

// Hints:
// 1. You can implement the depth-first traversal recursively using a helper
//    function that is called on the left and right subtrees of the current node.
// 2. The base case is when the node is null, in which case we simply return
//    from the function.

// Without recursion:
// function depthFirstTraversal(root) {
//   if (!root) return [];
//   const result = [];
//   const stack = new Stack();
//   stack.push(root);

//   while (!stack.isEmpty()) {
//     const current = stack.pop();
//     result.push(current.data);
//     if (current.right) stack.push(current.right);
//     if (current.left) stack.push(current.left);
//   }
//   return result;
// }

// Test tree:
//      a
//     / \
//    b   c
//   / \   \
//  d   e   f

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function recDepthFirstTraversal(root) {
  // Base-case:
  if (root === null) return;
}

module.exports = {
  Node,
  recDepthFirstTraversal,
};

const root = new Node("a");
root.left = new Node("b");
root.right = new Node("c");
root.left.left = new Node("d");
root.left.right = new Node("e");
root.right.left = new Node("f");
console.log("root: " + root.left.left.left);
recDepthFirstTraversal(root); // should return ['a', 'b', 'd', 'e', 'c', 'f']

// Base-case:
// When current node is null > return from function
