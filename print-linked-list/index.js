// print every element of LinkedList
function printLinkedList(head) {
    let current = head
    while (current) {
        console.log(current.data)
        current = current.next
    }
}