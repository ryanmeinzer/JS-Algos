// tests:
let n = 5
let answer = 15
if (sumRange(n) === answer) {
    console.log('passed')
} else {
    console.log('failed')
} 

// write a function with iteration then recursion that sums all integers from 0 to n

// recursion
function sumRange(n) {
    // base case and exit
    if (n === 0) return 0
    // different input by decrementing n
    // recurse
    return n + sumRange(n - 1)
}

// // iteration
// function sumRange(n) {
//     let tempSum = 0
//     // iterate through with loop
//     for (let i = n; i > 0; i--) {
//         tempSum += i
//         // same as:
//         // tempSum = i + tempSum
//     }
//     // once exits loop
//     return tempSum
// }