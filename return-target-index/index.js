// test
let arr = [1,2,3,5,7,8,10,13]
let target = 5
let answer = 3
if (returnTargetIndex(arr, target) === answer) {
    console.log('passed')
} else {
    console.log('failed')
}

// return index of target value in sorted array 

// solved with binary search (ie divide and conquer) with log(n)
function returnTargetIndex(arr, target) {
    // initialize a 'min' index for first element of array
    // initialize a 'max' index for the last element of array
    let min = 0
    let max = arr.length - 1
    // iterate - while we are not at the base case, is the min greater than max, if so return -1 as target doesn't exist in array
    while (min <= max) {
        // find middle number of array
        // calculate the 'middle' index as the average of the 'left' and 'right' rounded down
        let middle = Math.floor((min + max) / 2)
        // create 'middle' value variable
        let middleValue = arr[middle]
        // if 'middleValue' is equal to 'target', return middle index
        if (middleValue === target) return middle
        // if middleValue is less than target, discard all to the left by re-assigning min to middleValue + 1
        if (middleValue < target) min = middle + 1
        // if middleValue is greater than target, discard all to the right by re-assigning max to middleValue - 1
        if (middleValue > target) right = middle - 1
    }
    return -1
}