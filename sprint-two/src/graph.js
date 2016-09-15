

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = {edges: []};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.storage.hasOwnProperty(node);
  /*for (var key in this.storage) {
    if (this.storage[key].value === node) {
      return true;
    }
  }
  return false;*/
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var value;
  for (var i = 0; i < this.storage[node].edges.length; i++) {
    value = this.storage[node].edges[i];
    this.storage[value].edges.splice(this.storage[value].edges.indexOf(node.toString()), 1);
  }
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return (this.storage[fromNode].edges.includes(toNode.toString()) && this.storage[toNode].edges.includes(fromNode.toString()));
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].edges.push(toNode.toString());
  this.storage[toNode].edges.push(fromNode.toString());
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.storage[fromNode].edges.splice(this.storage[fromNode].edges.indexOf(toNode.toString()), 1);
  this.storage[toNode].edges.splice(this.storage[toNode].edges.indexOf(fromNode.toString()), 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.storage) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

