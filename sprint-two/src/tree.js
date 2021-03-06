var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(_.extend(Tree(value), {parent: this}));
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    var child = this.children[i];
    if (child.contains(target) === true) {
      return true;
    }
  }
  return false;
};

treeMethods.traverse = function(cb) {
  cb(this);

  for (var i = 0; i < this.children.length; i++) {
    var child = this.children[i];
    child.traverse(cb);
  }
};

treeMethods.removeFromParent = function() {
  if (this.parent !== null) {
    this.parent.children.splice(this.parent.children.indexOf(this), 1);
    this.parent = null;
    return this;
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */