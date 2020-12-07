class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(name) {
        this.children.push(new Node(name));
        return this;
    }

    // given an input empty array, traverse the tree using DFS and store all node's names into the input array then return it
    
    // solved with same method as DFS only with unshift instead of push
    depthFirstSearch(array) {
        // create an empty working array with root node
        let workingArray = [this]
        // while the workingArray has elements in the array
        while (workingArray.length) {
            // remove the first element/node of the workingArray
            let node = workingArray.shift()
            // push the first element/node's names into array
            array.push(node.name)
            // using spread operator, take every element from node's children array and push into the START of the workingArray
            workingArray.unshift(...node.children)
        }
        // return array
        return array
    }

    // // solved more simply with recursion
    // depthFirstSearch(array) {
    //     // at a node, return that node's name to array
    //     array.push(this.name)
    //     // for every child of that node, recursively call DFS and pass in final array
    //     for (let child of this.children) {
    //         child.depthFirstSearch(array)
    //     }
    //     return array
    // }

}