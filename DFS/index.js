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
    depthFirstSearch(array) {
        // at a node, return that node's name to array
        array.push(this.name)
        // for every child of that node, recursively call DFS and pass in final array
        for (let child of this.children) {
            child.depthFirstSearch(array)
        }
        return array
    }
}