// jshint esversion:6

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.tupleCount = 0;
  this.keyValuePairs = [];
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!bucket) {
    var newBucket = [];
    this._storage.set(index, newBucket);
  }
  if (this._storage.get(index).length > 0) {
    for (var i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i][0] === k) {
        this._storage.get(index)[i][1] = v;
        this.keyValuePairs[this.keyValuePairs.indexOf(JSON.stringify({k: this._storage.get(index)[i][1]}))] = JSON.stringify({k: v});
      }
    }
  }
  this._storage.get(index).push([k, v]);
  this.keyValuePairs.push(JSON.stringify({k: v}));
  if (this.tupleCount > 0.75 * this._limit) {
    // this._limit *= 2;
    // var newHashTable = new HashTable();
    // for (var i = 0; i < this.keyValuePairs.length; i++) {
    //   var obj = JSON.parse(this.keyValuePairs[i]);
    //   newHashTable.insert(Object.keys(obj)[0], obj[Object.keys(obj)[0]]);
    // }
    // this._storage = newHashTable._storage;
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      this.keyValuePairs.splice(this.keyValuePairs.indexOf(JSON.stringify({k: bucket[i][0][1]})), 1);
      delete bucket[i][0];
    }
  }
  this.tupleCount -= 1;
  if (this.tupleCount < 0.25 * this._limit) {
    // this._limit /= 2;
    // var newHashTable = new HashTable();
    // for (var i = 0; i < this.keyValuePairs.length; i++) {
    //   var obj = JSON.parse(this.keyValuePairs[i]);
    //   newHashTable.insert(Object.keys(obj)[0], obj[Object.keys(obj)[0]]);
    // }
    // this._storage = newHashTable._storage;

  }
};

var getEachTuple = function(bucket) {
  let keyPairs = [];
  for (var i = 0; i < bucket.length; i++) {
    keyPairs.push([bucket[i][0], bucket[i][1]]);
  }
  return keyPairs;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



