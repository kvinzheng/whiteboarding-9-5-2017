## Populate each pointer to point to its next right node.
Given a binary tree

```javascript
function Node(val, left, right, next) {
  this.val = val;
  this.left = left;
  this.right = right;
  this.next = next;
}
```
Populate each next pointer to its next right node, the next pointer should be set to Null. Initially, all next pointers are set to Null.

Notes:

You may only use constant extra space.
You may assume that it is a perfect binary tree (ie, all leaves are at the same level, and every parent has two children).

After calling your function, the tree should look like:

    1 -> NULL
   /  \
  2 -> 3 -> NULL
 / \  / \
4->5->6->7 -> NULL
