// tests:
let n = 5
let answer = 120
if (factorial(n) === answer) {
    console.log('passed')
} else {
    console.log('failed')
}

// write a funcdtion with iteration and recursion that multiplies all integers from 0 to n 

// recursion
function factorial(n) {
    // base case and exit recursion
    if (n === 0) return 0
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