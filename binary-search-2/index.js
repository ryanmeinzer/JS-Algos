// test
let arr = [2, 3, 4, 6, 7, 8, 11, 12]
let val = 7
let answer = 4
if (binarySearch(arr, val) === answer) {
    console.log('passed')
} else {
    console.log('failed')
}

// create a binary search function to return a value's index if found in a sorted array

// solved with 0(log n) 
function binarySearch(arr, val) {
    // create a left pointer at the start of array
    let left = 0
    // create a right pointer at the end of the array
    let right = arr.length - 1
    // while the left pointer is less than or equal to the right pointer
    while (left <= right) {
        // create a pointer in the middle
        let middle = Math.floor((left + right) / 2)
        // create 'middle' value variable
        let middleValue = arr[middle]
        // if the middleValue equals value, return it's index
        if (middleValue === val) {
            return middle
        }
        // if the middleValue is less than value, increment left pointer
        if (middleValue < val) left = middle + 1
        // if the middleValue is greater than value, decrement right pionter
        if (middleValue > val) right = middle - 1
    }
    // return -1 if value not found
    return -1
}
