// test
let arr = [-4, -3, -2, -1, 0, 1, 2, 5]
let answer = [-2, 2]
if (sumZero(arr).toString() === answer.toString()) {
    console.log('passed')
} else {
    console.log('failed')
}

// give a sorted array of integers, find the first pair where sum is zero 

// optimized 0(n) runtime solution
function sumZero(arr) {
    // assign left and right index to variables
    let left = 0
    let right = arr.length - 1
    // loop through arr
    while (left < right) {
        // if sum of left and right index values are zero
        if (arr[left] + arr[right] === 0) {
            // return [left, right]
            return [arr[left], arr[right]]
        } else if (arr[left] + arr[right] > 0) {
            // decrement right
            right --
        } else {
            // increment left
            left ++
        }
    }
}

// // poor 0(n ^ 2) runtime solution
// function sumZero(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === 0) {
//                 return [arr[i], arr[j]];
//             }
//         }
//     }
// }