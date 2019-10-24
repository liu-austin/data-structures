// jshint esversion:6
var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.key = 0;
  someInstance.obj = {};
  return someInstance;
};

var queueMethods = {
  enqueue: function(item) {
    this.obj[this.key] = item;
    this.key += 1;
  },

  dequeue: function() {

    var keys = Object.keys(this.obj).sort((a, b) => Number(a) - Number(b));
    var returnValue = this.obj[keys[0]];
    delete this.obj[keys[0]];
    return returnValue;
  },

  size: function() {
    return Object.keys(this.obj).length;
  }
};


