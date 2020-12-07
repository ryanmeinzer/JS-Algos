class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// find the closest value to the target in a BST

// solved iteratively with 0(n)
function findClosestValueInBst(tree, target, closest = tree.value) {
    // instantiate function with 'closest' variable to hold the resulting value (done above)
    // create a 'node' variable to operate with
    let node = tree
    // loop through tree so long as the node exists
    while (node) {
        // re-assign 'closest' if closer
        if (Math.abs(target - closest) > Math.abs(target - node.value)) {
            closest = node.value
        }
        // evaluate which left or right child's value is closer to the target value, to respectively explore
        if (target < node.value) {
            node = node.left
        } else {
            node = node.right
        }
    }
    // exit while loop as exploration is finished, return 'closest'
    return closest
}