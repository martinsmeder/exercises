// Graph Depth-First Traversal:
// Write a function called depthFirstTraversal that performs a Depth First
// Traversal of a graph starting from a specified vertex and returns an array
// containing the vertices visited in the order they were traversed. Use the
// Graph class as well as the Stack class from the previous lessons.

// Hints:
// 1. he Graph class has an adjacencyList property that stores the vertices
//    and their neighbors.
// 2. The Stack class has a push method that adds an element to the top of
//    the stack and a pop method that removes the top element from the stack.
// 3. Use a results array to store the vertices visited in the order they were
//    traversed

// Example Graph
// A --- B
// |     |
// |     |
// C --- D
// |     |
// |     |
// E --- F

// const graph = new Graph();

// // Add vertices
// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");
// graph.addVertex("D");
// graph.addVertex("E");
// graph.addVertex("F");

// // Add edges
// graph.addEdge("A", "B");
// graph.addEdge("A", "C");
// graph.addEdge("B", "D");
// graph.addEdge("C", "D");
// graph.addEdge("C", "E");
// graph.addEdge("D", "F");
// graph.addEdge("E", "F");

// depthFirstTraversal(graph, "A"); // ['A', 'C', 'E', 'F', 'D', 'B'];

const Stack = require("./stack");

function depthFirstTraversal(graph, start) {}

module.exports = depthFirstTraversal;

// Add start (a) to stack and mark as visited (add to array)
// Get adjacent vertices
// Go to next (b) and mark as visited (add to array)
// Go to next (d) and mark as visited (add to array)
// Go to next (c) and mark as visited (add to array)
// Remove the vertices that doesn't have any unvisited neighbors (a,b)
// Check if what's at the top of the stack has any unvisited neighbors
// Go to unvisited neighbor, mark as visited (add to array) and add to stack
// Check again at top of stack for unvisited neighbors and get it
// Continue until everything is visited
// Then remove everything from the stack and return the array
