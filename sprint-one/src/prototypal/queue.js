var Queue = function() {
  var result = Object.create(queueMethods);
  return result;
};

var queueMethods = {
  counter: 0,
  storage: {},
  start: 0,
  size: function() {
    return this.counter - this.start;
  },
  enqueue: function(item) {
    this.storage[this.counter] = item;
    this.counter++;
  },
  dequeue: function() {
    if (this.start < this.counter) {
      this.start ++;
      return this.storage[this.start - 1];
    }
  }
};


