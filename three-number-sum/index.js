//input
let array = [3, 5, -4, 8, 11, 1, -1, 6]
let targetSum = 14
let answer = [[1, 5, 8], [3, 5, 6]]

// test solution = [11, -1]
if (threeNumberSum(array, targetSum).toString() === answer.toString()) {
    console.log('passed')
} else {
    console.log('failed')
} 

// given an array of distinct integers, return all three numbers in a 2D array that equal the target sum

// solved with pointers at both sides with O(n)
function threeNumberSum(array, targetSum) {
    // sort array
    array.sort((a, b) => a - b)
    // create 'threeAmigos' variable for solution
    let threeAmigos = []
    // loop over array starting at index 0 until right pointer
    for (i = 0; i < array.length - 2; i++) {
        // create left pointer and right pointer at both sides
        let left = i + 1
        let right = array.length - 1
        // while left < right
        while( left < right) {
            // create 'currentSum' variable for three variables i, left and right
            let currentSum = array[i] + array[left] + array[right]
            // if 'currentSum' is equal to targetSum, push all three variables into 'threeAmigos'
            if (currentSum === targetSum) {
                threeAmigos.push([array[i], array[left], array[right]])
                // increment left and decrement right
                left++
                right--
            // else if currentSum < targetSum, increment left
            } else if (currentSum < targetSum) {
                left++
            // else if currentSum > targetSum, decrement right
            } else if (currentSum > targetSum) {
                right--
            }
        }
    }
    // return threeAmigos
    return threeAmigos
}

