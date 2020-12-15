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

// solved with sliding window pattern with 0(n)
function maxSubarraySum(arr, n) {
    // create maxSum and tempSum variables
    let maxSum = 0
    let tempSum = 0
    // cover edge case
    if (n > arr.length) return null
    // start at beginning and loop to add to create first tempSum
    for (let i = 0; i < n; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum
    // start another loop subtract first num and add subsequent num
    for (let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i - n] + arr[i]
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
}


// // solved with nested loops with 0(n^2)
// function maxSubarraySum(arr, n) {
//     // cover edge case
//     if (n > arr.length) {
//         return null
//     }
//     // create variable 'max' starting at negative infinity to cover all cases less than 0 for an array with all negative numbers, for example
//     let max = -Infinity
//     // loop through array but make sure the end is according to n
//     for (let i = 0; i < arr.length - n; i++) {
//         // create temp variable to hold sum
//         let sum = 0
//         // loop through from 0 index to n to add elements 
//         for (let j = 0; j < n; j++) {
//             sum += arr[i + j]
//         }
//         // update max until end of loop
//         if (sum > max) {
//             max = sum
//         }
//     }
//     return max
// }