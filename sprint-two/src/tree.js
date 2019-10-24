var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.childKey = 0;

  // your code here
  newTree.children = {};

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};
treeMethods.addChild = function(value) {
  var childTree = Tree(value);
  this.children[this.childKey] = childTree;
  this.childKey += 1;
};

treeMethods.contains = function(target) {
  var contains = 0;
  if (this.value === target) {
    contains += 1;
  }
  for (var i in this.children) {
    contains += this.children[i].contains(target);
  }
  return contains ? true : false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
// treeMethods.addChild: O(1),
// treeMethods.contains: O(n)