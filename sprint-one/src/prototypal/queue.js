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


// var Queue = function() {
//   var result = Object.create(Queue.prototype);
//   result.counter = 0;
//   result.storage = {};
//   result.start = 0;
//   return result;
// };

// Queue.prototype.size = function () {
//   return this.counter - this.start;
// };

// Queue.prototype.enqueue = function(item) {
//   this.storage[this.counter] = item;
//   this.counter++;
// };

// Queue.prototype.dequeue = function() {
//   if (this.size() > 0) {
//     this.start++;
//     return this.storage[this.start - 1];
//   }
// };


