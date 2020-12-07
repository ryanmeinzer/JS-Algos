// test
countDown(5)

// write a function with iteration then recursion that counts down numbers

// recursion
function countDown(n) {
    // base case
    if (n <= 0) {
        // exit recursion
        return console.log('done ;)')
    }
    console.log(n)
    // decrement n
    n--
    // recurse
    countDown(n)
}

// // iteration
// function countDown(n) {
//     for (let i = n; i > 0; i--) {
//         console.log(i)
//     }
//     // once exits loop
//     console.log('done ;)')
// }