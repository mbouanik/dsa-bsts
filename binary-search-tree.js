class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (this.root == null) {
      this.root = new Node(val);
      return this.root;
    }
    let head = this.root;
    const node = new Node(val);
    while (head) {
      if (head.val > val) {
        if (head.left == null) {
          head.left = node;
          return this.root;
        }
        head = head.left;
      } else if (head.val < val) {
        if (head.right == null) {
          head.right = node;
          return this.root;
        }
        head = head.right;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, head = this.root) {
    if (this.root == null) {
      this.root = new Node(val);
      return this.root;
    }
    if (head.val > val) {
      if (head.left == null) {
        head.left = new Node(val);
        return this.root;
      }
      this.insertRecursively(val, head.left);
    } else {
      if (head.right == null) {
        head.right = new Node(val);
        return this.root;
      }
      this.insertRecursively(val, head.right);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    while (this.root) {
      if (this.root.val == val) {
        return this.root;
      }
      if (val > this.root.val) {
        this.root = this.root.right;
      } else {
        this.root = this.root.left;
      }
    }

    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, root = this.root) {
    if (root) {
      if (root.val == val) {
        return root;
      }
      if (val > root.val) {
        return this.findRecursively(val, root.right);
      } else {
        return this.findRecursively(val, root.left);
      }
    }
    return undefined;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node = this.root, res = []) {
    res.push(node.val);
    if (node.left) {
      this.dfsPreOrder(node.left, res);
    }
    if (node.right) {
      this.dfsPreOrder(node.right, res);
    }
    return res;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node = this.root, res = []) {
    if (node.left) {
      this.dfsInOrder(node.left, res);
    }
    res.push(node.val);

    if (node.right) {
      this.dfsInOrder(node.right, res);
    }
    return res;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node = this.root, res = []) {
    if (node.left) {
      this.dfsPostOrder(node.left, res);
    }
    if (node.right) {
      this.dfsPostOrder(node.right, res);
    }
    res.push(node.val);

    return res;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    if (!this.root) {
      return [];
    }
    let res = [];
    const queue = [this.root];

    while (queue.length > 0) {
      const current = queue.shift();

      res.push(current.val);
      if (current.left) {
        queue.push(current.left);
      }

      if (current.right) {
        queue.push(current.right);
      }
    }
    return res;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;
