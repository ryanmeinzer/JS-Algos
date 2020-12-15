class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// return the sum of a BT's node depths 

// solved recursively with 0(n)
function nodeDepths(root, depth = 0) {
    // create running 'depth' variable with initial 0 value
    // if the either the left or right node doesn't exist (if node only has one/either child), escape
    if (!root) return 0
    // recursively traverse with DFS for node's left and right children, incremeneting each node's depth by re-assigning it to 'depth' and return the result
    return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
}