// jshint esversion:6
class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.obj = {};
    this.key = 0;
  }

  push(str) {
    this.obj[this.key] = str;
    this.key += 1;
  }

  pop() {
    this.key -= 1;
    if (this.key < 0) {
      this.key = 0;
    }
    var returnVar = this.obj[this.key];
    delete this.obj[this.key];
    return returnVar;
  }

  size() {
    return Object.keys(this.obj).length;
  }

}
