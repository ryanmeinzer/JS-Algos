//input
array = [8, 5, 2, 9, 5, 6, 3]
answer = [2, 3, 5, 5, 6, 8, 9]

// test solution = [11, -1]
if (bubbleSort(array) === answer) {
    console.log('passed')
} else {
    console.log('failed')
}

function bubbleSort(array) {
    // solve with nested loops
    // (find largest element of array and drag it to right-hand side)
    // for all i elements (outer for loop)
    for (let i = 0; i < array.length; i++) {
        // for every j step/element with a shrinking element size set (inner for loop), restrict window with i and subtracting 1 as the array length is always offset by one based off the 0-index of the array and I want to make sure we handle the first iteration case where i = 0 so that I don't iterate out of bounds
        for (let j = 0; j < (array.length - i - 1); j++) {
            // if the element at j is greater than j + 1
            if (array[j] > array[j + 1]) {
                // swap elements at j and j + 1
                let lesser = array[j + 1]
                array[j + 1] = array[j]
                array[j] = lesser
            }
        }
    }
    // return bubble-sorted array
    return array
}