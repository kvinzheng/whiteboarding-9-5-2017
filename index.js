function Node(value = null, left = null, right = null, sibling = null) {
  this.value = value;
  this.left = left;
  this.right = right;
  this.sibling = sibling;
}

function BST(node) {
  this.root = node;
}

function connectSiblings(root) {
  let queue = [];
  let level = 0;
  let current = root;
  queue.push({
    level: 1,
    node: current
  });

  while (queue.length) {
    current = queue.shift();
    console.log('crrent.level==', current.level);
    console.log('queuelevel==', queue);
    if(queue[0]){
      if (current.level === queue[0].level) {
        current.sibling = queue[0];
      }
    }

    if (current.left) {
      queue.push({
        level: current.level + 1,
        node: current.left
      });
    }
    if (current.right) {
      queue.push({
        level: current.level + 1,
        node: current.right
      });
    }
    
  }
  return current;
}

let lvl2d = new Node(7, null, null, null);
let lvl2c = new Node(6, null, null, null);
let lvl2b = new Node(5, null, null, null);
let lvl2a = new Node(4, null, null, null);
let right = new Node(3, lvl2c, lvl2d, null);
let left = new Node(2, lvl2a, lvl2b, null);
let rootNode = new Node(1, left, right, null);
let tree = new BST(rootNode);
console.log(connectSiblings(tree));
