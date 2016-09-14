var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.counter = 0;
  someInstance.storage = {};
  _.extend(someInstance, queueMethods);
  return someInstance;

};

var queueMethods = {
  size: function() {
    return this.counter;
  },
  enqueue: function(item) {
    this.storage[this.counter] = item;
    this.counter ++;
  },
  dequeue: function() {
    if (this.counter > 0) {
      var result = this.storage[0];
      this.counter --;
      for (var i = 1; i <= this.counter; i++) {
        this.storage[i - 1] = this.storage[i];
      }
      delete this.storage[this.counter];
      return result;
    }
  }
};


