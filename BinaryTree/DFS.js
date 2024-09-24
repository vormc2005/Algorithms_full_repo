class Node {
    constructor(value) {
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
    insert(value) {
      const newNode = new Node(value);
  
      if (this.root === null) {
        this.root = newNode;
      } else {
        let currentNode = this.root;
        while (true) {
          if (currentNode.value > value) {
            // Left
            if (!currentNode.left) {
              currentNode.left = newNode;
              return this;
            }
            currentNode = currentNode.left;
          } else {
            // Right
            if (!currentNode.right) {
              currentNode.right = newNode;
              return this;
            }
            currentNode = currentNode.right;
          }
        }
      }
    }
    lookup(value) {
      if (!this.root) {
        return false;
      }
      let currentNode = this.root;
  
      while (currentNode) {
        if (currentNode.value > value) {
          // Left
          currentNode = currentNode.left;
        } else if (currentNode.value < value) {
          // Right
          currentNode = currentNode.right;
        } else if (currentNode.value === value) {
          return currentNode;
        }
      }
      return false;
    }

    breadthFirstSearch(){
        let currentNode = this.root;
        let list = [];
        let queue = [];
        queue.push(currentNode);
        while(queue.length > 0){
            currentNode = queue.shift();
            console.log(currentNode.value)
            list.push(currentNode.value);
            if(currentNode.left){
                queue.push(currentNode.left)
            }
            if(currentNode.right){
                queue.push(currentNode.right)
            }
        }
        return list;
    }

    DFSInOrder(){
       return traverseInOrder(this.root, [])
    }

    DFSPostOrder(){
        return traversePostOrder(this.root, [])
    }

    DFSPreOrder(){
        return traversePreOrder(this.root, [])
    } 

  

    visibleTreeNode() {
      // start maxSoFar with smallest number possible so any value root has is greater than it
      return dfs(this.root, Number.NEGATIVE_INFINITY);
    }
    remove(value) {
      if (!this.root) {
        return false;
      }
      let currentNode = this.root;
      let parentNode = null;
      while (currentNode) {
        if (value < currentNode.value) {
          parentNode = currentNode;
          currentNode = currentNode.left;
        } else if (value > currentNode.value) {
          parentNode = currentNode;
          currentNode = currentNode.right;
        } else if (currentNode.value === value) {
          //We have a match, get to work!
  
          //Option 1: No right child:
          if (currentNode.right === null) {
            if (parentNode === null) {
              this.root = currentNode.left;
            } else {
              //if parent > current value, make current left child a child of parent
              if (currentNode.value < parentNode.value) {
                parentNode.left = currentNode.left;
  
                //if parent < current value, make left child a right child of parent
              } else if (currentNode.value > parentNode.value) {
                parentNode.right = currentNode.left;
              }
            }
  
            //Option 2: Right child which doesnt have a left child
          } else if (currentNode.right.left === null) {
            currentNode.right.left = currentNode.left;
            if (parentNode === null) {
              this.root = currentNode.right;
            } else {
              //if parent > current, make right child of the left the parent
              if (currentNode.value < parentNode.value) {
                parentNode.left = currentNode.right;
  
                //if parent < current, make right child a right child of the parent
              } else if (currentNode.value > parentNode.value) {
                parentNode.right = currentNode.right;
              }
            }
  
            //Option 3: Right child that has a left child
          } else {
            //find the Right child's left most child
            let leftmost = currentNode.right.left;
            let leftmostParent = currentNode.right;
            while (leftmost.left !== null) {
              leftmostParent = leftmost;
              leftmost = leftmost.left;
            }
  
            //Parent's left subtree is now leftmost's right subtree
            leftmostParent.left = leftmost.right;
            leftmost.left = currentNode.left;
            leftmost.right = currentNode.right;
  
            if (parentNode === null) {
              this.root = leftmost;
            } else {
              if (currentNode.value < parentNode.value) {
                parentNode.left = leftmost;
              } else if (currentNode.value > parentNode.value) {
                parentNode.right = leftmost;
              }
            }
          }
          return true;
        }
      }
    }
  }

  function traverseInOrder(node, list){
    if(node.left){
        traverseInOrder(node.left, list);
    }
    list.push(node.value);
    if(node.right){
        traverseInOrder(node.right, list)
    }
    return list
  }

  function traversePreOrder(node, list){
    list.push(node.value);
    if(node.left){
        traversePreOrder(node.left, list);
    }
    if(node.right){
        traversePreOrder(node.right, list)
    }
    return list
  }

  function traversePostOrder(node, list){
      if(node.left){
          traversePostOrder(node.left, list);
        }
        if(node.right){
            traversePostOrder(node.right, list)
        }
        list.push(node.value);
    return list
  }
  
  const tree = new BinarySearchTree();
  tree.insert(9);
  tree.insert(4);
  tree.insert(6);
  tree.insert(20);
  tree.insert(170);
  tree.insert(15);
  tree.insert(1);
//   tree.remove(170);
  JSON.stringify(traverse(tree.root));
  // console.log(tree)
//   console.log(tree.lookup(20));
//   console.log(tree.breadthFirstSearch())
//   console.log(tree.DFSInOrder())
  // console.log(tree.DFSPreOrder())
//   console.log(tree.DFSPostOrder())
// console.log(tree.root)
// console.log(tree.treeMaxDepth())

  //     9
  //  4     20
  //1  6  15  170

  function treeHeight(tree) {
    if (tree === null) return 0;
    const leftHeight = treeHeight(tree.left);
    const rightHeight = treeHeight(tree.right);
    if (leftHeight === -1 || rightHeight === -1) return -1;
    if (Math.abs(leftHeight - rightHeight) > 1) return -1;
    return Math.max(leftHeight, rightHeight) + 1;
}

// console.log(treeHeight(tree.root))

//Max depth of a tree
function dfs(root) {
  // Null node adds no depth
  if (root === null) return 0;
  // num nodes in longest path of current subtree = max num nodes of its two subtrees + 1 current node
  return Math.max(dfs(root.left), dfs(root.right)) + 1;
}

function treeMaxDepth(root) {
  return root !== null ? dfs(root) - 1 : 0;
}


console.log(treeMaxDepth(tree.root))

  
  function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }

