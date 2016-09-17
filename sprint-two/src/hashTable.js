

var HashTable = function(limit) {
  this._limit = limit;
  this._storage = LimitedArray(this._limit);
  this._counter = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, [[k, v]]);
    this._counter ++;
  } else {
    //Get the array of all the tuples in the bucket
    var currVal = this._storage.get(index);
    var indexInHash = -1;
    for (var i = 0; i < currVal.length; i++) {
    //Iterate through all of the tuples in the bucket
      if (currVal[i][0] === k) {
        indexInHash = i;
      }
    }
    if (indexInHash === -1) {
      //If the key does not exist in the bucket, concat the key value
      // pair to the bucket
      this._storage.set(index, currVal.concat([[k, v]]));
      this._counter++;
    } else {
      //If the key value exists, replace the value
      currVal[indexInHash][1] = v;
      this._storage.set(index, currVal);
    }
  }

  if ((this._counter / this._limit) >= .75) {
    this.resize(Math.floor(this._limit * 2));
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
  
  var bucket = this._storage.get(index);
  var currSpot = -1;

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      currSpot = i;
    }  
  }

  if (currSpot >= 0) {
    bucket.splice(currSpot, 1);
  }

  this._storage.set(index, bucket);
  this._counter --;

  if ((this._counter / this._limit) <= .25) {
    this.resize(Math.ceil(this._limit / 2));
  }
};

HashTable.prototype.resize = function(size) {
  //create a copy, storageCopy, of this._storage
  var storageCopy = _.extend({}, this._storage);
  //delete the contents of each bucket in this
  this._storage.each(function(item, index, collection) {
    item = undefined;
  });
  //set this._limit = size, this._storage = LimitedArray(size);
  this._limit = size;
  this._storage = LimitedArray(size);
  this._counter = 0;
  //loop through copy of storage and insert all the things into the new
  var context = this;
  storageCopy.each(function(item, index, collection) {
    if (item) {
      for (var i = 0; i < item.length; i++) {
        context.insert(item[i][0], item[i][1]);
      }
    }
  }); 

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


