// test
let array = [5, 1, 22, 25, 6, -1, 8, 10]
let sequence = [1, 6, -1, 10]
let answer = true
if (isValidSubsequence(array, sequence).toString() === answer.toString()) {
    console.log('passed')
} else {
    console.log('failed')
} 

// // solved a bit tediously with two indexes
// function isValidSubsequence(array, sequence) {
//     // create variables for both array and sequence indexes
//     let iArr = 0
//     let iSeq = 0
//     // iterate through array and sequence
//     while (iArr < array.length && iSeq < sequence.length) {
//         // if any indexes are equal, increment both indexes
//         if (array[iArr] === sequence[iSeq]) iSeq++; iArr++
//     }
//     // if escapes loop AND is on the last sequence index, return true
//     return iSeq === sequence.length
// }

// solved with 0(n)
function isValidSubsequence(array, sequence) {
    // create variables for sequence index
    let iSeq = 0
    // iterate through array
    for (let char of array) {
        // break (not return) out of loop if at end of sequence
        if (iSeq === sequence.length) break
        // if the value at iSeq is equal to char, increment iSeq
        if (sequence[iSeq] === char) iSeq++
    }
    // if escapes loop AND is on the last sequence index, return true
    return iSeq === sequence.length
}