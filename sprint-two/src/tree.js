var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  if (this.children.length === 0) {
    if (this.value === target) {
      return true;
    }
  } else {
    if (this.value === target) {
      return true;
    } else {
      for (var i = 0; i < this.children.length; i++) {
        if (this.children[i].contains(target) === true ) {
          return true;
        }
      }
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
