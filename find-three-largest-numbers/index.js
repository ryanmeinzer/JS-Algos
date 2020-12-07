// test
let array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]
let answer = [18, 141, 541]
if (findThreeLargestNumbers(array).toString() === answer.toString()) {
    console.log('passed')
} else {
    console.log('failed')
} 

// return a sorted array of the three largest integers of an unsorted array of >3 integers, without sorting the input array

// solved with 0(n)
function findThreeLargestNumbers(array) {
    // keep track and store three largest numbers of array with 'result' array of three elements
    let result = [null, null, null]
    // loop through array
    for (let num of array) {
        // if we don't have a third value in 'result' OR if num is greater than the third value
        if (result[2] === null || num > result[2]) {
            // shift by re-assigning first value to second value
            result[0] = result[1]
            // shift by re-assigning second value to first value
            result[1] = result[2]
            // assign third value to num
            result[2] = num
            // else if we don't have a second value in 'result' OR if num is greater than the second value
        } else if (result[1] === null || num > result[1]) {
            // shift by re-assigning first value to second value
            result[0] = result[1]
            // assign second value to num
            result[1] = num
            // else if we don't have a first value in 'result' OR if num is greater than the first value
        } else if (result[0] === null || num > result[0]) {
            // assign first value to num
            result[0] = num
        }
    }
    // return 'result'
    return result
}