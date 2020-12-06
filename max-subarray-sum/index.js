// test
let arr = [4,2,1,6,2]
let n = 4
let answer = 13
if (maxSubarraySum(arr, n) === answer) {
    console.log('passed')
} else {
    console.log('failed')
}

// find largest sum of n consecutive integers of arr
// solved with nested loops with 0(n^2)
function maxSubarraySum(arr, n) {
    // cover edge case
    if (n > arr.length) {
        return null
    }
    // create variable 'max' starting at negative infinity to cover all cases less than 0 for an array with all negative numbers, for example
    let max = -Infinity
    // loop through array but make sure the end is according to n
    for (let i = 0; i < arr.length - n; i++) {
        // create temp variable to hold sum
        let sum = 0
        // loop through from 0 index to n to add elements 
        for (let j = 0; j < n; j++) {
            sum += arr[i + j]
        }
        // update max until end of loop
        if (sum > max) {
            max = sum
        }
    }
    return max
}