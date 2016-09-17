var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;

  newTree.children = [];  
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {

  this.children.push(_.extend(Tree(value), {parent: this}));

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

treeMethods.traverse = function(cb) {
  if (this.children.length === 0) {
    cb(this);
  } else {
    cb(this);
    for (var i = 0; i < this.children.length; i++) {
      this.children[i].traverse(cb);
    }
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
