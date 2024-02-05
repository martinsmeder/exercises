// Graph Breadth First Traversal:
// Write a function called breadthFirstTraversal that performs a Breadth
// First Traversal of a graph starting from a specified vertex and returns
// an array containing the vertices visited in the order they were traversed.
// Use the Queue class from the previous lessons.

// Hints
// 1. You can use the provided Queue class to keep track of the vertices to be
//    visited in a breadth-first order.
// 2. Start by enqueuing the startingVertex onto the queue and mark it as
//    visited.
// 3. Use a visited set to keep track of the visited vertices to avoid
//    enqueuing the same vertex multiple times.
// 4. In the traversal loop, dequeue a vertex from the queue, add it to the
//    result array, and enqueue all its neighbors that have not been visited
//    yet.

// Example Graph
// A --- B
// |     |
// |     |
// C --- D
// |     |
// |     |
// E --- F

const Queue = require("./queue");

function breadthFirstTraversal(graph, startingVertex) {
  const result = []; // Array to store the traversal order
  const visited = new Set(); // Set to track visited vertices
  const queue = new Queue(); // Queue for breadth-first traversal

  // Enqueue the starting vertex and mark it as visited
  queue.enqueue(startingVertex);
  visited.add(startingVertex);

  // Continue traversal until the queue is empty
  while (!queue.isEmpty()) {
    const current = queue.dequeue(); // Dequeue the current vertex
    result.push(current); // Add the current vertex to the result array

    // Get neighbors of current vertex and loop through them
    const neighbors = graph.adjacencyList[current];
    neighbors.forEach((neighbor) => {
      // Visit unvisited neighbors
      if (!visited.has(neighbor)) {
        queue.enqueue(neighbor); // Enqueue neighbor for further exploration
        visited.add(neighbor); // Mark the neighbor as visited
      }
    });
  }

  return result; // Return the array containing the traversal order
}

module.exports = breadthFirstTraversal;
