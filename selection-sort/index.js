//input
let array = [8, 5, 2, 9, 5, 6, 3]
let answer = [2, 3, 5, 5, 6, 8, 9]

// test solution = [11, -1]
if (selectionSort(array).toString() === answer.toString()) {
    console.log('passed')
} else {
    console.log('failed')
}

// return a selection-sorted array from an array of integers

function selectionSort(array) {
    // solve with nested loops
    // for all elements i of array (outer loop)
    for (let i = 0; i < array.length; i++) {
        // assume the element at i is the least in the array, so assign i to an 'indexOfMin' variable
        let indexOfMin = i
        // for all elements j + 1 of array (inner loop)
        for (let j = i + 1; j < array.length; j++) {
            // if there's an element at index of j with a lower value than the element at the index of 'indexOfMin'
            if (array[j] < array[indexOfMin]) {
                // re-assign indexOfMin to the j element
                indexOfMin = j
            }
        }
        // if the index of the i element and the index of 'indexOfMin' is not the same, swap the two values
        if (i !== indexOfMin) {
            let lesser = array[indexOfMin]
            array[indexOfMin] = array[i]
            array[i] = lesser
        }
    }
    // return selection-sorted array outside of the outer for loop
    return array
}