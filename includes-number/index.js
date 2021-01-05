let arr = [1, 4, 6, 3, 8]
let num = 6
let answer = true
if (includesNumber(arr, num) === answer) {
    console.log('passed')
} else {
    console.log('failed')
}

// evaluate if a number exists in an array
function includesNumber(arr, num) {
    if (!arr.length) return false
    // base case and exit
    if (arr[0] === num) return true
    // change input by recursion
    return includesNumber(arr.slice(1), num)
}