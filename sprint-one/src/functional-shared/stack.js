var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
  stack.obj = {};
  stack.key = 0;
  _.extend(stack, stackMethods);
  return stack;
};

var stackMethods = {
  push: function(item) {
    this.obj[this.key] = item;
    this.key += 1;
  },

  pop: function() {
    this.key -= 1;
    if (this.key < 0) {
      this.key = 0;
    }
    var returnValue = this.obj[this.key];
    delete this.obj[this.key];
    return returnValue;
  },

  size: function() {
    return this.key;
  }
};
