// jshint esversion:6
var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.key = 0;
  this.obj = {};
};

Queue.prototype.enqueue = function(item) {
  this.obj[this.key] = item;
  this.key += 1;
};

Queue.prototype.dequeue = function() {
  var keys = Object.keys(this.obj).sort((a,b) => Number(a) - Number(b));
  var returnVar = this.obj[keys[0]];
  delete this.obj[keys[0]];
  return returnVar;
};

Queue.prototype.size = function() {
  return Object.keys(this.obj).length;
};

