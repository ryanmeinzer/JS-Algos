class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// validate BST

// solved with 0(n)
function validateBst(tree, min, max) {
    // if node is a leaf ie has no children ie is at the bottom, return true
    if (tree === null) return true
    // if node is less than min or greater than or equal to max, return false
    if (tree.value < min || tree.value >= max) return false
    // recurse through all left-sides of nodes and if invalid, return false
    if (!validateBst(tree.left, min, tree.value)) return false
    // recurse through all right-sides of nodes and if invalid, return false
    if (!validateBst(tree.right, tree.value, max)) return false
    // if successfully escapes all recursive validations, return true
    return true
}