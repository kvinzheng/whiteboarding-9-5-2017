function Node(val, left, right, next) {
  this.val = val;
  this.left = left;
  this.right = right;
  this.next = next;
}

let connect = function(root) {
  let queue = [];
  queue.push(root);
  bfs();

  function bfs() {

    if (queue.length > 0) {
      let tempQueue = [];
      let prevNode = null;

      while (queue.length > 0) {
        let current = queue.shift();
        if (current.left) {
          tempQueue.push(current.left);
          if (prevNode) {
            prevNode.next = current.left;
          }
          prevNode = current.left;
        }

        if (current.right) {
          tempQueue.push(current.right);
          if (prevNode) {
            prevNode.next = current.right;
          }
          prevNode = current.right;
        }
      }

      queue = tempQueue;
      bfs();
    }
  }
  return root;
};

//test case
let lvl2d = new Node(7, null, null, null);
let lvl2c = new Node(6, null, null, null);
let lvl2b = new Node(5, null, null, null);
let lvl2a = new Node(4, null, null, null);
let right = new Node(3, lvl2c, lvl2d, null);
let left = new Node(2, lvl2a, lvl2b, null);
let rootNode = new Node(1, left, right, null);

console.log(connect(rootNode));
