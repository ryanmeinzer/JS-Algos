//input
array = [3, 5, -4, 8, 11, 1, -1, 6]
targetSum = 10 
answer = [11, -1]

// test solution = [11, -1]
if (twoNumberSum(array, targetSum) === answer) {
    console.log('passed')
} else {
    console.log('failed')
} 
console.log(twoNumberSum(array, targetSum))

// solved with two for loops with 0(n ^ 2)
// function twoNumberSum(array, targetSum) {
//     // for every integer of array
//     for (let i = 0; i < array.length - 1; i++) {
//         // for every next integer
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[i] + array[j] === targetSum) {
//                 return [array[i], array[j]]
//             }
//         }
//     }
//     // return empty array if not found
//     return []

// solved with hash table, target variable and single for loop with 0(n)
function twoNumberSum(array, targetSum) {
    // create empty hash table object for numbers
    let nums = {}
    // iterate through elements of array
    for (let num of array) {
        // define target variable that we're looking for
        let target = targetSum - num
        // if 'target' is inside of 'nums'
        if (nums[target]) {
            // return 'target' and 'num'
            return [target, num]
        } else {
            // store current number in hash table
            nums[num] = true
        }
    }
    // return empty array if not found
    return []
}