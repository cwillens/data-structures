var Queue = function() {
  this.counter = 0;
  this.storage = {};
  this.start = 0;
};

Queue.prototype.size = function () {
  return this.counter - this.start;
};

Queue.prototype.enqueue = function(item) {
  this.storage[this.counter] = item;
  this.counter++;
};

Queue.prototype.dequeue = function() {
  if (this.size() > 0) {
    this.start++;
    return this.storage[this.start - 1];
  }
};


