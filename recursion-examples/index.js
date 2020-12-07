// // tests for 1/3:
// let n = 5
// countDown(n)

// // tests for 2/3:
// let n = 5
// let answer = 15
// if (sumRange(n) === answer) {
//     console.log('passed')
// } else {
//     console.log('failed')
// } 

// tests for 3/3:
let n = 5
let answer = 120
if (factorial(n) === answer) {
    console.log('passed')
} else {
    console.log('failed')
} 

// example 3/3 - write a funcdtion with iteration and recursion that multiplies all integers from 0 to n

// recursion
function factorial(n) {
    // base case and exit recursion
    if (n === 1) return 1 
    // recurse with different inputs
    return n * factorial(n - 1)
}


// // iteration
// function factorial(n) {
//     let total = 1
//     // iterate through with loop
//     for (let i = n; i > 0; i--) {
//         total *= i
//     }
//     // once exit loop 
//     return total
// }

// example 2/3 - write a function with iteration then recursion that sums all integers from 0 to n

// // recursion
// function sumRange(n) {
//     // base case and exit
//     if (n === 1) return 1
//     // different input by decrementing n
//     // recurse
//     return n + sumRange(n - 1)
// }

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

// example 1/3 - write a function with iteration then recursion that counts down numbers

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
//     return countDown(n)
// }

// // iteration
// function countDown(n) {
//     // iterate through with loop
//     for (let i = n; i > 0; i--) {
//         console.log(i)
//     }
//     // once exits loop
//     console.log('done ;)')
// }