// tests for 1/3:
let n = 5
countDown(n)

// write a function with iteration then recursion that counts down numbers

// recursion
function countDown(n) {
    // base case
    if (n <= 0) {
        // exit recursion
        return console.log('done ;)')
    }
    console.log(n)
    // different input by decrementing n 
    n--
    // recurse
    return countDown(n)
}

// // iteration
// function countDown(n) {
//     // iterate through with loop
//     for (let i = n; i > 0; i--) {
//         console.log(i)
//     }
//     // once exits loop
//     console.log('done ;)')
// }