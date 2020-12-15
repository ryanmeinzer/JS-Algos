// input
array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73]
target = 33

// test solution = 3
if (binarySearch(array, target) === 3) {
    console.log('passed')
} else {
    console.log('failed')
} 

// using BS, find and return the index of a target integer within an array, or -1 if not found

// solved with iteration with 0(log n) runtime
function binarySearch(array, target, left = 0, right = array.length - 1) {
    // initialize a 'left' index for first element of array
    // initialize a 'right' index for the last element of array
    // iterate - while we are not at the base case, is the left greater than right, if so return -1 as target doesn't exist in array
    while (left <= right) {
        // find middle number of array
        // calculate the 'middle' index as the average of the 'left' and 'right' rounded down
        let middle = Math.floor((left + right) / 2)
        // create 'middle' value variable
        let middleValue = array[middle]
        // if 'target' is equal to 'middle', return middle index
        if (target === middleValue) return middle
        // if 'target' is less than 'middle', discard all to the right by re-assigning 'right' to 'middle' - 1
        if (target < middleValue) right = middle - 1
        // if 'target' is greater than 'middle', discard all to the left by re-assigning 'left' to 'middle' + 1
        if (target > middleValue) left = middle + 1
    }
    return -1
}

// // solved with recursion with 0(log n) runtime
// function binarySearch(array, target, left = 0, right = array.length - 1) {
//     // initialize a 'left' index for first element of array
//     // initialize a 'right' index for the last element of array
//     // are we at the base case, is the left greater than right, if so return -1 as target doesn't exist in array
//     if (left > right) return -1
//     // find middle number of array
//     // calculate the 'middle' index as the average of the 'left' and 'right' rounded down
//     let middle = Math.floor((left + right) / 2)
//     // create 'middle' value variable
//     let middleValue = array[middle]
//     // if 'target' is equal to 'middle', return middle index
//     if (target === middleValue) return middle
//     // recurse - if 'target' is less than 'middle', discard all to the right by re-assigning 'right' to 'middle' - 1
//     if (target < middleValue) return binarySearch(array, target, left, middle - 1)
//     // recurse - if 'target' is greater than 'middle', discard all to the left by re-assigning 'left' to 'middle' + 1
//     if (target > middleValue) return binarySearch(array, target, middle + 1, right)
// }

// // solved with linear search (not BS) with 0(n)
// function binarySearch(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             return i
//         }
//     }
//     return -1
// }