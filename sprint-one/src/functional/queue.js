var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[counter] = value;
    counter ++;
  };

  someInstance.dequeue = function() {
    if (counter > 0) {
      counter --;
      var result = storage[0];
      for (var i = 1; i <= counter; i++) {
        storage[i - 1] = storage[i];
      }
      delete storage[counter];
      return result;
    }
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};

