// test
let n = 7
let answer = [1, 2, 'fizz', 4, 'buzz', 'fizz', 7]
if (fizzBuzz(n).toString() === answer.toString()) {
    console.log('passed')
} else {
    console.log('failed')
}

function fizzBuzz(n) {
    // create array to insert all outputs to for tests
    let arr = []
    // use standard loop from 1 as there isn't an array or object to for of loop over
    for (let num = 1; num <= n; num++) {
        if (num % 3 === 0 && num % 5 === 0) {
            arr.push('fizzbuzz')
        } else if (num % 3 === 0) {
            arr.push('fizz')
        } else if (num % 5 === 0) {
            arr.push('buzz')
        } else {
            arr.push(num)
        }
    }
    // return array
    return arr
}