var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.key = 0;
  someInstance.obj = {};

  return someInstance;
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
    return Object.keys(this.obj).length;
  }
};


