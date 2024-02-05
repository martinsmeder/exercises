// Graph Depth-First Traversal:
// Write a function called depthFirstTraversal that performs a Depth First
// Traversal of a graph starting from a specified vertex and returns an array
// containing the vertices visited in the order they were traversed. Use the
// Graph class as well as the Stack class from the previous lessons.

// Hints:
// 1. The Graph class has an adjacencyList property that stores the vertices
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

const Stack = require("./stack");

function depthFirstTraversal(graph, startingVertex) {
  // If the starting vertex is not in the graph, return empty array
  if (!graph.adjacencyList[startingVertex]) return [];

  // Track visited vertices
  const visited = {};
  // Stack to keep track of vertices to visit
  const stack = new Stack();
  // Result array to store the traversal order
  const result = [];

  // Start with the initial vertex
  stack.push(startingVertex);
  // Mark the starting vertex as visited
  visited[startingVertex] = true;

  // Continue traversal until the stack is empty
  while (!stack.isEmpty()) {
    // Get the current vertex from the stack
    const currentVertex = stack.pop();
    // Add the current vertex to the result array
    result.push(currentVertex);

    // Explore neighbors of the current vertex
    for (const neighbor of graph.adjacencyList[currentVertex]) {
      // Visit unvisited neighbors
      if (!visited[neighbor]) {
        // Mark the neighbor as visited
        visited[neighbor] = true;
        // Push the neighbor onto the stack for further exploration
        stack.push(neighbor);
      }
    }
  }

  // Return the result array containing the traversal order
  return result;
}

module.exports = depthFirstTraversal;
