// jshint esversion:6
var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {};
  queue.obj = {};
  queue.key = 0;
  _.extend(queue, queueMethods);
  return queue;
};

var queueMethods = {
  enqueue: function(value) {
    this.obj[this.key] = value;
    this.key += 1;
  },

  dequeue: function() {
    // this.key -= 1;
    if (this.key < 0) {
      this.key = 0;
    }
    var keys = Object.keys(this.obj).sort((a, b) => Number(a) - Number(b));
    var dequeued = this.obj[keys[0]];
    delete this.obj[keys[0]];
    return dequeued;
  },

  size: function() {
    return Object.keys(this.obj).length;
  }
};
