function Node(value = null, left = null, right = null, sibling = null) {
  this.value = value;
  this.left = left;
  this.right = right;
  this.sibling = sibling;
}

function BST(node) {
  this.root = node;
}

function connectSiblings(tree) {
  let queue = [];
  let level = 0;
  queue.push({ level: 0, node: tree.root });

  while (queue.length) {
    let current = queue.shift();
    if(queue.length){
      console.log('what is current.level', current.level);
      console.log('what is queue[0].level', queue[0].level);
      if (current.level === queue[0].level) {
        current.node.sibling = queue[0];
      }
    }

    if (current.node.left) {
      queue.push({
        level: current.level + 1,
        node: current.node.left
      });
    }
    if (current.node.right) {
      queue.push({
        level: current.level + 1,
        node: current.node.right
      });
    }
  }
  return tree;
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
