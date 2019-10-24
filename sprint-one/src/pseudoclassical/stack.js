var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.key = 0;
  this.obj = {};
};

Stack.prototype.push = function(item) {
  this.obj[this.key] = item;
  this.key += 1;
};

Stack.prototype.pop = function() {
  this.key -= 1;
  if (this.key < 0) {
    this.key = 0;
  }
  var returnVariable = this.obj[this.key];
  delete this.obj[this.key];
  return returnVariable;
};

Stack.prototype.size = function() {
  return Object.keys(this.obj).length;
};