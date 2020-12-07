// test
let n = 5
let answer = 15
if (sumRange(n) === answer) {
    console.log('passed')
} else {
    console.log('failed')
} 

// example 2/2 - write a function with iteration then recursion that sums all integers from 0 to n

// recursion
function sumRange(n) {
    // base case
    if (n === 1) return 1
    // different input by decrementing n
    // recurse
    return n + sumRange(n - 1)
}

// iteration
function sumRange(n) {
    let tempSum = 0
    for (let i = n; i > 0; i--) {
        tempSum = i + tempSum
    }
    return tempSum
}

// example 1/2 - write a function with iteration then recursion that counts down numbers

// // recursion
// function countDown(n) {
//     // base case
//     if (n <= 0) {
//         // exit recursion
//         return console.log('done ;)')
//     }
//     console.log(n)
//     // different input by decrementing n 
//     n--
//     // recurse
//     countDown(n)
// }

// // iteration
// function countDown(n) {
//     for (let i = n; i > 0; i--) {
//         console.log(i)
//     }
//     // once exits loop
//     console.log('done ;)')
// }