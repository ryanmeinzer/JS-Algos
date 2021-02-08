let arr = [1, 4, 6, 3, 8]
let answer = 8
if (maxOf(arr) === answer) {
    console.log('passed')
} else {
    console.log('failed')
}

// return the max integer of an array
function maxOf(arr) {
    // base case and exit
    if (arr.length === 1) return arr[0]
    // change input by recursion
    return Math.max(arr.pop(), maxOf(arr))
}

// // solved with loop
// function maxOf(arr) {
//     let max_num = Number.NEGATIVE_INFINITY
//     for (let num of arr) {
//         if (num > max_num) {
//             max_num = num
//         }
//     }
//     return max_num;
// }