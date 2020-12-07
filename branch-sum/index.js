// return the branch sums from left to right of a BST

// solved recursively with 0(n)
function branchSums(node = root, runSum = 0, results = []) {
    // create (head/root) node to operate with by assigning node to provided root
    // create a running sum variable 'runSum' set to 0
    // create an empty 'result' array
    // recursively traverse with DFS
    // if the either the left or right node doesn't exist (if node only has one/either child), escape
    if (!node) return
    // add node's value to runSum as we recurse through branch
    runSum = runSum + node.value
    // if the next node doesn't exist (if at end of branch and is a leaf), add runSum to results
    if (!node.left && !node.right) {
        results.push(runSum)
    }
    // recurse with node's left and right children
    branchSums(node.left, runSum, results)
    branchSums(node.right, runSum, results)
    // once recursion escapes, return results
    return results
}