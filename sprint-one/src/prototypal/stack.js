var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var result = Object.create(stackMethods);
  return result;
};

var stackMethods = {
  storage: {},
  counter: 0,
  size: function() {
    return this.counter;
  },
  push: function(item) {
    this.storage[this.counter] = item;
    this.counter ++;
  },
  pop: function() {
    if (this.counter > 0) {
      this.counter --;
      return this.storage[this.counter];
    }
  }
};


// var Stack = function() {
//  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
//   var result = Object.create(Stack.prototype);
//   result.storage = {};
//   result.counter = 0;
//   return result;
// };

// Stack.prototype.size = function() {
//   return this.counter;
// };

// Stack.prototype.push = function(item) {
//   this.storage[this.counter] = item;
//   this.counter ++;
// };

// Stack.prototype.pop = function() {
//   if (this.counter > 0) {
//     this.counter --;
//     return this.storage[this.counter];
//   }
// };