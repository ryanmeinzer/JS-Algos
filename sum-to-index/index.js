// tests:
let arr = [1, 4, 6, 3, 8]
let index = 3
let answer = 14
if (addUpTo(arr, index) === answer) {
    console.log('passed')
} else {
    console.log('failed')
}

// sum all integers up to a given index in an array with recursion
function addUpTo(arr, index) {
    // base case and exit
    if (index < 1) return arr[index]
    // change input by recursion
    return arr[index] + addUpTo(arr, index - 1)
}