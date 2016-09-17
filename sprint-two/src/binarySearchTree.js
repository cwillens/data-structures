var BinarySearchTree = function(value) {
  var tree = Object.create(BinarySearchTree.prototype);
  tree.value = value;
  return tree;
};


BinarySearchTree.prototype.insert = function(value) {
  if (this.value < value) {
    if (this.right === undefined) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  } else if (this.value > value) {
    if (this.left === undefined) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
};

BinarySearchTree.prototype.depth = function (counter, depths) {
  var depths = depths || {max: 1};
  var counter = counter || 0;
  counter ++;
//  var counter = 1;
  //debugger;
  if (this.right === undefined && this.left === undefined) {
    //If this is the final node
    if (counter > depths.max) {
      //Check to see if the current depth is greater than the max depth
      depths.max = counter;
    } 
    if (depths.min) {
      if (counter < depths.min) { depths.min = counter; }
    } else {
      depths.min = counter;
    }
  } else {
    //In the case that more branches exist
    if (this.right) {
      //counter++;
      this.right.depth(counter, depths);
    }
    if (this.left) {
      //counter++;
      this.left.depth(counter, depths);
    }
  }
  return depths;
};

BinarySearchTree.prototype.rebalance = function() {
  var array = [];
  this.depthFirstLog(function(item) {
    array.push(item);
  });
  console.log(array);
  this.value = undefined;
  this.right = undefined;
  this.left = undefined;
  array.sort(function(a, b) {
    return a - b;
  });

  var rebuild = function(spliced, node) {
    var medianIndex = Math.floor(spliced.length / 2);
    var median = spliced[medianIndex];

    node.value = median;

    if (medianIndex < spliced.length - 1) {
      var rightSplice = spliced.slice(medianIndex + 1);
      node.right = BinarySearchTree();
      rebuild(rightSplice, node.right);
    }

    if (medianIndex > 0) {
      var leftSplice = spliced.slice(0, medianIndex);
      node.left = BinarySearchTree();
      rebuild(leftSplice, node.left);
    }

  };

  if (array) {
    rebuild(array, this);
  }


};

BinarySearchTree.prototype.contains = function(value) {
  if (this.value === value) {
    return true;
  } else if (value > this.value) {
    if (this.right) {
      return this.right.contains(value);
    }
  } else {
    if (this.left) {
      return this.left.contains(value);
    }
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
