var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.storage = {};

  list.addToTail = function(value) {
    debugger;
    if (list.head === null) {
      list.head = Node(value);
      list.tail = Node(value);
      list.storage = Node(value);
    } else {
      var help = function(node) {
        if (node.next === null) {
          node.next = Node(value);
          list.tail = node.next;
        } else {
          help(node.next);
        }
      };
      help(list.storage);
    }
  };

  list.removeHead = function() {
  };

  list.contains = function(target) {
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

list = {
  head: 6,
  storage: {value: 5, next: {value: 7, next: null}},
};

/*
base case - next = null;

*/