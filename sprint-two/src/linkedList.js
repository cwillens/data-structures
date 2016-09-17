var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newTail = Node(value);

    if (this.head === null) {
      this.head = newTail;
    }

    if (this.tail !== null) {
      this.tail.next = newTail;
    }

    this.tail = newTail;

  };

  list.removeHead = function() {
    if (this.head === null) {
      return null;
    } else {
      var currHead = this.head;
      this.head = this.head.next;
      return currHead.value;
    }

  };

  list.contains = function(target) {
    var node = this.head;

    while (node) {
      if (node.value === target) {
        return true;
      }
      node = node.next;
    }

    return false;


  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */