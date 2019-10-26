var BinarySearchTree = function(value) {
  var bST = Node(value);

  bST.insert = function(num) {
    var newNode = Node(num);
    placeNode(bST, newNode);
  };

  bST.contains = function(target) {
    return checkNode(bST, target);
  };

  bST.depthFirstLog = function(func) {
    modifyNodes(bST, func);
  };

  return bST;
};

var Node = function(number) {
  node = {};
  node.value = number;
  node.left = null;
  node.right = null;

  return node;
};

var placeNode = function(rootnode, node) {
  if (node.value === rootnode.value) {
    return;
  }
  if (node.value > rootnode.value) {
    if (rootnode.right === null) {
      rootnode.right = node;
    } else {
      placeNode(rootnode.right, node);
    }
  } else {
    if (rootnode.left === null) {
      rootnode.left = node;
    } else {
      placeNode(rootnode.left, node);
    }
  }
};

var checkNode = function(rootnode, targetNum) {
  var found = 0;
  if (rootnode.value === targetNum) {
    found += 1;
  } else if (targetNum < rootnode.value) {
    if (rootnode.left !== null) {
      found += checkNode(rootnode.left, targetNum);
    }
  } else {
    if (rootnode.right !== null) {
      found += checkNode(rootnode.right, targetNum);
    }
  }
  return found ? true : false;
};

var modifyNodes = function(rootnode, func) {
  rootnode.value = func(rootnode.value);
  if (rootnode.left !== null) {
    modifyNodes(rootnode.left, func);
  }
  if (rootnode.right !== null) {
    modifyNodes(rootnode.right, func);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// bST.insert: O(log(n)),
// bST.contains: O(log(n)),
// bST.depthFirstLog: O(n)

