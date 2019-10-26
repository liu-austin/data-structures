// jshint esversion:6

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var graphNodeEdges = [];
  this.nodes[node] = graphNodeEdges;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return !!this.nodes[node];
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.nodes[node]) {
    delete this.nodes[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.nodes[fromNode] && this.nodes[toNode]) {
    return (this.nodes[fromNode].includes(toNode) && this.nodes[toNode].includes(fromNode));
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.nodes[fromNode] && this.nodes[toNode]) {
    this.nodes[fromNode].push(toNode);
    this.nodes[toNode].push(Number(fromNode));
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.nodes[fromNode] && this.nodes[toNode]) {
    this.nodes[fromNode].splice(this.nodes[fromNode].indexOf(toNode), 1);
    this.nodes[toNode].splice(this.nodes[toNode].indexOf(fromNode), 1);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // var connectToFive = function(item) {
  //   graph.addEdge(item, 5);
  // };
  for (var i in this.nodes) {
    cb(i);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


