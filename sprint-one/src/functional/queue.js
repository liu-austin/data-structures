// jshint esversion:6
var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var key = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[key] = value;
    key += 1;
  };

  someInstance.dequeue = function() {
    var keys = Object.keys(storage).sort((a,b) => Number(a) - Number(b));
    var dequeued = storage[keys[0]];
    delete storage[keys[0]];
    return dequeued;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
