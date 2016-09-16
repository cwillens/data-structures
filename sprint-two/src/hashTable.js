

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, [[k, v]]);
  } else {
    var currVal = this._storage.get(index);
    var indexInHash = -1;
    for (var i = 0; i < currVal.length; i++) {
      if (currVal[i][0] === k) {
        indexInHash = i;
      }
    }
    if (indexInHash === -1) { 
      this._storage.set(index, currVal.concat([[k, v]])); 
    } else {
      currVal[indexInHash][1] = v;
      this._storage.set(index, currVal);
    }
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var temp = this._storage.get(index);
  if (temp) {
    for (var i = 0; i < temp.length; i++) {
      if (temp[i][0] === k) {
        return temp[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


