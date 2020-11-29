class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(name) {
        this.children.push(new Node(name));
        return this;
    }

    // given an input empty array, traverse the tree using BFS and store all node's names into the input array then return it
    breadthFirstSearch(array) {
        // create an empty working array with root node
        let workingArray = [this]
        // while the workingArray has elements in the array
        while (workingArray.length) {
            // remove the first element/node of the workingArray
            let node = workingArray.shift()
            // push the first element/node's names into array
            array.push(node.name)
            // using spread operator, take every element from node's children array and push into the END of the workingArray
            workingArray.push(...node.children)
        }
        // return array
        return array
    }

}