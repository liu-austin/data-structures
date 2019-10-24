// jshint esversion:6
class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.obj = {};
    this.key = 0;
  }

  enqueue(str) {
    this.obj[this.key] = str;
    this.key += 1;
  }

  dequeue() {
    var keys = Object.keys(this.obj).sort((a,b) => Number(a) - Number(b));
    var returnVar = this.obj[keys[0]];
    delete this.obj[keys[0]];
    return returnVar;
  }

  size() {
    return Object.keys(this.obj).length;
  }
}
