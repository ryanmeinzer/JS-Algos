// test:
let base = 2
let exponent = 4
let answer = 16
if (power(base, exponent) === answer) {
    console.log('passed')
} else {
    console.log('failed')
}

// return the power of a 'base' to an 'exponent' recursively

function power(base, exponent) {
    // base case with exit
    if (exponent === 0) return 1
    // input changes with recursion
    return base * power(base, exponent - 1)
}

// recursion mapped out
// power(2, 4)
    // 2 * power(2, 3) -> 16
        // 2 * power(2, 2) -> 8
            // 2 * power(2, 1) -> 4
                // 2 * power(2, 0) -> 1