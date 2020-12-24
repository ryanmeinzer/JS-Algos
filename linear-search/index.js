// test
let arr = [3, 6, 11, 12, 8, 7, 4, 2]
let val = 4
let answer = 6
if (linearSearch(arr, val) === answer) {
    console.log('passed')
} else {
    console.log('failed')
}

// create a linear search function to return a value's index if found in array

// solved with 0(n)
function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) return i
    }
    return -1
}
// accepts and array and a value
// loop through array to check if element is equal to value
// if it is, return index
// else, return -1