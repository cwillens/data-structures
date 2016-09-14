var Stack = function() {
  var someInstance = {};

  someInstance.storage = {};
  someInstance.counter = 0;

  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {

  size: function() {
    return this.counter;
  },
  push: function(item) {
    this.storage[this.counter] = item;
    this.counter++;
  },
  pop: function() {
    if (this.counter > 0) {
      this.counter--;
      return this.storage[this.counter];
    }
  }
};


