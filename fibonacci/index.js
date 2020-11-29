//input
let n = 6
let answer = 5

// test solution = [11, -1]
if (getNthFib(n) === answer) {
    console.log('passed')
} else {
    console.log('failed')
}

// // solved with iteration with 0(n) linear runtime
// function getNthFib(n) {
//     // create 'results' array with first two numbers
//     let results = [0, 1]
//     // for index of i = 2, loop / iterate up to n
//     for (let i = 2; i <= n; i++) {
//         // let value = sum of last two numbers
//         value = results[i - 2] + results[i - 1]
//         // push i into 'results'
//         results.push(value)
//     }
//     return results[n - 1]
// }

// solved with recursion with 0(2^n)
function getNthFib(n) {
    if (n === 2) return 1
    if (n === 1) return 0
    // if not, return fib(n-1) + fib(n-2)
    return getNthFib(n - 2) + getNthFib(n - 1)
}

// // solved with memoize in 0(n)
// function getNthFib(n, memoize = { 1: 0, 2: 1 }) {
//     if (n === 2) return 1
//     if (n === 1) return 0
//     // if n is in memoize, return it
//     if (memoize[n]) { return memoize[n] }
//     // if not, store prior recursive formula in memoize of n
//     memoize[n] = getNthFib(n - 2, memoize) + getNthFib(n - 1, memoize)
//     // return memoize of n
//     return memoize[n]
// }